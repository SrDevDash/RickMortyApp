import { useDispatch, useSelector } from "react-redux";
import styles from "../Cards/cards.module.css";
import Card from "../Card/Card";
import { filterCards, orderCard } from "../../redux/actions/actions";
import stylesCurrent from "./favorites.module.css";

export default function Favorites(props) {
  const favorites = useSelector((store) => store.myFavorites);
  const dispatch = useDispatch();

  const handleChangeOrder = (e) => {
    dispatch(orderCard(e.target.value));
  };

  const handleChangeGender = (e) => {
    console.log(e.target.value);
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
      <div>
        <select
          className={stylesCurrent.select}
          name="order"
          onChange={handleChangeOrder}
        >
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          className={stylesCurrent.select}
          name="gender"
          onChange={handleChangeGender}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.container}>
        {favorites.map((character, i) => (
          <Card
            character={character}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={props.onClose}
            key={i}
            id={character.id}
          />
        ))}
      </div>
    </>
  );
}
