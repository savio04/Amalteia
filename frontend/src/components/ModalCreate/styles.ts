import styled, { css } from 'styled-components'
import { Input, Tooltip } from 'antd';

interface IErrorInput{
    isError:boolean
}

export const Form = styled.form`
    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

export const InputForm = styled(Input)<IErrorInput>`
    ${({isError}) => isError && css`
        border-color: red;
        svg{
            color: red;
        }
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