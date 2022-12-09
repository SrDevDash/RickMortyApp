import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import { useState } from "react";

export default function Card(props) {
  const { id, species, fav, name, image, gender } = props.character;
  const dispatch = useDispatch();
  const favoritos = useSelector((store) => store.myFavorites);
  const [isFav, setIsFav] = useState(fav);

  const togleFavorite = (e) => {
    setIsFav(!isFav);
    !isFav
      ? dispatch(addFavorite({ ...props.character, fav: true }))
      : dispatch(deleteFavorite(id));
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.subText}>{species}</h2>
      <h2 className={styles.subText}>{gender}</h2>
      <Link to={`/detail/${id}`}>
        <img className={styles.img} src={image} alt="" />
      </Link>
      <h1 className={styles.name}>{name}</h1>
      <button className={styles.btnFv} onClick={togleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>
      <button
        className={styles.btn}
        onClick={(e) => {
          props.onClose(props.id);
        }}
      >
        X
      </button>
    </div>
  );
}
