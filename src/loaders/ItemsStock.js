export default function loadItem({ params }) {
  const items = JSON.parse(localStorage.getItem("stock-item-db"));
  items.forEach((item) => {
    item.createdAt = new Date(item.createdAt);
    item.updatedAt = new Date(item.updatedAt);
  });

  const item = items.find((i) => i.id === +params.itemId);

  if (!item) {
    throw new Response("404 Not found", { status: 404 });
  }

  return item;
}
