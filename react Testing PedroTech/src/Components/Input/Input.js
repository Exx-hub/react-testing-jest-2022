import { useState } from "react";

function Input({ showDiv }) {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        data-testid="searchInput"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h2 data-testid="searchWord">{input}</h2>
      {showDiv && <div data-testid="div-toggle">Hey I am Alvin!</div>}
    </>
  );
}

export default Input;
