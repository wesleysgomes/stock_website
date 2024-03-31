import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <p className={styles.title}>website Storage</p>
      <div className={styles.headerBtn}>
        <Link to="/">
          <button className={styles.btn}>Home</button>
        </Link>
        <Link to="/estoque">
          <button className={styles.btn}>Estoque</button>
        </Link>
      </div>
    </nav>
  );
}
