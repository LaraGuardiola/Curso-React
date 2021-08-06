import logo from './logo.svg';
import './App.css';

//MANEJANDO EVENTOS

const listaAutores = [
  {
    id: 1,
    autor: "Manolo"
  }
]

const eventOnClick = (autor) => {
  console.log(autor)
}


const eventOnClick2 = () => {
  alert("evento sin parametro")
}

//Se puede pasar con y sin parametros, sin embargo con parametros es necesario invocar a una funcion que llame a la que nos interese o simplemente se estara invocando en vez de asignando

function Evento({autor}){
  return(
    <div>
      <button type="submit" onClick={() => eventOnClick(listaAutores[0].autor)}>funcion con parametro</button>
      <button type="submit" onClick={eventOnClick2}>funcion sin parámetro</button>
    </div>
  )
}

export {Evento};
