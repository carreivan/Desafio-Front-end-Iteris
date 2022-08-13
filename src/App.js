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
    setStats(response.stats)
  })
}

  return(
  <div className="container">
 <div className="nomes">{
   pokemons && pokemons.map((item)=>(
      <div onClick={()=>handleInfo(item.url)}>{item.name}</div>
    ))
  }

  <button onClick={handlePrevious}>previous</button>
  <button onClick={handleNext}>next</button>
  </div> 
  <div className="detalhe">
<Detalhe
  image= {image}
  nome= {nome}
  stats ={stats}
/>
</div>

  </div>

  )
}

export default App