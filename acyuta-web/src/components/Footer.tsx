'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LocationOn, Email, Call, WhatsApp, Instagram, Facebook } from '@mui/icons-material';

function Footer ()
{
    const pathname = usePathname();
    const isActive = ( href: string ) =>
    {
        return pathname === href
            ? 'bg-amber-100 text-amber-900 dark:bg-amber-300/10 dark:text-amber-200'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white';
    };
    return (
        <footer className='border-t border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-slate-950 dark:text-slate-400'>
            <div className='mx-auto grid max-w-350 gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:px-16'>
                <div>
                    <Link href='/' className='inline-flex flex-col leading-none'>
                        <span className='font-serif text-2xl font-semibold tracking-[0.08em] text-slate-900 dark:text-white'>Acyuta</span>
                        <span className='mt-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300'>Digital Studio</span>
                    </Link>
                    <p className='mt-5 max-w-sm text-sm leading-7'>
                        Strategy, design, websites, and social media to help businesses communicate clearly and grow with confidence.
                    </p>
                    <div className='mt-6 flex gap-3'>
                        <a className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-amber-400 hover:text-amber-700 dark:border-white/10 dark:bg-white/5 dark:hover:text-amber-300' href='https://wa.me/9336727772' target='_blank' rel='noreferrer' aria-label='WhatsApp'>
                            <WhatsApp fontSize='small' />
                        </a>
                        <a className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-amber-400 hover:text-amber-700 dark:border-white/10 dark:bg-white/5 dark:hover:text-amber-300' href='https://www.instagram.com/acyutadigitalstudio' target='_blank' rel='noreferrer' aria-label='Instagram'>
                            <Instagram fontSize='small' />
                        </a>
                        <a className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-amber-400 hover:text-amber-700 dark:border-white/10 dark:bg-white/5 dark:hover:text-amber-300' href='https://www.facebook.com/ankitmall.932' target='_blank' rel='noreferrer' aria-label='Facebook'>
                            <Facebook fontSize='small' />
                        </a>
                    </div>
                </div>

                <nav aria-label='Footer navigation'>
                    <h2 className='text-sm font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-slate-100'>Explore</h2>
                    <div className='mt-5 flex flex-col items-start gap-2'>
                        <Link className={ `rounded-full px-3 py-2 text-sm transition ${ isActive( '/' ) }` } href='/'>Home</Link>
                        <Link className={ `rounded-full px-3 py-2 text-sm transition ${ isActive( '/about' ) }` } href='/about'>About</Link>
                        <Link className={ `rounded-full px-3 py-2 text-sm transition ${ isActive( '/services' ) }` } href='/services'>Services</Link>
                        <Link className={ `rounded-full px-3 py-2 text-sm transition ${ isActive( '/pricing' ) }` } href='/pricing'>Pricing</Link>
                        <Link className={ `rounded-full px-3 py-2 text-sm transition ${ isActive( '/contact' ) }` } href='/contact'>Contact</Link>
                    </div>
                </nav>

                <div>
                    <h2 className='text-sm font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-slate-100'>Get in touch</h2>
                    <div className='mt-5 flex flex-col gap-4 text-sm'>
                        <p className='flex items-center gap-3'>
                            <LocationOn className='shrink-0 text-amber-700 dark:text-amber-300' fontSize='small' />
                            Gorakhpur, Uttar Pradesh
                        </p>
                        <a className='flex items-center gap-3 transition hover:text-amber-800 dark:hover:text-amber-300' href='mailto:acyutadigitalstudio@gmail.com'>
                            <Email className='shrink-0 text-amber-700 dark:text-amber-300' fontSize='small' />
                            acyutadigitalstudio@gmail.com
                        </a>
                        <a className='flex items-center gap-3 transition hover:text-amber-800 dark:hover:text-amber-300' href='tel:+919336727772'>
                            <Call className='shrink-0 text-amber-700 dark:text-amber-300' fontSize='small' />
                            +91 93367 27772 / 9305617987
                        </a>
                    </div>
                </div>
            </div>

            <div className='border-t border-slate-200 dark:border-white/10'>
                <div className='mx-auto flex max-w-350 flex-col gap-2 px-6 py-5 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16'>
                    <p>&copy; { new Date().getFullYear() } Acyuta Digital Studio. All rights reserved.</p>
                    <p>Made with ❤️ by Ankit &amp; Zenith</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;