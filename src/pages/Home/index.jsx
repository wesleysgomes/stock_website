import { Link } from "react-router-dom";
import CardInfo from "../../components/CardInfo";
import Navbar from "../../components/Navbar";
import useStockItem from "../../hooks/useStockItem";
import styles from "./styles.module.css";

export default function Home() {
  const { itens } = useStockItem();

  const totalItens = itens
    .map((obj) => +obj.quantity)
    .reduce((total, quantity) => total + quantity);

  const endingItens = itens
    .map((obj) => 10 > +obj.quantity)
    .reduce((total, quantity) => total + quantity);

  const lastItens = itens.slice(-5);
 

  return (
    <>
      <Navbar />
      <h1 className={styles.title}>Dashboard</h1>
      <section className={styles.card}>
        <CardInfo title="Diversidade de itens" quantity={itens.length} />
        <CardInfo title="Inventário total" quantity={totalItens} />
        <CardInfo title="Itens recentes"  quantity={lastItens.length}/>
        <CardInfo title="Itens acabando" quantity={endingItens} />
      </section>
      <section className={styles.tableSection}>
        <div>
          <table className={styles.tableContent}>
            <thead>
              <tr>
                <th>Itens recentes</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lastItens.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                  <Link to={`/estoque/${item.id}`}>
                          <button className={styles.btnInfo}>Ver</button>
                        </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className={styles.tableContent}>
            <thead>
              <tr>
                <th>Itens acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item) => {
                if (item.quantity < 10) {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <Link to={`/estoque/${item.id}`}>
                          <button className={styles.btnInfo}>Ver</button>
                        </Link>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
