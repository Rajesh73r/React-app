import { useState } from "react";

const InputUser = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="enter text"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
};
export default InputUser;
