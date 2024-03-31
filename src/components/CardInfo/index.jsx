import styles from "./styles.module.css";
import PropTypes from "prop-types";

CardInfo.propTypes = {
    title: PropTypes.string,
    quantity: PropTypes.number
}

export default function CardInfo({ title, quantity}){
    return(
        <div className={styles.container}>
            <h3>{title}</h3>
            <div className={styles.number}>
            <p>{quantity}</p>
            </div>
        </div>
    )
}