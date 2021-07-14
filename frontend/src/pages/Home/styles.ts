import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1{
        width: 100%;
        text-align: center;
        margin-top: 02rem;
    }
`;

export const HomeHeader = styled.header``;

export const HomeContent = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit,25rem);
    height: 100%;
    width: 100%;
    margin-top: 2rem;
    column-gap: 1.5rem;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;

    @media(max-width:30rem){
        grid-template-columns: repeat(auto-fit,90%);
    }
`;
export const HomeFooter = styled.footer`
    background-color: #1D3557;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5rem;
    div{
        display: flex;
        justify-content: space-between;
        width: 5rem;
        padding-bottom: 0.8rem;
        margin-top: 1rem;
        a{
            color: #FFF;
        }
    }
    p{
        color: #FFF;
        display: flex;
        align-items: center;
        svg{
            color: #FFF;
            margin-left: 0.2rem;
            margin-right: 0.2rem;
        }
    }
`;