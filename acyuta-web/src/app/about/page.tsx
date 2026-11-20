import type { Metadata } from "next";
import About from "../../views/About";

export const metadata: Metadata = {
    title: "About the Studio",
    description: "Meet Acyuta Digital Studio, a creative partner helping businesses build clear, dependable websites and a consistent social media presence.",
    alternates: {
        canonical: "/about"
    },
    openGraph: {
        title: "About Acyuta Digital Studio",
        description: "Learn about our people-first approach to website design, development, and digital growth.",
        url: "/about"
    }
};

export default function AboutPage ()
{
    return <About />;
}
