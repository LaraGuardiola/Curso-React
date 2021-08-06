import React, {useState} from 'react'

//*HOOKS - useState, guarda el estado de un valor previo a la nueva renderización y lo transfiere en la nueva render

const A_EntendiendoUseState = () => {
    //console.log(useState(28))
    //const value = useState('valor')[0]
    //const handler = useState('valor')[1]
    //console.log(value, handler)

    let ejemplo = "hola"

    const handleClick = () => {
        ejemplo ="adios"
        console.log(ejemplo)
    }

    //?El output sera que el h1 será igual ("hola") sin embargo el console.log sacara adios.
    //?Por qué? - Como se triggea un evento onClick se vuelve a renderizar el componente, con lo cual let ejemplo vuelve a ser "hola", puesto que es un NUEVO ESTADO y handleClick solo esta definida pero no invocada en ningun caso

    return (
        <div className='mainContainer'>
            <h1>{ejemplo}</h1>
            <button type="button" onClick={handleClick}>Cambia el h1</button>
        </div>
    )
}

export default A_EntendiendoUseState
