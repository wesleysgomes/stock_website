import styles from "./styles.module.css";
import PropTypes from "prop-types";

FormItem.propTypes = {
  handleSubmit: PropTypes.func,
  nameItem: PropTypes.string,
  setNameItem: PropTypes.func,
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
  price: PropTypes.string,
  setPrice: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func
};

export default function FormItem({
  handleSubmit,
  nameItem,
  setNameItem,
  quantity,
  setQuantity,
  price,
  setPrice,
  category,
  setCategory,
  description,
  setDescription,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formsComponents}>
        <div>
          <label htmlFor="nameItem">Nome:</label>
          <br />
          <input
            type="text"
            id="nameItem"
            value={nameItem}
            onChange={(ev) => setNameItem(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantidade:</label>
          <br />
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(ev) => setQuantity(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Preço:</label>
          <br />
          <input
            type="number"
            id="price"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Categoria:</label>
          <br />
          <input
            type="text"
            list="productCategory"
            id="category"
            placeholder="Selecione uma categoria"
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
          />
          <datalist id="productCategory">
            <option value="Eletrônico"></option>
            <option value="Electrodoméstico"></option>
            <option value="Limpeza"></option>
            <option value="Escritório"></option>
            <option value="Esportes"></option>
            <option value="Jogos"></option>
          </datalist>
        </div>
      </div>
      <div className={styles.descpItem}>
        <label htmlFor="description">Descrição:</label>
        <br />
        <textarea
          name="description"
          id="description"
          cols="166"
          rows="12"
          className={styles.descp}
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></textarea>
      </div>

      <button className={styles.btnSave}>Salvar</button>
    </form>
  );
}
