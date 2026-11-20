'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, X } from 'lucide-react';
function Navbar ()
{
    const [ isOpen, setIsOpen ] = useState( false );
    const pathname = usePathname();
    const { resolvedTheme, setTheme } = useTheme();
    const isActive = ( href: string ) =>
    {
        return pathname === href
            ? 'bg-amber-100 text-amber-900 dark:bg-amber-300/15 dark:text-amber-200'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white';
    };
    const themeButtonClass = 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-amber-300 hover:text-amber-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-amber-300';

    return (
        <>
            <header className='sticky top-3 z-50 mx-4 mt-4 rounded-full border border-slate-200/80 bg-white/85 text-slate-900 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/85 dark:text-slate-100 dark:shadow-black/20 sm:mx-8'>
                <div className='mx-auto flex max-w-350 items-center justify-between gap-4 px-4 py-2 sm:px-8'>
                    <Link href='/' className='inline-flex items-center gap-3'>
                        <span className='flex flex-col leading-none'>
                            <span className='font-serif text-xl font-semibold tracking-[0.08em] text-slate-900 dark:text-white sm:text-2xl'>Acyuta</span>
                            <span className='mt-1 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300 sm:text-[0.6rem]'>Digital Studio</span>
                        </span>
                    </Link>
                    <nav className='hidden items-center gap-1 sm:flex'>
                        <Link className={ `rounded-full px-4 py-2 text-sm font-medium transition ${ isActive( '/' ) }` } href='/'>Home</Link>
                        <Link className={ `rounded-full px-4 py-2 text-sm font-medium transition ${ isActive( '/about' ) }` } href='/about'>About</Link>
                        <Link className={ `rounded-full px-4 py-2 text-sm font-medium transition ${ isActive( '/services' ) }` } href='/services'>Services</Link>
                        <Link className={ `rounded-full px-4 py-2 text-sm font-medium transition ${ isActive( '/pricing' ) }` } href='/pricing'>Pricing</Link>
                        <Link className={ `rounded-full px-4 py-2 text-sm font-medium transition ${ isActive( '/contact' ) }` } href='/contact'>Contact</Link>
                    </nav>
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={ () => setTheme( resolvedTheme === 'dark' ? 'light' : 'dark' ) }
                            className={ themeButtonClass }
                            aria-label='Toggle color theme'
                            title='Toggle color theme'
                        >
                            <Moon className='block dark:hidden' size={ 18 } />
                            <Sun className='hidden dark:block' size={ 18 } />
                        </button>
                        <button
                            onClick={ () => setIsOpen( true ) }
                            className={ `${ themeButtonClass } sm:hidden` }
                            aria-label='Open menu'
                            aria-expanded={ isOpen }
                        >
                            <Menu size={ 19 } strokeWidth={ 2.5 } />
                        </button>
                    </div>
                </div>
            </header>
            <div className={ `fixed inset-0 z-60 transition duration-300 ${ isOpen ? 'visible opacity-100' : 'invisible opacity-0' }` }>
                <div
                    className='absolute inset-0 bg-slate-900/35 backdrop-blur-sm dark:bg-black/65'
                    onClick={ () => setIsOpen( false ) }
                />
                <div className={ `absolute right-0 top-0 h-full w-full max-w-85 rounded-l-3xl border-l border-slate-200 bg-white text-slate-900 shadow-2xl transition-transform duration-300 dark:border-white/10 dark:bg-slate-950 dark:text-slate-100 ${ isOpen ? 'translate-x-0' : 'translate-x-full' }` }>
                    <div className='flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800'>
                        <span className='text-lg font-semibold'>Menu</span>
                        <button onClick={ () => setIsOpen( false ) } className={ themeButtonClass } aria-label='Close menu'>
                            <X size={ 19 } strokeWidth={ 2.5 } />
                        </button>
                    </div>
                    <div className='flex h-full flex-col gap-6 px-6 py-6 text-lg'>
                        <Link onClick={ () => setIsOpen( false ) } className={ `rounded-2xl px-4 py-3 transition ${ isActive( '/' ) }` } href='/'>Home</Link>
                        <Link onClick={ () => setIsOpen( false ) } className={ `rounded-2xl px-4 py-3 transition ${ isActive( '/about' ) }` } href='/about'>About</Link>
                        <Link onClick={ () => setIsOpen( false ) } className={ `rounded-2xl px-4 py-3 transition ${ isActive( '/services' ) }` } href='/services'>Services</Link>
                        <Link onClick={ () => setIsOpen( false ) } className={ `rounded-2xl px-4 py-3 transition ${ isActive( '/pricing' ) }` } href='/pricing'>Pricing</Link>
                        <Link onClick={ () => setIsOpen( false ) } className={ `rounded-2xl px-4 py-3 transition ${ isActive( '/contact' ) }` } href='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
