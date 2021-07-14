import React,{ createContext, useState} from 'react'
import { IEmployee } from '../components/Employee'
import api from '../services/api'


interface AuthContextProps{
  isError: boolean
  employees: IEmployee[]
  employeeContext:void
}

export const AuthContext = createContext({} as AuthContextProps)


const AuthProvider: React.FC = ({children}) => {
  
  const [hasError,setHasError] = useState(false)
  const [employees,setEmployes] = useState<IEmployee[]>([])

  const employeeContext =() => {
    api.get('/').then(response => {
      setEmployes(response.data)
    })
  }
  return(
    <AuthContext.Provider value  ={{
      isError: hasError,
      employees,
      employeeContext: employeeContext()
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider