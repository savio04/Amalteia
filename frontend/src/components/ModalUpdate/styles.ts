import styled from 'styled-components'

export const Form = styled.form`

    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
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