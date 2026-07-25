import { NavLink } from 'react-router-dom';
import { LocationOn, Email, Call, WhatsApp, Instagram, Facebook } from '@mui/icons-material';

function Footer ()
{
    const isActive = ( { isActive }: { isActive: boolean; } ) =>
    {
        return isActive ? 'text-blue-500 ' : 'hover:text-blue-500 ';
    };
    return (
        <>
            <div className='w-full sm:px-15 px-5 h-full flex sm:flex-row flex-col sm:justify-evenly gap-5 py-5 bg-slate-900 text-slate-400 border-t border-slate-800'>
                <div className='flex flex-col gap-2' >
                    <h1 className='text-2xl font-semibold '>Contacts</h1>
                    <div className='flex items-center  gap-3'>
                        <h3><LocationOn /></h3>
                        <h3>Gorakhpur Uttar Pradesh</h3>
                    </div>
                    <div className='flex items-center  gap-3'>
                        <h3><Email /></h3>
                        <h3>acyutawebstudio@gmail.com</h3>
                    </div>
                    <div className='flex items-center  gap-3'>
                        <h3><Call /></h3>
                        <h3>9336727772</h3>
                    </div>
                    <div className='flex gap-5'>
                        <NavLink to='https://wa.me/9336727772'><WhatsApp /></NavLink>
                        <NavLink to='https://www.instagram.com/ankit_mall_932'><Instagram /></NavLink>
                        <NavLink to='https://www.facebook.com/ankitmall.932'><Facebook /></NavLink>
                    </div>
                </div>
                <div className='w-fit flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>Links</h1>
                    <NavLink className={ isActive } to='/'>Home</NavLink>
                    <NavLink className={ isActive } to='/about'>About</NavLink>
                    <NavLink className={ isActive } to='/services'>Services</NavLink>
                    <NavLink className={ isActive } to='/contact'>Contact</NavLink>
                </div>
            </div>
            <div className='border-t-2 border-gray-200 flex sm:flex-row flex-col justify-between px-6 py-3 '>
                <p>&copy; All Rights Reserve to Acyuta Web Studio</p>
                <div className='flex gap-4'>
                    <h1>Made With ❤️ By Ankit & Zenith</h1>
                </div>
            </div>
        </>
    );
}

export default Footer;