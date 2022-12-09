import styles from "./navBar.module.css";

export default function SearchBar(props) {
  let id;
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="search"
        onChange={(e) => (id = e.target.value)}
      />
      <button
        placeholder="ID"
        className={styles.btnSearch}
        onClick={(e) => {
          props.onSearch(id);
        }}
        value={"hola"}
      >
        Add
      </button>
    </div>
  );
}
