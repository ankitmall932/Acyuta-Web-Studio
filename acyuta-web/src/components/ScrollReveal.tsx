"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal ( { children }: Readonly<{ children: React.ReactNode; }> )
{
    const pathname = usePathname();

    useEffect( () =>
    {
        const sections = document.querySelectorAll( "main section" );
        const reducedMotion = window.matchMedia( "(prefers-reduced-motion: reduce)" ).matches;

        if ( reducedMotion )
        {
            sections.forEach( ( section ) => section.classList.add( "scroll-reveal", "is-visible" ) );
            return;
        }

        const observer = new IntersectionObserver(
            ( entries ) =>
            {
                entries.forEach( ( entry ) =>
                {
                    if ( entry.isIntersecting )
                    {
                        entry.target.classList.add( "is-visible" );
                        observer.unobserve( entry.target );
                    }
                } );
            },
            { threshold: 0.12 }
        );

        sections.forEach( ( section ) =>
        {
            section.classList.add( "scroll-reveal" );
            observer.observe( section );
        } );

        return () => observer.disconnect();
    }, [ pathname ] );

    return children;
}
