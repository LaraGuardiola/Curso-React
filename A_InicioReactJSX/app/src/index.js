import React from 'react'; //permite crear componentes
import ReactDom from 'react-dom'; //permite manipular el dom
import './index.css'
//importo las dependencias react y react-dom

//los componentes empiezan en mayuscula (y camel case)

//STATELESS FUNCTIONAL COMPONENT, siempre devuelve un JSX

/*function Saludo(){
  return <h1>Hola mundo - primer component</h1>
} */

//el jsx es meramente para ayudar al programador, perfectamente se podria hacer lo mismo en js

const Saludo = () => {
  return React.createElement('h1',{},'Hola mundo ;D')
}

//se puede observar que la complejidad en js aumenta a medida que añadimos etiquetas

const SaludoEnDiv = () => {
  return React.createElement('div',{}, React.createElement('h1',{},'Hola mundo desde un h1 en un div'))
}

//NORMAS JSX
//Retorna un solo elemento
//div/ section / article o Fragment
//los atributos HTML usan camelCase
//se usa className en vez de class
//se cierran todos los elementos, incluidos inputs, img


function NormasJSX(){
  return( 
    <React.Fragment>
      <div className='claseConCamelCase'> 
        <h1>
          Hola mundooooo
        </h1>
      </div>
    </React.Fragment>
  )
}

//NESTED COMPONENTS

function NestedComp(){
  let h1 = "eiiiiii" //h1 style atribute primeras {marcan JS}, segundas {marcan que se vuelve un objeto de js}
  return (
     //el js que modifica el css es mas fuerte que el css solo
    <React.Fragment>
      <div className='claseConCamelCase'> 
        <Saludo/>
        <h1 style={{color: '#617d98',fontSize:'49pt'}}> 
          {h1} {/* con curly braces se invocan variables o comentarios*/} 
        </h1>
      </div>
    </React.Fragment>
  )
}

//asocio al render del dom de react al div id="root" donde ira todo el código

ReactDom.render(<NestedComp/>,document.querySelector('#root'))