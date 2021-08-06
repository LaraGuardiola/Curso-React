import './App.css';

const ALEXA = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/51fsVTWWlPL._AC_SX184_.jpg"
}

const ECHO = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/41-ttQ-Vt5L._AC_SX184_.jpg"
}

const SHOW = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/31QSRmA7obS._AC_SX184_.jpg"
}

//estructura basica que recibe props

function Props(props){ //props devuelve un objeto
  console.log(props)
  return (
    <div>
      <img src={props.img} alt=""></img>
      <h1>ECHO dot 4º generacion</h1>
      {props.children}
    </div>
  )
}

/*function Props(props){ //tambien es posible acceder a las props si se deconstruye el objeto. esta funcion equivale a la de arriba
  const {img} = props
  return (
    <div>
      <img src={img} alt=""></img>
      <h1>ECHO dot 4º generacion</h1>
    </div>
  )
}*/

//llamo a la prop img y habro {} para introducir la url de la const ALEXA, la cual se colocara como prop en Props()

//basicamente para que funcione los prop tienen que estar llamando a las propiedades

function ContenedorProps(){ //para que salga el p en pantalla hay que llamar al prop.children en Props()
  return (
    <section>
      <Props img={ALEXA.img}><p>Lorem ipsum dolor sit amet.</p></Props>
      <Props img={ECHO.img} />
    </section>
  )
}

export {Props, ContenedorProps}; //para exportar mas de un componente hay que quitar el default de export default, y pasarlo como objeto
