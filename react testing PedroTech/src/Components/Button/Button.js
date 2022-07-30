import { useState } from "react";

export default function Button() {
  const [value, setValue] = useState("Press Here");

  const handleClick = () => {
    setValue("You Clicked");
  };
  return (
    <button onClick={handleClick} title="dummyButton">
      {value}
    </button>
  );
}
