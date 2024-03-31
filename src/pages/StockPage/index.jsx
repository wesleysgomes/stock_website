import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";

export default function StockPage() {
  return (
    <>
      <Navbar />
      <h1>Estoque de itens</h1>
      <div className={styles.abas}>
      <Link to="/estoque" className={styles.links}>Todos os Itens</Link>
      <Link to="/estoque/cadastro" className={styles.links}>Novo Item</Link>
      </div>
      <Outlet />
    </>
  );
}
