import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
export default function Payment() {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);

  return (
    <div className="flex  gap-10 ">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Please Pay Money </h1>
        <p className="font-bold text-3xl text-yellow-300 my-3">Payment</p>
      </div>
      <div className="mt-48">
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </div>
    </div>
  );
}
