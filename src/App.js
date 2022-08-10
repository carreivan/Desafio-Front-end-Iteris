import React,{useState,useEffect} from "react"

function App(){

const[pokemons, setPokemons] = useState([])
const [next, setNext] = useState("")
const [previous, setPrevious] = useState("")
const [nome, setNome] = useState("")
const [image, setImage] = useState("")
const [type, setType] = useState([])
const [stats, setStats] =useState([])


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
    setImage(response.sprites.other.dream_world.front_default)
    setType(response.types)
    setStats(response.stats)
  })
}

  return(
  <>
  {
   pokemons && pokemons.map((item)=>(
      <div onClick={()=>handleInfo(item.url)}>{item.name}</div>
    ))
  }

  <button onClick={handlePrevious}>previous</button>
  <button onClick={handleNext}>next</button>

  <div>
    <div>
      <img src={image}/>
      <div>{nome}</div>
      {
   type && type.map((item)=>(
      <button>{item.type.name}</button>
    ))
  }

{
   stats && stats.slice(0,3).map((item)=>(
    <div> 
    <span>{item.stat.name}</span>
      <div>{item.base_stat}</div>
      </div>
    ))
  }
       {
   stats && stats.slice(5).map((item)=>(
    <div> 
    <span>{item.stat.name}</span>
      <div>{item.base_stat}</div>
      </div>
    ))
  }
    </div>
  </div>
  </>

  )
}

export default App