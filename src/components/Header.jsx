import React from "react";
import { Link } from "react-router-dom";
function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor };
  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={{ textDecoration: "inherit", color: "inherit" }}>
          <h2 className="header-title">{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
export default Header;
