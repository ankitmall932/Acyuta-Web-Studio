'use client';

import Link from 'next/link';
import { LocationOn, Email, Call, WhatsApp, Instagram, Facebook } from '@mui/icons-material';
import { ArrowUpRight } from 'lucide-react';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' }
];

function Footer ()
{
    return (
        <footer className='relative overflow-hidden border-t border-slate-200/80 bg-[#f7f6f2] text-slate-600 dark:border-white/10 dark:bg-[#090e18] dark:text-slate-400'>
            <div className='mx-auto max-w-350 px-5 pt-10 sm:px-8 lg:px-12'>
                <div className='relative overflow-hidden rounded-4xl bg-slate-950 px-6 py-9 text-white shadow-xl shadow-slate-950/10 dark:bg-[#111b2b] sm:px-10 sm:py-11'>
                    <div className='pointer-events-none absolute -right-12 -top-32 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl' />
                    <div className='relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
                        <div>
                            <p className='text-xs font-bold uppercase tracking-[0.22em] text-amber-300'>Have a good one in mind?</p>
                            <h2 className='mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl'>Let&apos;s make your next move count.</h2>
                        </div>
                        <Link href='/contact' className='inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300'>
                            Start a project <ArrowUpRight size={ 16 } />
                        </Link>
                    </div>
                </div>

                <div className='grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.65fr_1fr] lg:gap-16 lg:py-16'>
                    <div>
                        <Link href='/' aria-label='Acyuta Digital Studio home' className='inline-flex items-center'>
                            <span className='relative block h-14 w-48 overflow-hidden rounded-md sm:w-52'>
                                <img src='/lighLogo.png' alt='' className='absolute left-0 top-1/2 h-auto w-48 max-w-none -translate-y-1/2 scale-[0.9] object-contain dark:hidden sm:w-52' />
                                <img src='/darkLogo.png' alt='' className='absolute left-0 top-1/2 hidden h-auto w-48 max-w-none -translate-y-1/2 scale-[0.8] object-contain dark:block sm:w-52' />
                            </span>
                        </Link>
                        <p className='mt-5 max-w-sm text-sm leading-7'>
                            Strategy, design, websites, and social media to help businesses communicate clearly and grow with confidence.
                        </p>
                        <div className='mt-6 flex gap-2.5'>
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
                        <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-slate-950 dark:text-white'>Explore</h2>
                        <div className='mt-5 flex flex-col items-start gap-1'>
                            { links.map( ( link ) => (
                                <Link key={ link.href } className='rounded-full py-2 text-sm transition hover:text-amber-700 dark:hover:text-amber-300' href={ link.href }>
                                    { link.label }
                                </Link>
                            ) ) }
                        </div>
                    </nav>

                    <div>
                        <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-slate-950 dark:text-white'>Get in touch</h2>
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

                <div className='flex flex-col gap-2 border-t border-slate-200 py-5 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between'>
                    <p>&copy; { new Date().getFullYear() } Acyuta Digital Studio. All rights reserved.</p>
                    <p>Made with care by Ankit &amp; Zenith</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
