const getRandomColor = () => {
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();

  return `rgb(${r}, ${g}, ${b})`;
};

const randomNumber = (start = 0, end = 256) =>
  (start + Math.random() * 1000) % end;

const ColorFlipper = () => {
  const colors = ["red", "green", "blue", "yellow", "cyan", "magenta", "black"];
  return (
    <div>
      {colors.map((color) => {
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
      <button
        onClick={() => {
          const randomColor = getRandomColor();
          document.body.style.backgroundColor = randomColor;
        }}
      >
        random
      </button>
    </div>
  );
};

export default ColorFlipper;
