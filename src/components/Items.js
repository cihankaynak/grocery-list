import React from "react";
import Item from "./Item";

const Items = ({ items, onItem, onDelete }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => (
        <Item key={item.id} item={item} onItem={onItem} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Items;
