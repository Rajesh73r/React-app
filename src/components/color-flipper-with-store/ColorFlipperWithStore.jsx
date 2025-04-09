import { useRef, useState } from "react";

const ColorFlipperWithStore = () => {
  const inputflip = useRef();
  const [colors, setColors] = useState([]);

  return (
    <div>
      <input ref={inputflip} placeholder="Enter a Color Name" type="text" />
      <button
        onClick={() => {
          const color = inputflip.current.value;
          if (color == "") {
            return;
          }
          if (colors.includes(color)) {
            return;
          }

          setColors((oldColors) => {
            return [color, ...oldColors];
          });
          inputflip.current.value = "";
        }}
      >
        Flip
      </button>
      <div>
        {colors?.map((color) => {
          return (
            <button
              onClick={() => {
                document.body.style.backgroundColor = color;
              }}
              style={{ backgroundColor: color, margin: "5px" }}
            >
              {color}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorFlipperWithStore;
