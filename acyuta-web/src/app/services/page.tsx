import type { Metadata } from "next";
import Services from "../../views/Services";

export const metadata: Metadata = {
    title: "Website Design, Development & Social Media Services",
    description: "Explore business website design, custom web development, UI/UX, website support, and social media content services from Acyuta Digital Studio.",
    alternates: {
        canonical: "/services"
    },
    openGraph: {
        title: "Website & Social Media Services | Acyuta Digital Studio",
        description: "Website design, custom development, UI/UX, website support, and social media content services for growing businesses.",
        url: "/services"
    }
};

export default function ServicesPage ()
{
    return <Services />;
}
