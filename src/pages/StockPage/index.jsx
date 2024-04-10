import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";

export default function StockPage() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <h1>Estoque de itens</h1>
      <div className={styles.abas}>
        <Link
          to="/estoque"
          className={
            pathname === "/estoque" ? styles.linksActive : styles.links
          }
        >
          Todos os Itens
        </Link>
        <Link
          to="/estoque/cadastro"
          className={
            pathname === "/estoque/cadastro" ? styles.linksActive : styles.links
          }
        >
          Novo Item
        </Link>
      </div>
      <Outlet />
    </>
  );
}
