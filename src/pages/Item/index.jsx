import { Link, useLoaderData } from "react-router-dom";
import styles from "./styles.module.css";
import DeleteBtn from "../../components/DeleteBtn";

export default function Item() {
  const item = useLoaderData();
  
  const optionFormat = {
    weekday: "long",
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  };

  return (
    <>
      <div className={styles.headerItem}>
        <h3>{item.name}</h3>
        <div className={styles.btnCollection}>
          <Link to={`/estoque/atualizar/${item.id}`}>
            <button className={styles.btnUpdate}>Atualizar</button>
          </Link>
          <Link to="/estoque">
            <DeleteBtn itemId={item.id} itemName={item.name}/>
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
          <p>{`Data de criação:  ${item.createdAt.toLocaleDateString("pt-BR", optionFormat)}`}</p>
          <p>{`Data de atualização:  ${item.updatedAt.toLocaleDateString("pt-BR", optionFormat)}`}</p>
        </div>
      </div>
    </>
  );
}
