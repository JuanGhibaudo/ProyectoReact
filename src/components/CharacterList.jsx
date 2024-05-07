import React from "react";
import {useEffect, useState} from "react"
import Character from "./Character";
import "./CharacterList.css"

function NavPage(props){
  return(
<header className="d-flex justify-content-between align-items-center">
<button className="btn btn-primary btn-sm" 
  onClick={()=>props.setPage(Math.max(1,props.page - 1))}>Página anterior({props.page - 1})
  </button>
  <div></div>
  <h4>Presiona para ver mas detalles de cada personaje</h4>
  <h2>P{props.page}</h2>
  <button className="btn btn-primary btn-sm" 
  onClick={()=>props.setPage(Math.min(42, props.page + 1))}>Siguiente página ({props.page + 1})
  </button>
</header>
  )
}
function CharacterList(){
    const [characters, setCharacters] = useState([])
const [page, setPage] = useState(1);


useEffect(()=>{
async function fetchData(){
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  const data = await response.json()
  setCharacters(data.results);
}
fetchData()
},[page])

    return (
      
        <div className="container background-image">     
        < NavPage page={page} setPage={setPage}/>
        <div className="row">
        {
            characters.map(character => {
              return (
                <div className="col-md-4" key={character.id}>
                  <Character  character={character}/>
                </div>

              );
            })
          }
        </div>
        < NavPage page={page} setPage={setPage}/>
          </div>
    );
}
export default CharacterList