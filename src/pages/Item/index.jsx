import { Link, useLoaderData } from "react-router-dom";
import styles from "./styles.module.css";
import useStockItem from "../../hooks/useStockItem";

export default function Item() {
  const item = useLoaderData();
  const { removeItem } = useStockItem();

  return (
    <>
      <div className={styles.headerItem}>
        <h3>{item.name}</h3>
        <div className={styles.btnCollection}>
          <Link to={`/estoque/atualizar/${item.id}`}>
            <button className={styles.btnUpdate}>Atualizar</button>
          </Link>
          <Link to="/estoque">
            <button
              className={styles.btnDel}
              onClick={() => removeItem(item.id)}
            >
              Excluir
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.info}>{`Categória: ${item.category}`}</p>
        <p
          className={styles.info}
        >{`Quantidade em estoque: ${item.quantity}`}</p>
        <p className={styles.info}>{`Preço: R$${item.price}`}</p>
      </div>
      <div className={styles.containerDesc}>
        <p>{item.description}</p>

        <div className={styles.updateInfo}>
          <p>{`Data de criação:  ${item.dateCreated}`}</p>
          <p>Data de atualização: </p>
        </div>
      </div>
    </>
  );
}
