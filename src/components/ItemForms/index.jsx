import PropTypes from "prop-types";
import StockItem, { Categories } from "../../models/StockItem";
import { useRef, useState } from "react";
import useStock from "../../hooks/useStock";
import styles from "./styles.module.css";

ItemForms.propTypes = {
  itemToUpdate: PropTypes.object
}

export default function ItemForms({ itemToUpdate }) {
  const defaultItem = {
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    category: "",
  };

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem);
  const { addItem, updateItem } = useStock();
  const inputRef = useRef(null);

  const handleChange = (ev) => {
    setItem((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    try {
      if (itemToUpdate) {
        updateItem(itemToUpdate.id, item);
        alert("Item atualizado com sucesso!");
      } else {
        const validItem = new StockItem(item);
        addItem(validItem);
        setItem(defaultItem);
        alert("Item cadastrado com sucesso!");
      }
    } catch (err) {
      console.log(err.message);
      alert("Ocorreu um erro.");
    } finally {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formsComponents}>
        <div>
          <label htmlFor="name">Nome</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            required
            ref={inputRef}
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantidade</label>
          <br />
          <input
            type="number"
            name="quantity"
            id="quantity"
            required
            min={0}
            step={1}
            value={item.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <br />
          <input
            type="number"
            name="price"
            id="price"
            required
            min={0.0}
            step={0.01}
            value={item.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <br />
          <select
            name="category"
            id="category"
            required
            value={item.category}
            onChange={handleChange}
          >
            <option disabled value="">
              Selecione uma categoria...
            </option>
            {Categories.map((category) => (
              <option
                key={category}
                value={category}
                defaultChecked={item.category === category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.descpForm}>
        <label htmlFor="description">Descrição</label>
        <br />
        <textarea
          className={styles.descrp}
          name="description"
          id="description"
          rows="10"
          value={item.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button className={styles.btnSave}>Salvar</button>
      </div>
    </form>
  );
}
