import React, { useState, useEffect, useCallback } from "react";
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../../api";

const cardStyle = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#32325d"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    }
};

const CheckoutForm = ({ products }) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        createPaymentIntent(products)
            .then(({ clientSecret }) => {
                setClientSecret(() => clientSecret);
            });
    }, [products]);

    const handleChange = useCallback(async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }, [setDisabled, setError]);

    const handleSubmit = useCallback(async ev => {
        ev.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    }, [stripe, elements, clientSecret]);

    return (
        <>
            <section>
            {products?.map(product => (
                
                    <div className="product">
                        <img
                            src="https://i.imgur.com/EHyR2nP.png"
                            alt="The cover of Stubborn Attachments"
                        />
                        <div className="description">
                            <h3>{product.name}</h3>
                            <h5>$20.00</h5>
                        </div>
                    </div>
                
            ))}
            </section>
            <form id="payment-form" onSubmit={handleSubmit}>
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                <button
                    disabled={processing || disabled || succeeded}
                    id="submit"
                >
                    <span id="button-text">
                        {processing ? (
                            <div className="spinner" id="spinner"></div>
                        ) : (
                                "Pay now"
                            )}
                    </span>
                </button>
                {/* Show any error that happens when processing the payment */}
                {error && (
                    <div className="card-error" role="alert">
                        {error}
                    </div>
                )}
                {/* Show a success message upon completion */}
                <p className={succeeded ? "result-message" : "result-message hidden"}>
                    Payment succeeded, see the result in your
        <a
                        href={`https://dashboard.stripe.com/test/payments`}
                    >
                        {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
            </form>
        </>
    );
}

export default CheckoutForm;
