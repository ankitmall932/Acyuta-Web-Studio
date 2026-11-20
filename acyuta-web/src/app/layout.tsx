import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ThemeProvider from "../components/ThemeProvider";
import "../index.css";

const siteUrl = "https://acyutadigitalstudio.website";

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Acyuta Digital Studio",
    url: siteUrl,
    logo: `${ siteUrl }/darkLogo.png`,
    email: "acyutadigitalstudio@gmail.com",
    telephone: "+91 93367 27772",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Gorakhpur",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN"
    },
    sameAs: [
        "https://www.instagram.com/acyutadigitalstudio",
        "https://www.facebook.com/ankitmall.932",
        "https://wa.me/9336727772"
    ]
};

export const metadata: Metadata = {
    metadataBase: new URL( siteUrl ),
    title: {
        default: "Acyuta Digital Studio | Websites & Social Media",
        template: "%s | Acyuta Digital Studio"
    },
    description: "Acyuta Digital Studio helps businesses grow with strategic website design and development, custom web solutions, and social media services.",
    applicationName: "Acyuta Digital Studio",
    icons: {
        icon: "/darkLogo.png",
        apple: "/darkLogo.png"
    },
    alternates: {
        canonical: "/"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
        }
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        siteName: "Acyuta Digital Studio",
        title: "Acyuta Digital Studio | Websites & Social Media",
        description: "Strategic websites, custom web solutions, and social media services to help your business grow.",
        url: "/",
        images: [
            {
                url: "/HomeImage.png",
                alt: "Acyuta Digital Studio website design preview"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Acyuta Digital Studio | Websites & Social Media",
        description: "Strategic websites, custom web solutions, and social media services to help your business grow.",
        images: [ "/HomeImage.png" ]
    }
};

export default function RootLayout ( { children }: Readonly<{ children: React.ReactNode; }> )
{
    return (
        <html lang="en-IN" suppressHydrationWarning>
            <body className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#080d16] dark:text-slate-100">
                <ThemeProvider>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={ { __html: JSON.stringify( organizationJsonLd ) } }
                    />
                    <Navbar />
                    <main>
                        <ScrollReveal>{ children }</ScrollReveal>
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
