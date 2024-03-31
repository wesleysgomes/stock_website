import { Link, useLoaderData } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import useStockItem from "../../hooks/useStockItem";
import FormItem from "../../components/FormItem";

export default function UpdateItem() {
  const item = useLoaderData();

  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);
  const [description, setDescription] = useState(item.description);
  const { updateItem } = useStockItem();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const id = item.id
    const dateCreated = item.dateCreated;
    updateItem({ id, name, quantity, price, category, description, dateCreated });
    alert("Item atualizado!")
  };
  return (
    <>
      <h3 className={styles.nameItem}>{`Atualizar item - ${item.name}`}</h3>
      <p className={styles.codItem}>{`código ID: ${item.id}`}</p>
      <section className={styles.container}>
        <FormItem 
          handleSubmit={handleSubmit}
          nameItem={name}
          setNameItem={setName}
          quantity={+quantity}
          setQuantity={setQuantity}
          price={price}
          setPrice={setPrice}
          category={category}
          setCategory={setCategory}
          description={description}
          setDescription={setDescription}
          />
      </section>
    </>
  );
}
