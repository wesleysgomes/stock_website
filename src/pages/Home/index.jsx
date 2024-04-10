import { Link } from "react-router-dom";
import CardInfo from "../../components/CardInfo";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";
import useStock from "../../hooks/useStock";

export default function Home() {
  const { items } = useStock();

  const today = new Date();
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDay() - 10);

  const recentItems = items.filter(
    (item) => item.createdAt >= limitDate && item.createdAt <= today
  );

  const totalItems = items
    .map((obj) => +obj.quantity)
    .reduce((total, quantity) => total + quantity);

  const endingItems = items
    .map((obj) => 10 > +obj.quantity)
    .reduce((total, quantity) => total + quantity);


  return (
    <>
      <Navbar />
      <h1 className={styles.title}>Dashboard</h1>
      <section className={styles.card}>
        <CardInfo title="Diversidade de itens" quantity={items.length} />
        <CardInfo title="Inventário total" quantity={totalItems} />
        <CardInfo title="Itens recentes" quantity={recentItems.length} />
        <CardInfo title="Itens acabando" quantity={endingItems} />
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
              {recentItems.map((item) => (
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
              {items.map((item) => {
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
