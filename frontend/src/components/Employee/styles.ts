import styled, { css } from 'styled-components'

interface IEmployee{
    isDashed?:boolean
    isPadding?:boolean
}

export const EmployeeContainer = styled.div`
    border-radius: 0.4rem;
    background-color: #FFF;
    color: black;
    padding: 0.8rem;
    box-shadow: 0.2rem 0rem 1.5rem rgba(0,0,0,0.2);

    header{
        height: 6rem;
        background: #A8DADC;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

export const EmployeeButtonContainer = styled.div`
    width: 100%;
    border-top: solid #A8DADC 0.12rem;
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
`;

export const EmployeeContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EmployeeHeader = styled.header`
   
    display: flex;
    align-items: center;
    color: #FFF;

    h2{
        font-weight: bold;
        margin-bottom: 0;
        margin-left: 0.3rem;
        margin-right: 1rem;
        color: #FFF;
    }
`;

export const EmployeeProfile = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        width: 8rem;
        border-radius: 50%;
        margin-top: -2rem;
    }
    div{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        h1{
            text-align: start;
            margin: 0;
        }
    }
`;

export const EmployeeData = styled.div`
    margin-top: 1.2rem;
    display: grid;
    grid-template-columns: 24% 38% 38%;
    max-width: 100%;
    margin-bottom: 1rem;
    justify-content: center;
`;

export const DivItem = styled.div<IEmployee>`
    overflow: auto;
    ${({isDashed}) => isDashed && css`
        border-right: dashed #457B9D 0.12rem;
    `}

    ${({isPadding}) => isPadding && css`
        padding-left: 0.4rem;
    `}

    span{
        display: flex;
        flex-direction: column;
    }
    h3{
        font-weight: bold;
        margin: 0;
    }
`;