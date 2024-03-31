import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import useStockItem from "../../hooks/useStockItem";

export default function TableItens() {
  const { itens, removeItem } = useStockItem();
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
          {itens.map((item) =>(
          <tr key={item.id}>
            <td className={styles.itemId}>{item.id}</td>
            <td className={styles.nameItem}>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.category}</td>
            <td className={styles.btnCollection}>
              <Link to={`/estoque/${item.id}`}><button className={styles.btnVis}>Ver</button></Link>
              <Link to={`/estoque/atualizar/${item.id}`}><button className={styles.btnUpdate}>Atualizar</button></Link>
              <button className={styles.btnDel} onClick={() =>removeItem(item.id)}>Excluir</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
