

export default function Table(props) {
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
        <tr>
          <td className={styles.itemId}>content 1</td>
          <td className={styles.nameItem}>content 2</td>
          <td>0</td>
          <td>tecnologia</td>
          <td className={styles.btnCollection}>
            <Link to="/estoque/1"><button className={styles.btnVis}>Ver</button></Link>
            <Link to="/estoque/atualizar/1"><button className={styles.btnUpdate}>Atualizar</button></Link>
            <button className={styles.btnDel}>Excluir</button>
          </td>
        </tr>
        <tr>
          <td>content 1</td>
          <td>content 2</td>
          <td>0</td>
          <td>tecnologia</td>
          <td className={styles.btnCollection}>
            <Link to="/estoque/1"><button className={styles.btnVis}>Ver</button></Link>
            <Link ><button className={styles.btnUpdate}>Atualizar</button></Link>
            <button className={styles.btnDel}>Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  );
}
