import useStock from "../../hooks/useStock";


export default function Table() {
  const { items } = useStocktock();

  return (
    <section className={styles.tableSection}>
    <table className={styles.tableContent}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) =>(
          <tr key={item.id}>
          <td className={styles.itemId}>{item.id}</td>
          <td className={styles.nameItem}>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.category}</td>
          <td className={styles.btnCollection}>
            <Link to={`/estoque/${item.id}`}><button className={styles.btnVis}>Ver</button></Link>
            <Link to={`/estoque/atualizar/${item.id}`}><button className={styles.btnUpdate}>Atualizar</button></Link>
            <button className={styles.btnDel} onClick={() =>removeItem(item.id)}>Excluir</button>
          </td>
        </tr>
        ))
        }
      </tbody>
    </table>
  </section>
  );
}
