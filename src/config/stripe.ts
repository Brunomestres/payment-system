import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
export const load = async () => {
  const stripe = new Stripe(
    ""
  );
  return stripe;
};
