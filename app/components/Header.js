import React from "react";
const imgs = "./logo.png";
function Header() {
  return (
    <div>
      <img src={imgs} alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
    </div>
  );
}

export default Header;
