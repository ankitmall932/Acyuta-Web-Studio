import type { Metadata } from "next";
import Home from "../views/Home";

export const metadata: Metadata = {
    title: "Web Design, Development & Social Media | Acyuta Digital Studio",
    description: "Grow your business with strategic website design, custom web development, and social media services from Acyuta Digital Studio.",
    alternates: {
        canonical: "/"
    },
    openGraph: {
        title: "Web Design, Development & Social Media | Acyuta Digital Studio",
        description: "Grow your business with strategic website design, custom web development, and social media services.",
        url: "/"
    }
};

export default function HomePage ()
{
    return <Home />;
}
