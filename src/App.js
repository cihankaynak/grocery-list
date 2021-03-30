import React, { useState } from "react";
import AddItem from "./components/AddItem";
import Items from "./components/Items";
import { getItems } from "./services/ItemService";

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
  };

  const onDelete = (id) => {
    console.log(id);
    setItems(items.filter((item) => item.id !== id));
  };

  const onAddItem = (item) => {
    let newItem = {
      id: items.length + 1,
      name: item,
      isCompleted: false,
    };
    let updatedItems = [...items];
    updatedItems.push(newItem);
    setItems(updatedItems);
  };

  const [items, setItems] = useState(getItems());

  return (
    <section className="section-center">
      <h3>Grocery List</h3>
      <AddItem onAddItem={onAddItem} />
      <Items items={items} onItem={onItem} onDelete={onDelete} />
      <button className="clear-btn" onClick={() => setItems([])}>
        Clear All
      </button>
    </section>
  );
}

export default App;
