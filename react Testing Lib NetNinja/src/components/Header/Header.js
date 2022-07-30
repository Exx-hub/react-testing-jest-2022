import React from "react";
import "./Header.css";

function Header({ title }) {
  return (
    <>
      <h1 className="header">{title}</h1>
      {/* <h3 title="aHeader" data-testid="testIdOne" className="header">
        cats
      </h3> */}
    </>
  );
}

export default Header;
