import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Route ()
{
    const location = useLocation();

    useEffect( () =>
    {
        const sections = document.querySelectorAll( 'main section' );
        const reducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;

        if ( reducedMotion )
        {
            sections.forEach( ( section ) => section.classList.add( 'scroll-reveal', 'is-visible' ) );
            return;
        }

        const observer = new IntersectionObserver(
            ( entries ) =>
            {
                entries.forEach( ( entry ) =>
                {
                    if ( entry.isIntersecting )
                    {
                        entry.target.classList.add( 'is-visible' );
                        observer.unobserve( entry.target );
                    }
                } );
            },
            { threshold: 0.12 }
        );

        sections.forEach( ( section ) =>
        {
            section.classList.add( 'scroll-reveal' );
            observer.observe( section );
        } );

        return () => observer.disconnect();
    }, [ location.pathname ] );

    return (
        <div className='bg-slate-950 text-slate-100'>
            <Navbar />
            <main className='pt-16 sm:pt-20'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Route;