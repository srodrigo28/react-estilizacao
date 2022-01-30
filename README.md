# Usando biblioteca Styled Components
* npm install styled-components
* npm install -D @types/styled-components
* formas para importar components styed-components
    * criar um arquivo com extensão ts ou tsx exemplo estilo.ts
        * import styled from 'styled-components';
    * import { Container, Botao, Paragravo } from './styles.css';
    * import { Container } from './styles.css';
    * import { Botao } from './styles.css';
    * import * as C from './styles.css';
    ## Exemplo Styled Components
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
* Responsividade no Styled-Components
    export const Container = styled.div<ContainerProps>`
        background-color: ${(props) => props.cor };
        height: 100vh;

        @media(max-width: 500px){
            background-color: #ebd592;
        }
        @media(max-width: 400px){
            background-color: blue;
        }
        @media(max-width: 300px){
            background-color: green;
        }
    `;
## Usando Bootstrap
    * formas de instalar o bootstrap
        * npm install react-bootstrap bootstrap@5.1.3
        * npm install react-bootstrap
    * forma de usar
        * importar no arquivo principal index.js ou index.ts, ou index.tsx
        * import 'bootstrap/dist/css/bootstrap.min.css';

## Usando Twaind
    * instalação no react-app
        * link: https://tailwindcss.com/docs/guides/create-react-app
        * npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
        * npx tailwindcss init -p

## Material Designer UI