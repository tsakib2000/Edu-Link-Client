/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ session }) => {
  const { user } = useAuth();
  const navigate=useNavigate()
  const { fee } = session;

  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .post("/create-payment-intent", { fee })
      .then((res) => {
        
        setLoading(false);
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [axiosSecure, fee]);
  const { _id, ...newSession } = session;
  newSession.sessionId = _id;
  newSession.studentName=user?.displayName;
  newSession.studentEmail = user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
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
  
      setError(error.message);
    } 

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });
    if (confirmError) {
      toast.error(confirmError.message)
    } else {
    
      if (paymentIntent.status == "succeeded") {
       
   try{
    
    await axiosSecure.post("/bookSession", newSession);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Payment successful",
      showConfirmButton: false,
      background:'#58a6af',
      customClass:{
        text:'text-white',
        title:'text-white font-bold'
      },
      timer: 1500
    });
    navigate('/dashboard')
   }catch(err){
    toast.error(err.message)
   }
      }
    }
  };

  if (loading) return <LoadingSpinner />;
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="border p-5 rounded-lg "
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
        disabled={!clientSecret || !stripe}
        type="submit"
        className="btn bg-green-600 text-white mt-2 w-full"
      >
        Pay
      </button>
      <p className="text-red-400 italic">{error}</p>
    </form>
  );
};

export default CheckoutForm;
