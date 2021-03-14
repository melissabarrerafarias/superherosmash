import React, { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const ProductDisplay = ({ handleClick }) => (
    <section>
        <div className="product">
            <img
                src="https://i.imgur.com/EHyR2nP.png"
                alt="The cover of Stubborn Attachments"
            />
            <div className="description">
                <h3>Stubborn Attachments</h3>
                <h5>$20.00</h5>
            </div>
        </div>
        <button type="button" id="checkout-button" role="link" onClick={handleClick}>
            Checkout
      </button>
    </section>
);
const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);
export default function App() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }
        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);
    const handleClick = async (event) => {
        const stripe = await stripePromise;
        const response = await fetch("/create-checkout-session", {
            method: "POST",
        });
        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };
    return message ? (
        <Message message={message} />
    ) : (
            <ProductDisplay handleClick={handleClick} />
        );
}