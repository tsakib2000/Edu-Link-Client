import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

//TODO
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Checkout = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
 
  const { data: session = {} } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/session/${id}`);
      return data;
    },
  });

const {fee}=session
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center uppercase">
        Pay To Book Your study session
      </h1>
      <div className="w-10/12 mx-auto p-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm fee={fee}  />
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
