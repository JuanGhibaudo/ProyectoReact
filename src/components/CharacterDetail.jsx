import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CharacterDetail.css"

export const CharacterDetail = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setDetail(data);
      } catch (error) {
        console.error("Error fetching character detail:", error);
      }
    };

    fetchCharacterDetail();
  }, [id]);

  if (!detail) {
    return <div>CARGANDO...</div>; 
  }

  return (
    <div className="DetailContainer">
      <div className="CharacterDetails">
        <img className="rounded-5" src={detail.image} alt={detail.name} />
        <p className="item">
          <strong>😀Nombre:</strong> {detail.name}.
        </p>
        <p className="item">
          <strong>🩺Estado: </strong> {detail.status}.
        </p>
        <p className="item">
          <strong>👽Especie: </strong> {detail.species}.
        </p>
        <p className="item">
          <strong>🧔🏼‍♂️Género:</strong> {detail.gender}.
        </p>
        <p className="item">
          <strong>🪐Origen: </strong> {detail.origin.name}.
        </p>
        <p className="item">
          <strong>🏴󠁭󠁸󠁣󠁭󠁸󠁿Locación: </strong> {detail.location.name}.
        </p>
      </div>
      <div className="Video">
        <iframe
          className="rounded-5"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/soKNb0MJV7o?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
};
