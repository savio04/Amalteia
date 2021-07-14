import React from 'react'
import { useState } from 'react'
import {
    HomeContainer,
    HomeContent,
    HomeFooter,
    HomeHeader,
} from './styles'
import api from '../../services/api'
import { FiGithub,FiHeart, FiInstagram, FiLinkedin} from 'react-icons/fi'
import Employee, { IEmployee } from '../../components/Employee'
import { Empty } from 'antd'


function Home(){
    const [employess,setEmployees] = useState<IEmployee[]>(() => {
        api.get('/')
        .then(response => setEmployees(response.data))
        return []
    })
    return(
        <HomeContainer>
            <HomeHeader>
                <h1>Funcionários Cadastrados</h1>
                <button>Cadastrar</button>
            </HomeHeader>
            <HomeContent>
                {employess.length === 0 && 
                    <Empty
                    image = 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                    description = {
                        <span>
                                Nenhum funcionario cadastrado
                            </span>
                        }
                        style = {{
                            textAlign: 'center',
                        }}
                        />
                    }

                {employess.map(employee => <Employee key = {employee.id} {...employee} />)}
            </HomeContent>
            <HomeFooter>
                <div>
                    <a href="https://www.instagram.com/savio.araujo0/"><FiInstagram  size= {20}/></a>
                    <a href="https://www.linkedin.com/in/sávio-araújo-gomes"><FiLinkedin size = {20} /></a>
                    <a href="https://github.com/savio04"><FiGithub size = {20}/></a>
                </div>
                <p>Feito com <FiHeart size = {20} /> para você!!</p>
            </HomeFooter>
        </HomeContainer>
    )
}

export default Home