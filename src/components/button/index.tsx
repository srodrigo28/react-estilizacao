import { useState } from 'react'

export const Button = () =>{
   //const [padding, setPadding] = useState(5);
   const [width, setWidth] = useState(50);
   const [color, setColor] = useState('white')
   const handleCkick = () =>{
     //setPadding(20);
     //setWidth(100)
     setColor('black')
   }
    return(
        <button 
            onClick={handleCkick}
            style={{
            backgroundColor: '#fa8331',
            color,
            fontSize: '',
            width: 100,
            height: 30,
            borderRadius: 5,
            border: 0,
            marginRight: 10,
            fontWeight: 'bold',
            // padding

          }}>
            Entrar
          </button>
    )
}