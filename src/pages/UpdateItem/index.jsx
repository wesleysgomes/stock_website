import { useLoaderData } from "react-router-dom";
import styles from "./styles.module.css";
import ItemForms from "../../components/ItemForms";

export default function UpdateItem() {
  const item = useLoaderData();

  return (
    <>
      <h3 className={styles.nameItem}>{`Atualizar item - ${item.name}`}</h3>
      <p className={styles.codItem}>{`código ID: ${item.id}`}</p>
      <section className={styles.container}>
        <ItemForms itemToUpdate={item} />
      </section>
    </>
  );
}
