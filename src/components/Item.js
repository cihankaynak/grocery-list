import React from "react";
import { FaTrash } from "react-icons/fa";

const Item = ({ item, onItem, onDelete }) => {
  return (
    <article className="grocery-item">
      <p
        className={item.isCompleted ? "completed" : ""}
        onClick={() => onItem(item.id)}
      >
        {item.name}
      </p>
      <button className="delete-btn" onClick={() => onDelete(item.id)}>
        <FaTrash />
      </button>
    </article>
  );
};

export default Item;
