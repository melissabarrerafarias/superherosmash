import React from "react";
import CheckoutForm from "../CheckoutForm";
import "../../index.css";

const products = [
    {
        name: "Donation"
    }
]

const Donation = () => {
  return (
    <div className="App">
        <CheckoutForm products={products}/>
    </div>
  );
}


export default Donation;