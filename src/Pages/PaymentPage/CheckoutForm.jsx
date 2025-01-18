/* eslint-disable react/prop-types */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const CheckoutForm = ({fee}) => {
   
   const {user}=useAuth()
   const [clientSecret,setClientSecret]=useState('')
    const [error,setError]=useState('')
    const stripe=useStripe();
    const elements=useElements();
    const axiosSecure=useAxiosSecure();
    useEffect( ()=>{
 axiosSecure.post('/create-payment-intent',{fee})
 .then(res=>{
    console.log(res.data.clientSecret);
    setClientSecret(res.data.clientSecret);
 })
 
    },[axiosSecure,fee])
   
    const handleSubmit=async e=>{
        e.preventDefault();
        setError('')
        if(!stripe || !elements){
            return
        }
        const card =elements.getElement(CardElement)
        if(card == null){
            return
        }
      const {error,paymentMethod}=await stripe.createPaymentMethod({
        type:'card',
        card
      })
      if(error){
        console.log('payment error',error);
        setError(error.message)
      }else{
        console.log('payment method',paymentMethod);
      }
      
      const {paymentIntent,error:confirmError}= await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                email:user?.email,
                name:user?.displayName 
            }
        }
      })
      if(confirmError){
        console.log(confirmError);
      }else{
        console.log(paymentIntent);
        if(paymentIntent.status == 'succeeded'){
            toast.success('Payment successful');
        }
      }
    }
    
    return (
    <form onSubmit={handleSubmit}>
<CardElement
className="border p-5 rounded-lg "
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
         <button disabled={!clientSecret || !stripe} type="submit" className="btn bg-green-600 text-white mt-2 w-full" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-400 italic" >{error}</p>
    </form>
    );
};

export default CheckoutForm;