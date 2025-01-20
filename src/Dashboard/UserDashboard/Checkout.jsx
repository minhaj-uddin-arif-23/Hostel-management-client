import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";

function Checkout({ price, plan }) {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [transaction, setTransaction] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  // console.log('price ',price)
  useEffect(() => {
    // Fetch the client secret from the backend
    axiosSecure
      .post("/create-payment-intent", { price }) // Send price dynamically
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email || "anonymous",
        name: user?.displayName || "anonymous",
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );

    if (confirmError) {
      setError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransaction(paymentIntent.id);

      const paymentInfo = {
        email: user?.email,
        price,
        plan,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      // Save payment to the database
      axiosSecure.post("/payment", paymentInfo).then((res) => {
        console.log("Payment saved:", res.data);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="btn btn-warning mt-4"
      >
        Pay ${price}
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {transaction && (
        <p className="text-green-500">
          Payment Successful! Transaction ID: {transaction}
        </p>
      )}
    </form>
  );
}

export default Checkout;
