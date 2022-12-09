import Card from "../Card/Card";
import styles from "./cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  // props = characters : [personajes,personajes];
  // props.characters

  return (
    <div className={styles.container}>
      {characters.map((character, i) => (
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
  );
}
