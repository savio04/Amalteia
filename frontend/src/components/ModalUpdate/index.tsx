import React, { useState } from 'react';
import { Modal, Button, Input, DatePicker, Select, notification, Tooltip } from 'antd';
import { FiEdit2, FiMail, FiUser} from 'react-icons/fi';
import { FiInfoIcon, Form, FormItem } from './styles'
import { IEmployee } from '../Employee';
import { Option } from 'antd/lib/mentions';
import api from '../../services/api';
import moment from 'moment'
import { EmployeeContext } from '../../context';
import { useContext } from 'react';
import schema from '../../utils/dataValidation';

interface IError{
    message:string
    path:string
}

const ModalUpdate = (data:IEmployee) => {
    const employeeContext = useContext(EmployeeContext)
    const { updateEmployees } = employeeContext

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [name,setName] = useState(data.name)
    const [email,setEmail] = useState(data.email)
    const [admission_date,setAdmissionDate] = useState(data.admission_date)
    const [birth_date,setBirthDate] = useState(data.birth_date)
    const [sector,setSector] = useState(data.sector)
    const [office,setOffice] = useState(data.office)
    const [level,setLevel] = useState(data.level)
    const dateFormat = 'YYYY/MM/DD'
    const [errorData,setErrorData] = useState({} as any)


    const handleUpdateEmployee = async () => {
        const response = await api.put(`/${data.id}`,{
            name,
            email,
            admission_date,
            birth_date,
            sector,
            office,
            level
        })

        return response.status
    }

    const openNotificationSucess = () => {
        notification.open({
          message: 'Funcionario atualizado com sucesso!',
          type: 'success',
          placement: 'topLeft'
        })
    }

    const openNotificationError = (err:string) => {
        notification.open({
          message: `Ocorreu um erro ao atualizar o Funcionário`,
          description: `Erro: ${err}`,
          type: 'error',
          placement: 'topLeft'
        })
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        schema.validate({
            nameValid: name,
            emailValid: email,
            admission_dateValid: admission_date,
            birth_dateValid: birth_date,
            sectorValid: sector,
            officeValid: office,
            levelValid: level
        },{abortEarly: false}).then(() => {
            handleUpdateEmployee().then(response => {
                if(response === 204){
                    openNotificationSucess()
                    updateEmployees()
                    setIsModalVisible(false)
                }
            })
            .catch(err => {
                const {message} = err.response.data
                openNotificationError(message)
            })
        })
        .catch(err => {
            const errors:IError[] = err.inner
            errors.forEach(e => {
                const teste = errorData
                teste[`${e.path}`] = e.message
            
                setErrorData({...teste})

                if(e.path !== 'emailValid' && e.path !== 'nameValid'){
                    openNotificationError(e.message)
                }
            })
        })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

  return (
    <>
        <Button
            style = {{
                width: '40%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }} 
            onClick={showModal}
        >
            <FiEdit2 
                size = {20} 
                style = {{
                    marginRight: 3 
                }}
            />
            Editar
        </Button>
        <Modal 
            title='Atualizar Funcionário'
            visible={isModalVisible}
            onOk={handleOk} 
            onCancel={handleCancel}
            okText = 'Atualizar'
        >
            <Form>
             
                <Input 
                    size="large" 
                    placeholder="Nome"
                    prefix={<FiUser />}
                    suffix = {!!errorData['nameValid'] && 
                    <Tooltip title = {`${errorData['nameValid']}`}>
                        <FiInfoIcon size = {20} isError = {!!errorData['nameValid']}/>
                    </Tooltip>}
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    style = {{
                        marginBottom: '1rem'
                    }}
                />
             
                <Input
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    size="large" 
                    placeholder="Email" 
                    prefix={<FiMail />}
                    suffix = {!!errorData['emailValid'] && 
                    <Tooltip title = {`${errorData['emailValid']}`}>
                        <FiInfoIcon isError = {!!errorData['emailValid']} size = {20} />
                    </Tooltip>}
                />

                <div>
                    <FormItem>
                        <label htmlFor="">Data de Admissão</label>
                        <DatePicker 
                            placeholder = 'Data de admissão'
                            style = {{
                                width: '100%',
                            }}
                            defaultValue = {
                                moment(`${data.admission_date}`,dateFormat)
                            }
                            onChange = {(date,datestring) => 
                                setAdmissionDate(new Date(datestring))
                            }
                            format = {dateFormat}
                        />
                    </FormItem>

                    <FormItem>
                        <label htmlFor="">Data de Nascimento</label>
                        <DatePicker 
                            placeholder = 'Data de nascimento'
                            style = {{
                                width: '100%',
                            }}
                            defaultValue = {
                                moment(`${data.birth_date}`,dateFormat)
                            }
                            onChange = {(data,datastring) => 
                                setBirthDate(new Date(datastring))
                            }
                            format = {dateFormat}
                        />
                    </FormItem>
                </div>

                <div>
                    <FormItem>
                        <label htmlFor="">Setor</label>
                        <Select  
                            defaultValue={`${data.sector}`} 
                            style={{ width: '100%', paddingRight: '0.4rem'}} 
                            allowClear
                            value = {sector}
                            onChange = {value => setSector(value)}
                        >
                            <Option value="Engenharia">Engenharia</Option>
                            <Option value="Compras">Compras</Option>
                            <Option value="Vendas">Vendas</Option>
                            <Option value="Financeiro">Financeiro</Option>
                        </Select>
                    </FormItem>

                    <FormItem>
                        <label htmlFor="">Cargo</label>
                        <Select 
                            defaultValue={`${data.office}`} 
                            style={{ width: '100%'}} 
                            allowClear
                            value = {office}
                            onChange = {value => setOffice(value)}
                        >
                            <Option value="Auxiliar">Auxiliar</Option>
                            <Option value="Técnico">Técnico</Option>
                            <Option value="Engenheiro">Engenheiro</Option>
                            <Option value="Diretor">Diretor</Option>
                        </Select>
                    </FormItem>

                    <FormItem>
                        <label htmlFor="">Nivel</label>
                        <Select 
                            defaultValue={`${data.level}`} 
                            style={{ width: '100%', paddingLeft: '0.3rem'}} 
                            allowClear
                            value = {level}
                            onChange = {value => setLevel(value)}
                        >
                            <Option value="Junior">Junior</Option>
                            <Option value="Pleno">Pleno</Option>
                            <Option value="Senior">Senior</Option>
                            <Option value="Estagiario">Estagiario</Option>
                        </Select>
                    </FormItem>
                </div>
            </Form>   
        </Modal>
  </>
  )
}

export default ModalUpdate