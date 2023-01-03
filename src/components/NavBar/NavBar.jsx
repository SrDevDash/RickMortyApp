import SearchBar from "./SearchBar";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.mainLinkBox}>
        <Link to="/">
          <button className={styles.btnLink}>Home</button>
        </Link>
        <Link to="/favorites">
          <button className={styles.btnLink}>Favorites</button>
        </Link>
      </div>
      <SearchBar onSearch={props.onSearch} />

      <button
        onClick={(e) => {
          props.setAccess(false);
        }}
        className={styles.btnLink}
      >
        Log out
      </button>
    </div>
  );
}
