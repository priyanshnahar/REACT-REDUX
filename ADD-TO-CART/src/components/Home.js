import React from "react";

function Home(props) {
  console.warn("home", props.data)
  return (
    <div>
          Home Component
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img src="https://infovandar.com/en/wp-content/uploads/2022/06/Apple-iPhone-14-Pro-Max.png" />
          </div>
          <div className="text-wrapper item">
            <span>I-Phone</span>
            <span>Price: $1000.00</span>
          </div>
          <div className="btn-wrapper item">
            <button onClick={() => props.addToCartHandler({ price: 1000,name: 'I Phone 14'})}>
              Add to cart
            </button>
            <button onClick={() => props.removeToCartHandler()}>
              Remove to cart
            </button>
          </div>
        </div>
      </div>
  
  );
}

export default Home;
