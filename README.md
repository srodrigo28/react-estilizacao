# usando biblioteca Styled Components
* npm install styled-components
* npm install -D @types/styled-components
* import styled from 'styled-components;
* formas para importar components styed-components
    * import { Container, Botao, Paragravo } from './styles.css';
    * import { Container } from './styles.css';
    * import { Botao } from './styles.css';
    * import * as C from './styles.css';
    ## exemplo styled components
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

## usando bootstrap
    * formas de instalar o bootstrap
        * npm install react-bootstrap bootstrap@5.1.3
        * npm install react-bootstrap
    * forma de usar
        * importar no arquivo principal index.js ou index.ts, ou index.tsx
        * import 'bootstrap/dist/css/bootstrap.min.css';

## usando Twaind

## material designer