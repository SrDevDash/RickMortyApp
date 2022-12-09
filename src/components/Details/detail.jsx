import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams("id");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.box}>
      <h1 className={style.title}>{character.name}</h1>
      <div className={style.boxofBox}>
        <div className={style.infoBox}>
          <ul>
            <li>
              <span className={style.subTittle}>Status </span>
              <span className={style.infoText}>{character.status}</span>
            </li>
            <li>
              <span className={style.subTittle}>Specie </span>
              <span className={style.infoText}>{character.species}</span>
            </li>
            <li>
              <span className={style.subTittle}>Gender </span>
              <span className={style.infoText}>{character.gender}</span>
            </li>
            <li>
              <span className={style.subTittle}>Origin </span>
              <span className={style.infoText}>{character.origin?.name}</span>
            </li>
          </ul>
        </div>
        <div>
          <img className={style.image} src={character.image} alt="" />
        </div>
      </div>
    </div>
  );
}
