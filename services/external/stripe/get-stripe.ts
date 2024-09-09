import { type Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
	const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
	if (publishableKey == null) {
		throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
	}
	if (!stripePromise) {
		stripePromise = loadStripe(publishableKey);
	}
	return stripePromise;
};

export default getStripe;
