import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
function Navbar ()
{
    const [ isOpen, setIsOpen ] = useState( false );
    const isActive = ( { isActive }: { isActive: boolean; } ) =>
    {
        return isActive ? 'text-orange-300 underline underline-offset-8' : 'text-slate-200 hover:text-orange-300';
    };
    return (
        <>
            <header className='fixed inset-x-0 top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 text-slate-100 shadow-lg'>
                <div className='mx-auto flex max-w-350 items-center justify-between px-6 py-4 sm:px-10'>
                    <NavLink to='/' className='inline-flex items-center gap-3'>
                        <img src='/appLogo2.png' alt='Acyuta logo' className='h-12 w-12 rounded-2xl object-cover border border-slate-700 bg-slate-900' />
                        <div className='text-sm font-semibold tracking-[0.16em] text-slate-100'>ACYUTA</div>
                    </NavLink>
                    <nav className='hidden sm:flex items-center gap-10'>
                        <NavLink className={ isActive } to='/'>Home</NavLink>
                        <NavLink className={ isActive } to='/about'>About</NavLink>
                        <NavLink className={ isActive } to='/services'>Services</NavLink>
                        <NavLink className={ isActive } to='/contact'>Contact</NavLink>
                    </nav>
                    <button
                        onClick={ () => setIsOpen( true ) }
                        className='inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:border-orange-400/60 hover:text-orange-300 sm:hidden'
                        aria-label='Open menu'
                    >
                        <Menu strokeWidth={ 2.5 } />
                    </button>
                </div>
            </header>
            <div className={ `fixed inset-0 z-40 transition duration-300 ${ isOpen ? 'visible opacity-100' : 'invisible opacity-0' }` }>
                <div
                    className='absolute inset-0 bg-slate-950/90 backdrop-blur-sm'
                    onClick={ () => setIsOpen( false ) }
                />
                <div className={ `absolute right-0 top-0 h-full w-full max-w-[320px] bg-slate-950/95 shadow-2xl transition-transform duration-300 ${ isOpen ? 'translate-x-0' : 'translate-x-full' }` }>
                    <div className='flex items-center justify-between border-b border-slate-800 px-5 py-4'>
                        <span className='text-lg font-semibold text-slate-100'>Menu</span>
                        <button onClick={ () => setIsOpen( false ) } className='inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 text-slate-100 hover:text-orange-300' aria-label='Close menu'>
                            <X strokeWidth={ 2.5 } />
                        </button>
                    </div>
                    <div className='flex h-full flex-col gap-6 px-6 py-6 text-lg'>
                        <NavLink onClick={ () => setIsOpen( false ) } className={ isActive } to='/'>Home</NavLink>
                        <NavLink onClick={ () => setIsOpen( false ) } className={ isActive } to='/about'>About</NavLink>
                        <NavLink onClick={ () => setIsOpen( false ) } className={ isActive } to='/services'>Services</NavLink>
                        <NavLink onClick={ () => setIsOpen( false ) } className={ isActive } to='/contact'>Contact</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
