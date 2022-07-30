import { useState } from "react";

function Search() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return <input value={input} onChange={handleChange} title="dummySearch" />;
}

export default Search;
