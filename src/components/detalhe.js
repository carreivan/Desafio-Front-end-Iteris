import React from 'react'
export default function Detalhe (props){
    return (
<>

  
    <div>
     <div className='image'>
     <img src={props.image}/>
      <div className='nome2'>{props.nome}</div>
     <div className='element'> {
   props.type && props.type.map((item)=>(
      <button>{item.type.name}</button>
    ))
  }</div>
  
     </div>

                <div className='tipos'>
                {
   props.stats && props.stats.slice(0,3).map((item)=>(
    <div className='barra-content'> 
    <span>{item.stat.name}</span>
       <div className="barra">
        <div className="per"> {`${item.base_stat}%`}</div>
        <div className="barra-item" style={{width:item.base_stat + "%",  background:"red", height:"15px"}}></div>
      </div>
      </div>
    ))
  }
       {
   props.stats && props.stats.slice(5).map((item)=>(
    <div className='barra-content'> 
    <span>{item.stat.name}</span>
        <div className="barra">
        <div className="per"> {`${item.base_stat}%`}</div>
        <div className="barra-item" style={{width:item.base_stat + "%",  background:"red", height:"15px"}}></div>
         </div>
        </div>
    ))
  }
                </div>
    </div>
</>
    )
}