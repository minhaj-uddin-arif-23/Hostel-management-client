import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// import useCart from "../Hook/useCart";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";

function Checkout() {

  // * -----------------------------------------------

  const { user } = useAuth(); // get the user email & name
  const [error, setError] = useState(); // if any error found throw some error in yi
  const [transaction, setTransactions] = useState(""); // user transaction id  when payment done
  const axiosSequre = useAxiosSecure()
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  // const cart = useCart(); // cart all item price is here
  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
 
  // *  -------------------------------------------------

  useEffect(() => {
     
      axiosSequre
        .post("/create-payment-intent", )
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    
  }, [axiosSequre]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get card information 
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
      // ? ----------------------------------------------------------- E R R O R ------------------------------- 

    if (error) {
      console.log("Payment method error found", error);
      setError(error?.message);
    } else {
      console.log("Payment successfull", paymentMethod);
      setError();
    }
    // ? ---------------------------------------------------------- confirm payment ---------------------------
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("Confirm erro");
    } else {
      console.log("PaymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactions(paymentIntent.id);
        // now save the payment ,payment history in database in each user & card
        const paymentInfo = {
          email: user?.email,
          price: totalPrice,
          TransactionId: paymentIntent.id,
          date: new Date(), // utc date convert use moment js
          // cartIds: cart.map((item) => item._id),
          // menuId: cart.map((item) => item.menuId),
          status: "pending",
        };
        const res = axiosSequre.post("/payments", paymentInfo).then((res) => {
          console.log(res.data);
        });
      }
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
        className="mt-4 btn btn-warning"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Payment
      </button>
      <p>{error}</p>
  { 
      transaction && (<p className="text-green-400">Your transaction id is: {transaction}</p>)
  }
    </form>
  );
}

export default Checkout;