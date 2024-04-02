import { createContext, useState } from "react";

export const StockContext = createContext({});

export default function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const stockDb = localStorage.getItem("stock-item-db");
    if (!stockDb) return [];
    JSON.parse(stockDb);
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.updatedAt = new Date(item.updatedAt);
    });
    return items;
  });

  const addItem = (item) => {
    setItems((state) => {
      const newState = [...state, item];
      localStorage.setItem("stock-item-db", JSON.stringify(newState));
      return newState;
    });
  };

  const getItem = (itemId) => {
    return items.find((i) => i.id === +itemId);
  };

  const updateItem = (itemId, newAttributes) => {
    setItems((current) => {
      const itemIndex = current.findIndex((i) => i.id === itemId);
      const updatedItems = [...current];
      Object.assign(updatedItems[itemIndex], newAttributes, {
        updatedAt: new Date(),
      });
      localStorage.setItem("stock-item-db", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeItem = (itemId) => {
    setItems((state) => {
      const newState = state.filter((item) => item.id !== itemId);
      localStorage.setItem("stock-item-db", JSON.stringify(newState));
      return newState;
    });
  };

  const stock = {
    items,
    addItem,
    getItem,
    updateItem,
    removeItem
  }

  return(
    <StockContext.Provider value={stock}>
        {children}
    </StockContext.Provider>
  )
}
