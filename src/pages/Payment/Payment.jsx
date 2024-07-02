import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div className="py-[120px]">
      <Elements stripe={stripePromise}>
        <CheckoutFrom></CheckoutFrom>
      </Elements>
    </div>
  );
};

export default Payment;
