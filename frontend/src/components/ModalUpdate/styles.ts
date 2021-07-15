import styled, { css } from 'styled-components'
import { FiInfo } from 'react-icons/fi'

interface IErrorInput{
    isError?:boolean
}


export const Form = styled.form`

    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        overflow: auto;
    }
`;

export const FormItem = styled.span`
    display: flex;
    width: 45%;
    flex-direction: column;
    justify-content: start;
    margin-top: 1rem;
    label{
        padding-bottom: 0.2rem;
    }
`;

export const FiInfoIcon = styled(FiInfo)<IErrorInput>`
${({isError}) => isError && css`
        color: red;
    `}
`;