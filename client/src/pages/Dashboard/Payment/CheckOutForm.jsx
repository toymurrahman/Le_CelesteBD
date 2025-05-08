import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useCart from "./../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const price = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
   if(price > 0){
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
   }
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment Failed due to:", error.message);
      setError(error.message);
    } else {
      console.log("PaymentMethod created:", paymentMethod);
      setError("");
    }
    // payment confirmation
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (paymentError) {
      console.log(paymentError);
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        // payment set in db
        const payment = {
          email: user.email,
          price: price,
          date: new Date(),
          transactionId: paymentIntent.id,
          cartIds: cart.map(item => item._id),
          menuItemIds: cart.map(item => item.menuId),
          status: 'pending'
        }
        const res = await axiosSecure.post('/payments', payment);
        refetch();
        if(res.data?.paymentResult?.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Successfull",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/paymentHistory');
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4"
    >
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
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded"
      >
        Pay
      </button>
      <p className="text-sm text-red-600"> {error} </p>
      {transactionId && (
        <p className="text-sm text-emerald-600">
          Your transaction id: {transactionId}{" "}
        </p>
      )}
    </form>
  );
};

export default CheckOutForm;
