import styled from 'styled-components';

type BotaoProps = { bg: string, small?: boolean }
type ContainerProps = { cor?: string }

export const Container = styled.div<ContainerProps>`
    background-color: ${(props) => props.cor };
    height: 100vh;

    @media(max-width: 500px){
        background-color: #ebd592;
        flex-direction: column
    }
    @media(max-width: 400px){
        background-color: blue;
    }
    @media(max-width: 300px){
        background-color: green;
    }
`;

export const Botao = styled.button<BotaoProps>`
    font-size: ${(props) => props.small ? '30px' : '15px' };
    background-color: ${(props) => props.bg }
`;