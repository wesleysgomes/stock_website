import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import StockPage from "./pages/StockPage";
import TableItens from "./pages/TableItens";
import Item from "./pages/Item";
import NewItem from "./pages/NewItem";
import UpdateItem from "./pages/UpdateItem";
import loadItem from "./loaders/ItemsStock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/estoque",
    element: <StockPage />,
    children: [
      {
        index: true,
        element: <TableItens />,
      },
      {
        path: "/estoque/:itemId",
        element: <Item />,
        loader: loadItem,
      },
      {
        path: "/estoque/cadastro",
        element: <NewItem />
      },
      {
        path: "/estoque/atualizar/:itemId",
        element: <UpdateItem />,
        loader: loadItem,
      }
    ],
  },
]);

export default router;
