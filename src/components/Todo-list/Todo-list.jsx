import { useState, useRef } from "react";
import { toast } from "sonner";

const TodoList = () => {
  const [itemList, setItemList] = useState([]);

  const inputRef = useRef();

  const handleCheck = (index) => {
    setItemList((oldItemList) => {
      const oldItem = oldItemList[index];
      const newItem = { value: oldItem.value, checked: !oldItem.checked };

      const newItemList = [...oldItemList];
      newItemList[index] = newItem;

      return newItemList;
    });
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <input ref={inputRef} type="text" placeholder="Enter a product" />
      <button
        onClick={() => {
          const value = inputRef.current.value;
          if (value == "") {
            return;
          }
          // itemList.map(item => item.value).includes(value)
          // itemList.find(item => item.value === value)

          if (itemList.find((item) => item.value === value)) {
            toast.warning("Already exists");
            return;
          }

          setItemList((oldList) => {
            return [...oldList, { value: value, checked: false }];
          });
        }}
      >
        add
      </button>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onClick={() => handleCheck(index)}
            />
            <span
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
