import type { Metadata } from "next";
import Contact from "../../views/Contact";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact Acyuta Digital Studio to discuss a business website, custom web app, social media support, or your next digital project.",
    alternates: {
        canonical: "/contact"
    },
    openGraph: {
        title: "Contact Acyuta Digital Studio | Start a Project",
        description: "Tell us about your website, web app, or social media project and start a conversation with Acyuta Digital Studio.",
        url: "/contact"
    }
};

export default function ContactPage ()
{
    return <Contact />;
}
