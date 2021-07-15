import React from 'react'
import {
    HomeContainer,
    HomeContent,
    HomeEmpty,
    HomeFooter,
    HomeHeader,
} from './styles'
import { FiGithub,FiHeart, FiInstagram, FiLinkedin, FiList} from 'react-icons/fi'
import Employee from '../../components/Employee'
import { EmployeeContext } from '../../context';
import { useContext } from 'react'
import ModalCreate from '../../components/ModalCreate'
import ImageEmpty from '../../assets/empty.svg'



function Home(){
    const employeeContext = useContext(EmployeeContext)
    const { employees } = employeeContext
    return(
        <HomeContainer>
            <HomeHeader>
                <div>
                    <h1>
                        <FiList size={35} />
                        Funcionários Disponiveis
                    </h1>
                    <ModalCreate />
                </div>
            </HomeHeader>
            <HomeContent>
                {employees.length === 0 ?
                        <HomeEmpty>
                            <div>
                                <img src={ImageEmpty} alt="" />
                            </div>
                            <h2>Nenhum funcionário cadastrado</h2>
                        </HomeEmpty>
                        :
                        employees.map(employee => <Employee key = {employee.id} {...employee} />)
                    }
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