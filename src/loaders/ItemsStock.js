export default function loadItem({ params }) {
  const itens = JSON.parse(localStorage.getItem("stock-item-db"));

  const item = itens.find((i) => i.id === +params.itemId);

  if (!item) {
    throw new Response("404 Not found", { status: 404 });
  }

  return item;
}
