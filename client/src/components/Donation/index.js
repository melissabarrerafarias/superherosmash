import React from "react";
import CheckoutForm from "../CheckoutForm";
import "../../checkout.css";

const products = [
    {
        name: "Donate To Keep Our Arc Reactor Running"
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