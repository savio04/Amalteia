import React, { useState } from 'react';
import { Modal, Button, DatePicker, Select, notification, Tooltip } from 'antd';
import { FiInfo, FiMail, FiUser, FiUserPlus} from 'react-icons/fi';
import { Option } from 'antd/lib/mentions';
import api from '../../services/api';
import { EmployeeContext } from '../../context';
import { Form, FormItem, InputForm } from './styles'
import { useContext } from 'react';
import schema from '../../utils/dataValidation';



const ModalCreate = () => {
    const employeeContext = useContext(EmployeeContext)
    const { updateEmployees } = employeeContext

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [admission_date,setAdmissionDate] = useState(new Date())
    const [birth_date,setBirthDate] = useState(new Date())
    const [sector,setSector] = useState('')
    const [office,setOffice] = useState('')
    const [level,setLevel] = useState('')

    const [errorData,setErrorData] = useState(false)

    const handleCreateEmployee = async () => {
       
        const response = await api.post('/',{
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
          message: 'Funcionario cadastrado com sucesso!',
          type: 'success',
          placement: 'topLeft'
        })
    }

    const openNotificationError = (err:string) => {
        notification.open({
          message: 'Ocorreu um erro no cadastro',
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
            name,
            email,
            admission_date,
            birth_date,
            sector,
            office,
            level
        }).then(() => {
            handleCreateEmployee().then(response => {
                if(response === 200){
                    openNotificationSucess()
                    updateEmployees()
                    setIsModalVisible(false)
                    // updateEmployees()
                    // setName('')
                    // setEmail('')
                    // setAdmissionDate()
                    // setBirthDate()
                    // setSector('')
                    // setOffice('')
                    // setLevel('')
                }
            })
            .catch(err => {
                const {message} = err.response.data
                openNotificationError(message)
            })
        })
        .catch(err => {
            console.log(err)
            setErrorData(true)
            openNotificationError(err)
        })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

  return (
    <>
        <Button
            style = {{
                width: '10rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            type = 'primary'
            size = 'large'
            onClick={showModal}
        >
            <FiUserPlus 
                size = {20} 
                style = {{
                    marginRight: 6,
                }}
            />
            Cadastrar
        </Button>
        <Modal 
            title='Cadastrar Funcionário'
            visible={isModalVisible}
            onOk={handleOk} 
            onCancel={handleCancel}
            okText = 'Criar'
        >
            <Form>
            
            <InputForm 
                size="large" 
                placeholder="Nome"
                prefix={<FiUser />}
                suffix = {errorData && <Tooltip title = 'teste'>
                    <FiInfo size = {20} />
                </Tooltip>}
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                style = {{
                    marginBottom: '1rem'
                }}
                isError = {errorData}
            />
    
            <InputForm
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                size="large" 
                placeholder="exemplo@gmail.com" 
                prefix={<FiMail />}
                isError = {errorData}
            />

             <div>
                 <FormItem>
                     <label htmlFor="">Data de Admissão</label>
                     <DatePicker 
                         placeholder = 'Data de admissão'
                         style = {{
                             width: '100%',
                         }}
                         onChange = {(date,datestring) => 
                             setAdmissionDate(new Date(datestring))
                         }
                     />
                 </FormItem>

                 <FormItem>
                     <label htmlFor="">Data de Nascimento</label>
                     <DatePicker 
                         placeholder = 'Data de nascimento'
                         style = {{
                             width: '100%',
                         }}
                         onChange = {(data,datastring) => 
                             setBirthDate(new Date(datastring))
                         }
                     />
                 </FormItem>
             </div>

             <div>
                 <FormItem>
                     <label htmlFor="">Setor</label>
                     <Select  
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

export default ModalCreate