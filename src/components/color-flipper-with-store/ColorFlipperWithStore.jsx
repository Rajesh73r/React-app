import { useRef, useState } from "react";

function isValidColor(strColor) {
  var s = new Option().style;
  s.color = strColor;

  // return 'false' if color wasn't assigned
  return s.color == strColor.toLowerCase();
}

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

          if (!isValidColor(color)) {
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
              key={color}
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
