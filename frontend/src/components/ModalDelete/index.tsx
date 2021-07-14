import React from 'react'
import { Modal, Button, notification} from 'antd';
import api from '../../services/api';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { FiTrash2 } from 'react-icons/fi';
/**
 * Todo
 * context with employess
 */

interface IModalDelete{
  id:string
  name:string
  office:string
}


const ModalDelete = (data:IModalDelete) => {
  
  const {confirm} = Modal

  const handleDeleteEmployee = async() => {
    const response = await api.delete(`/${data.id}`)
    return response.status
  }

  const openNotification = () => {
    notification.open({
      message: 'Funcionario Deletado com sucesso!',
      style: {
        borderWidth: 2,
      }
    })
  }

  function showDeleteConfirm() {
    confirm({
      title: 'Deletar este funcionário?',
      icon: <ExclamationCircleOutlined />,
      content: (
        <span>
          <p> Nome: {data.name} </p>
          <p> Cargo: {data.office} </p>
        </span>
      ),
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      onOk() {
        handleDeleteEmployee().then(response => {
          if(response === 204){
            openNotification()
          }
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
      <Button
        onClick={() => {
          showDeleteConfirm()
        }}
        style = {{
          display: 'flex',
          alignItems: 'center',
          width: '40%',
          justifyContent: 'center'
        }}
      >
        <FiTrash2
          style = {{
            marginRight: 3
          }} 
          size = {20} 
        />
        Excluir
      </Button>
  );
};

export default ModalDelete