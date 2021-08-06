import React, {useState} from 'react'

//*EMPLEANDO useState para transferir el valor del estado anterior al actual

function B_UseStateBasic() {
    //console.log(useState(28))
    //const value = useState('valor')[0]
    //const handler = useState('valor')[1]
    //console.log(value, handler)

    const [text, setText] = useState('random title')//fijamos estado

    const handleClick = () => {
        (text === 'random title')
            ? setText('changed title')
            : setText('random title')
        
    }

    //?El output sera que el h1 será igual ("hola") sin embargo el console.log sacara adios.
    //?Por qué? - Como se triggea un evento onClick se vuelve a renderizar el componente, con lo cual let ejemplo vuelve a ser "hola", puesto que es un NUEVO ESTADO y handleClick solo esta definida pero no invocada en ningun caso

    return (
        <div className='mainContainer'>
            <h1>{text}</h1>
            <button type="button" onClick={handleClick}>Cambia el h1</button>
        </div>
    )
}

export default B_UseStateBasic
