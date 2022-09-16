import React from "react";

function Header(props) {
  console.warn("home", props.data)
  return (
    <div>
      <div className="add-to-cart">
      <span className="cart-count">{props.data.length}</span>
      {/* <span>{props.data.length}</span> */}
        <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png" />
      </div>
    </div>
  );
}

export default Header;
