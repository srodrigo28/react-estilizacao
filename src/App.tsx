import React from 'react';
import './App.css';
import { Inline } from './components/Inline';
import styled from 'styled-components';

        const Container = styled.div`
            background-color: #ccc;
            width: 80%;
            margin: auto;
            height: 100vh;
        `;
        const Botao = styled.button`
            width: 100px;
            border: 0;
            background-color: blue;
            color: white;
            height: 40px;
            border-radius: 5px;
            font-weight: bold;
        `;
        const Paragrafo = styled.p`
            color: white;
            background-color: yellow
            font-width: bold
        `;

function App() {
  return (
   <Container>
     {/* <Inline /> */}
     <Botao>Oi</Botao>
     <Paragrafo>sou um paragrafo para texto</Paragrafo>

   </Container>
  );
}

export default App;
