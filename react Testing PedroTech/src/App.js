import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button/Button";
import Search from "./Components/Search/Search";
import Input from "./Components/Input/Input";
// import { useState } from "react";
import DualButton from "./Components/DualButton/DualButton";
import Counter from "./Components/Counter/Counter";

function App() {
  // const [showDiv, setShowDiv] = useState(true);
  return (
    <div className="App">
      {/* <Button /> */}
      {/* <Search /> */}
      {/* <Input showDiv={showDiv} /> */}
      {/* <DualButton /> */}
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
