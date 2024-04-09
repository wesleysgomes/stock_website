import { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import useStockItem from "./../../hooks/useStockItem.js";
import FormItem from "../../components/FormItem/index.jsx";
import ItemForms from "../../components/ItemForms/index.jsx";

export default function NewItem() {
  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [description, setDescription] = useState("");
  // const { addItem } = useStockItem();

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   addItem({ name, quantity, price, category, description });
  //   setName("");
  //   setQuantity("");
  //   setPrice("");
  //   setCategory("");
  //   setDescription("");
  // };

  return (
    <section className={styles.container}>
      {/* <FormItem 
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
          /> */}
          <ItemForms/>

    </section>
  );
}
