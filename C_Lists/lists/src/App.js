import './App.css';

/*const ALEXA = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/51fsVTWWlPL._AC_SX184_.jpg"
}

const ECHO = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/41-ttQ-Vt5L._AC_SX184_.jpg"
}

const SHOW = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/31QSRmA7obS._AC_SX184_.jpg"
}*/

//*en vez de crear una const por cada objeto diabolico es mejor agruparlos en una array de objetos que contengan el atributo img

const DIABOLICALITEMS = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51fsVTWWlPL._AC_SX184_.jpg",
    title: "Alexa Dot"
  },
  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/41-ttQ-Vt5L._AC_SX184_.jpg",
    title: "Alexa Spy"
  },
  {
    id: 3,
    img: "https://images-eu.ssl-images-amazon.com/images/I/31QSRmA7obS._AC_SX184_.jpg",
    title: "Alexa Show"
  }
]

//a la hora de iterar una array, se puede mostrar su contenido siempre que no sea de objetos

//*ITERANDO UNA ARRAY DE OBJETOS PARA OBTENER UNA LISTA

/*function SurveillanceTeam(){
  return (
    <section>
      {DIABOLICALITEMS.map((DiabolicalItem) => {
        const {img, title} = DiabolicalItem
        return (
          <section>
            <img src={img}></img>
            <h1>{title}</h1>
          </section>
        )
      })}
    </section>
  )
}*/

//*ITERANDO UNA ARRAY DE OBJETOS PARA OBTENER UNA LISTA, retorna el componente item con los props tipo DiabolicalItem
//*Se necesita añadir el atributo key asociandolo a una propiedad unica (id en este caso). De esta manera cada item es de tipo DiabolicalItem con un id unico para cada uno
/*function SurveillanceTeam(){
  return (
    <section>
      {DIABOLICALITEMS.map((DiabolicalItem) => {
        const {img, title} = DiabolicalItem
        return (
          <Item key={DiabolicalItem.id} DiabolicalItem={DiabolicalItem}></Item>
        )
      })}
    </section>
  )
}

const Item = (props) => {
  console.log(props)
  const {img, title} = props.DiabolicalItem; //devuelve un objeto tipo DiabolicalItem descrito en el componente SurveillanceTeam
  return (
    <div>
      <img src={img} alt=""></img>
      <h1>{title}</h1>
    </div>
  )
}*/

//*EMPLEANDO SPREAD OPERATOR ... (esparce todas las props del compontente Item, mapeado como DiabolicalItem)

function SurveillanceTeam(){
  return (
    <section>
      {DIABOLICALITEMS.map((DiabolicalItem,index) => {
        const {img, title} = DiabolicalItem
        return (
          <Item key={DiabolicalItem.id} {...DiabolicalItem}></Item>
        )
      })}
    </section>
  )
}

const Item = (props) => {
  const {img, title} = props
  return (
    <div>
      <img src={img} alt=""></img>
      <h1>{title}</h1>
    </div>
  )
}


export {SurveillanceTeam}
