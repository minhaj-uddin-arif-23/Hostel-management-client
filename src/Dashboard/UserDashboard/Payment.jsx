import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);
export default function Payment({ plan, price }) {

  return (
    <div className="flex flex-col gap-10 text-center">
      <h1 className="text-3xl font-semibold">Please Pay for the {plan}</h1>
      <p className="font-bold text-3xl text-yellow-600 my-3">
        Total: ${price}
      </p>
      <Elements stripe={stripePromise}>
        <Checkout price={price} plan={plan} />
      </Elements>
    </div>
  );
}
