'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' }
];

function Navbar ()
{
    const [ isOpen, setIsOpen ] = useState( false );
    const pathname = usePathname();
    const { resolvedTheme, setTheme } = useTheme();
    const themeButtonClass = 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-700 transition hover:border-amber-400 hover:text-amber-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-amber-300';

    const navLink = ( href: string, mobile = false ) =>
    {
        const active = pathname === href;
        return `relative rounded-full px-4 py-2.5 text-sm font-medium transition ${ mobile ? 'w-full text-base' : '' } ${ active
            ? 'bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white' }`;
    };

    const closeMenu = () => setIsOpen( false );

    return (
        <>
            <header className='sticky top-3 z-50 mx-3 mt-3 rounded-full border border-white/80 bg-white/80 text-slate-900 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.32)] backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-100 sm:mx-6 lg:mx-10'>
                <div className='mx-auto flex max-w-350 items-center justify-between gap-3 px-3 py-2 sm:px-5'>
                    <Link href='/' onClick={ closeMenu } aria-label='Acyuta Digital Studio home' className='group inline-flex shrink-0 items-center rounded-full py-1 pl-1 pr-2'>
                        <span className='relative block h-12 w-44 overflow-hidden rounded-md transition group-hover:scale-[1.02] sm:w-48'>
                            <img src='/lighLogo.png' alt='' className='absolute left-0 top-1/2 h-auto w-44 max-w-none -translate-y-1/2 scale-[0.9] object-contain dark:hidden sm:w-48' />
                            <img src='/darkLogo.png' alt='' className='absolute left-0 top-1/2 hidden h-auto w-44 max-w-none -translate-y-1/2 scale-[0.8] object-contain dark:block sm:w-48' />
                        </span>
                    </Link>

                    <nav aria-label='Main navigation' className='hidden items-center gap-1 rounded-full border border-slate-200/70 bg-slate-50/70 p-1 dark:border-white/5 dark:bg-white/5 md:flex'>
                        { links.map( ( link ) => (
                            <Link key={ link.href } className={ navLink( link.href ) } href={ link.href } aria-current={ pathname === link.href ? 'page' : undefined }>
                                { link.label }
                            </Link>
                        ) ) }
                    </nav>

                    <div className='flex shrink-0 items-center gap-2'>
                        <button
                            onClick={ () => setTheme( resolvedTheme === 'dark' ? 'light' : 'dark' ) }
                            className={ themeButtonClass }
                            aria-label='Toggle color theme'
                            title='Toggle color theme'
                        >
                            <Moon className='block dark:hidden' size={ 17 } />
                            <Sun className='hidden dark:block' size={ 17 } />
                        </button>
                        <Link href='/contact' className='hidden items-center gap-1.5 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-300 md:inline-flex'>
                            Let&apos;s talk <ArrowUpRight size={ 16 } />
                        </Link>
                        <button
                            onClick={ () => setIsOpen( true ) }
                            className={ `${ themeButtonClass } md:hidden` }
                            aria-label='Open menu'
                            aria-expanded={ isOpen }
                            aria-controls='mobile-navigation'
                        >
                            <Menu size={ 19 } strokeWidth={ 2.3 } />
                        </button>
                    </div>
                </div>
            </header>

            <div className={ `fixed inset-0 z-60 transition duration-300 md:hidden ${ isOpen ? 'visible opacity-100' : 'invisible opacity-0' }` }>
                <button
                    className='absolute inset-0 h-full w-full cursor-default bg-slate-950/45 backdrop-blur-sm dark:bg-black/65'
                    onClick={ closeMenu }
                    aria-label='Close menu'
                    tabIndex={ isOpen ? 0 : -1 }
                />
                <nav
                    id='mobile-navigation'
                    aria-label='Mobile navigation'
                    aria-hidden={ !isOpen }
                    className={ `absolute right-0 top-0 flex h-full w-full max-w-90 flex-col border-l border-slate-200 bg-[#fbfaf7] text-slate-900 shadow-2xl transition-transform duration-300 dark:border-white/10 dark:bg-slate-950 dark:text-slate-100 ${ isOpen ? 'translate-x-0' : 'translate-x-full' }` }
                >
                    <div className='flex items-center justify-between border-b border-slate-200/80 px-6 py-5 dark:border-white/10'>
                        <span className='text-sm font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400'>Navigate</span>
                        <button onClick={ closeMenu } className={ themeButtonClass } aria-label='Close menu'>
                            <X size={ 19 } />
                        </button>
                    </div>
                    <div className='flex flex-col gap-2 px-5 py-6'>
                        { links.map( ( link ) => (
                            <Link
                                key={ link.href }
                                onClick={ closeMenu }
                                className={ navLink( link.href, true ) }
                                href={ link.href }
                                aria-current={ pathname === link.href ? 'page' : undefined }
                                tabIndex={ isOpen ? 0 : -1 }
                            >
                                { link.label }
                            </Link>
                        ) ) }
                    </div>
                    <div className='mt-auto p-5'>
                        <Link onClick={ closeMenu } href='/contact' className='flex items-center justify-between rounded-2xl bg-amber-400 px-5 py-4 font-bold text-slate-950 transition hover:bg-amber-300'>
                            Start a project <ArrowUpRight size={ 18 } />
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
