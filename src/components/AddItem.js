import React, { useState } from "react";

const AddItem = ({ onAddItem }) => {
  const [item, setItem] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!item) {
      return;
    }
    onAddItem(item);
    setItem("");
  };

  return (
    <form className="grocery-form" onSubmit={(e) => onSubmit(e)}>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g. eggs"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button type="submit" className="submit-btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddItem;
