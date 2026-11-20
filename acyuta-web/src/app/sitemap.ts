import type { MetadataRoute } from "next";

const siteUrl = "https://acyutadigitalstudio.website";

export default function sitemap (): MetadataRoute.Sitemap
{
    return [
        {
            url: siteUrl,
            changeFrequency: "monthly",
            priority: 1
        },
        {
            url: `${siteUrl}/about`,
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: `${siteUrl}/services`,
            changeFrequency: "monthly",
            priority: 0.9
        },
        {
            url: `${siteUrl}/pricing`,
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${siteUrl}/contact`,
            changeFrequency: "monthly",
            priority: 0.7
        }
    ];
}
