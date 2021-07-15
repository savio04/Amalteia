import styled, { css } from 'styled-components'
import { Tooltip } from 'antd';
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

export const FiInfoIcon = styled(FiInfo)<IErrorInput>`
${({isError}) => isError && css`
        color: red;
    `}
`;

export const TooltipError = styled(Tooltip)`
    position: absolute;
    right: 2rem;
    margin-top: 0.6rem;
    z-index: +1;
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