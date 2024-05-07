import React from "react";
import {Link} from "react-router-dom";
function Character({character}){
    return (
        <div className="text-center p-5">
        <h3>{character.name}</h3>
        <Link className="text-decoration-none" to= {`/character/${character.id}`}>
        <img className="img-fluid rounded-5"
         src={character.image}
          alt={character.name} />
        <p>Origen: {character.origin.name}</p>
        </Link>
      </div>
    )
}
export default Character



