import type { Metadata } from "next";
import Pricing from "../../views/Pricing";

export const metadata: Metadata = {
    title: "Website & Social Media Pricing",
    description: "Explore starting prices for business websites, custom web solutions, and monthly social media services from Acyuta Digital Studio.",
    alternates: {
        canonical: "/pricing"
    },
    openGraph: {
        title: "Website & Social Media Pricing | Acyuta Digital Studio",
        description: "Compare website packages and social media service starting prices from Acyuta Digital Studio.",
        url: "/pricing"
    }
};

export default function PricingPage ()
{
    return <Pricing />;
}
