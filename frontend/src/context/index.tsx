import React, { createContext, PropsWithChildren, ReactNode } from 'react'
import { useState } from 'react'
import { IEmployee } from '../components/Employee'
import api from '../services/api'

interface IEmployeesContext{
  employees: IEmployee[]
  updateEmployees():void
}

export const EmployeeContext  = createContext({} as IEmployeesContext)

function EmployeeProvider({children}:PropsWithChildren<ReactNode>){
  const [employees,setEmployees] = useState<IEmployee[]>(() => {
    api.get('/').then(response => setEmployees(response.data))
    return []
  })

  function updateEmployees(){
    api.get('/')
      .then(response => setEmployees(response.data))
      .catch(err => console.log(err))
  }

  return(
    <EmployeeContext.Provider
      value = {{ employees, updateEmployees}}
    >
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider