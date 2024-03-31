import { useState } from "react";

export default function useStockItem() {
  const [itens, setItens] = useState(() => {
    const stockDb = localStorage.getItem("stock-item-db");
    if (!stockDb) return [];
    return JSON.parse(stockDb);
  });

  const optionFormat = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  };
  const today = new Date().toLocaleDateString("pt-BR", optionFormat);

  const addItem = ({ name, quantity, price, category, description }) => {
    const id = Math.floor(Math.random() * 1000000);
    const dateCreated = today
    const item = {
      id,
      name,
      quantity,
      price,
      category,
      description,
      dateCreated,
    };
    setItens((state) => {
      const newState = [...state, item];
      localStorage.setItem("stock-item-db", JSON.stringify(newState));
      return newState;
    });
  };

  const updateItem = ({ id, name, quantity, price, category, description, dateCreated }) => {
    const dateUpdate = today
    setItens((state)=>{
      const newState = state.map((obj) =>{
        if(obj.id === id) {
          return {id: id, name: name, quantity:quantity, price:price, category:category, description: description, dateCreated:dateCreated, dateUpdate }
        }
        return obj
      })
      localStorage.setItem("stock-item-db", JSON.stringify(newState));
      return newState;
    })
  };

  const removeItem = (id) => {
    setItens((state) => {
      const newState = state.filter((item) => item.id !== id);
      localStorage.setItem("stock-item-db", JSON.stringify(newState));
      return newState;
    });
  };

  return { itens, addItem, removeItem, updateItem };
}
