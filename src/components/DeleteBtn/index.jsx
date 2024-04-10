import { useNavigate } from "react-router-dom";
import useStock from "../../hooks/useStock";
import styles from "./styles.module.css";
import PropTypes from "prop-types"

DeleteBtn.propTypes ={
    itemId: PropTypes.number.isRequired,
    itemName: PropTypes.string.isRequired
}

export default function DeleteBtn({ itemId, itemName }) {
  const { removeItem } = useStock();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir o item ${itemName}?`)) {
      removeItem(itemId);
      navegate("/estoque");
    }
  };

  return (
    <button className={styles.btnDel} onClick={handleDelete}>
      Excluir
    </button>
  );
}
