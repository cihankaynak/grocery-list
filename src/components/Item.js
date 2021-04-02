import React from "react";
import { FaTrash } from "react-icons/fa";

const Item = ({ item, onItem, onDelete }) => {
  return (
    <article className="grocery-item">
      <input
        type="checkbox"
        onClick={() => onItem(item.id)}
        checked={item.isCompleted}
      />
      <p className={item.isCompleted ? "completed" : ""}>{item.name}</p>
      <button className="delete-btn" onClick={() => onDelete(item.id)}>
        <FaTrash />
      </button>
    </article>
  );
};

export default Item;
