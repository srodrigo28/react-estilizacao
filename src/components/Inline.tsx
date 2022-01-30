import { Button } from "./button"

export const Inline = () =>{
    return(
        <div style={{
            maxWidth: 400,
            margin: 'auto'
          }}>
            <h1>Hello, React</h1>
            <Button/>
            <button className='btn'>Cadastrar</button>
          </div>
    )
}