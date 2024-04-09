import { Link } from "react-router-dom";
import useStock from "../../hooks/useStock";
import styles from "./styles.module.css";
import DeleteBtn from "../DeleteBtn";

export default function TableStock() {
  const { items } = useStock();

  return (
    <section className={styles.tableSection}>
      <table className={styles.tableContent}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Em Estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className={styles.itemId}>{item.id}</td>
              <td className={styles.nameItem}>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.category}</td>
              <td className={styles.btnCollection}>
                <Link to={`/estoque/${item.id}`}>
                  <button className={styles.btnVis}>Ver</button>
                </Link>
                <Link to={`/estoque/atualizar/${item.id}`}>
                  <button className={styles.btnUpdate}>Atualizar</button>
                </Link>
                <DeleteBtn itemName={item.name} itemId={item.id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
