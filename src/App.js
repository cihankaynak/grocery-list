import React, { useState, useEffect } from "react";
import AddItem from "./components/AddItem";
import Items from "./components/Items";
import { getItems, saveItems, clearItems } from "./services/ItemService";
import { v4 as uuidv4 } from "uuid";

function App() {
  const toggleComplete = (item) => {
    let updatedItem = { ...item, isCompleted: !item.isCompleted };
    return updatedItem;
  };
  const onItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? toggleComplete(item) : item
    );
    setItems(updatedItems);
    saveItems(updatedItems);
  };

  const onDelete = (id) => {
    const retainedItems = items.filter((item) => item.id !== id);
    setItems(retainedItems);
    saveItems(retainedItems);
  };

  const onAddItem = (item) => {
    let newItem = {
      id: uuidv4(),
      name: item,
      isCompleted: false,
    };
    let updatedItems = [...items];
    updatedItems.push(newItem);
    setItems(updatedItems);
    saveItems(updatedItems);
  };

  const clearAll = () => {
    setItems([]);
    clearItems();
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
  }, []);

  return (
    <section className="section-center">
      <h3>Grocery List</h3>
      <AddItem onAddItem={onAddItem} />
      <Items items={items} onItem={onItem} onDelete={onDelete} />
      <button className="clear-btn" onClick={() => clearAll()}>
        Clear All
      </button>
    </section>
  );
}

export default App;
