import React from "react";
import SectionTitle from "../../../components/shared/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  return (
    <div>
      <div>
        <SectionTitle heading={"Payment"} subHeading={"pay bills"} />
      </div>
      <div>
        <Elements stripe={stripePromise}>
            <CheckOutForm/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
