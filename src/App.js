import React,{useState,useEffect} from "react"
import Detalhe from "./components/detalhe"
import "./App.css"
function App(){

const [pokemons, setPokemons] = useState([])
const [next, setNext] = useState("")
const [previous, setPrevious] = useState("")
const [nome, setNome] = useState("")
const [image, setImage] = useState("")
const [type, setType] = useState([])
const [stats, setStats] = useState([])
const [start, setStart] = useState(true)
const [shows, setShows] = useState(false)
const [count, setCount] = useState(1)
const [background, setBackground] = useState("")
const [element, setElement] = useState("")
 var color;
 const [colorBack, setColorBack] = useState("")
 const [height, setHeight] = useState("")
 



const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
useEffect(()=>{
  fetch(url)
  .then(response => response.json())
  .then(response =>{
    setPokemons(response.results)
    console.log(response.next);
    setNext(response.next)
    setPrevious(response.previous)
  })
},[url])


function handleNext(){
setUrl(next)
}

function handlePrevious(){
setUrl(previous)
}

function handleInfo(url){
  console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(response =>{
    console.log(response)
    setNome(response.name)
    setImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + response.id + ".png")
    console.log(response.id);
    setType(response.types)
    console.log(response.types[0].type.name);
    setStats(response.stats)
    setShows(true)
     setElement(response.types[0].type.name)
    setHeight(!height)
  })
}

function handleImage(src){

setCount(count +1)
  if(count === 3){
    setBackground(src)
    setShows(false)
    setStart(false)
    setColorBack(color)
    setHeight("100vh")
  }
}

function handleStart(){
  window.location.reload(true);
}

switch (element) {
  case "normal":
    color = "#a8a878";
    break;
  case "fighting":
    color = "#c03028";
    break;
  case "flying":
    color = "#a890f0";
    break;
  case "poison":
    color = "#a040a0";
    break;
  case "ground":
    color = "#e0c068";
    break;
  case "rock":
    color = "#b8a038";
    break;
  case "bug":
    color = "#a8b820";
    break;
  case "ghost":
    color = "#705898";
    break;
  case "steel":
    color = "#b8b8d0";
    break;
  case "fire":
    color = "#f08030";
    break;
  case "water":
    color = "#6890f0";
    break;

  case "grass":
    color = "#78c850";
    break;
  case "electric":
    color = "#f8d030";
    break;
  case "psychic":
    color = "#f85888";
    break;
  case "ice":
    color = "#98d8d8";
    break;
  case "dragon":
    color = "#7038f8";
    break;
  case "dark":
    color = "#705848";
    break;
  case "fairy":
    color = "#ee99ac";
    break;
  default:
    color = "#68a090";
}

return (
  <div className="container"  style={{backgroundImage: "url(" + background + ")", backgroundColor:colorBack, height:height }} >
 {start?
 <div className="nomes" style={{background:color}}>{
  pokemons && pokemons.map((item)=>(
     <div className="name" onClick={()=>handleInfo(item.url)}>{item.name}</div>
   ))
 }
 <div className="btns">
 <button  onClick={handlePrevious}>previous</button>
 <button onClick={handleNext}>next</button>
 </div>
 </div> 
 :
 <div className="iniciar" onClick={handleStart}>Iniciar</div>
 }
 
 {shows?
  <div className="detalhe" style={{background:color}}>
  <Detalhe 
    image= {image}
    nome= {nome}
    stats ={stats}
    type= {type}
    handleImage = {handleImage}
    
  />
  </div>
 :null}

  </div>

)
}


export default App