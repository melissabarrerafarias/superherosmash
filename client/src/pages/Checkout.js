import React from "react";
import Donation from "../components/Donation";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <Donation></Donation>
    </Elements>
  ) 
};

export default Checkout;
