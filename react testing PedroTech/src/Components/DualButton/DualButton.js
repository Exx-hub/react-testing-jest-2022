import { useState } from "react";

function DualButton() {
  const [dualOn, setDualOn] = useState(false);

  const handleClick = () => setDualOn(true);
  const handleOff = () => setDualOn(false);

  return (
    <div>
      <button data-testid="myButton" onClick={handleClick}>
        Click here
      </button>
      {dualOn && (
        <button data-testid="myButton" onClick={handleOff}>
          Click here
        </button>
      )}
    </div>
  );
}

export default DualButton;
