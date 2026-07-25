import { Moving, ArrowForward } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { orange } from '@mui/material/colors';

function Home ()
{
    return (
        <div className="sm:px-10 px-1 sm:py-20 py-10 h-full w-full bg-[url('/bg5.png')] text-slate-300 bg-cover">
            <div className="bg-black/80">
                <div className="flex sm:flex-row flex-col-reverse justify-between items-center">
                    <div className="sm:h-160 sm:w-120 h-full w-full bg-black/50 rounded-2xl sm:p-10 p-2 flex flex-col gap-5 justify-start items-center">
                        <div className="flex flex-col sm:mt-15 gap-4">
                            <p className='text-orange-300 text-sm font-semibold'>WELCOME TO ACYUTA WEB STUDIO</p>
                            <h1 className='text-5xl font-semibold'>We Build Website</h1>
                            <h1 className='text-5xl font-semibold'>That Help Businesses </h1>
                            <h1 className='text-5xl font-semibold text-orange-300'>Grow  <Moving sx={ { fontSize: 50, color: orange[ 500 ] } } /></h1>
                            <p className='text-sm font-semibold'>We create modern,responsive,and high-performance website that help you attract more customers and grow your brand online.</p>
                        </div>
                        <div className='flex flex-row gap-15'>
                            <NavLink to='/contact' className='px-5 py-3 rounded-2xl bg-orange-400 border border-white text-white 
                            hover:scale-105 duration-300 active:scale-95'>Contact Us <ArrowForward /></NavLink>
                            <NavLink to='/services' className='px-5 py-3 rounded-2xl bg-black border border-white text-white 
                            hover:scale-105 duration-300 active:scale-95'>Services <ArrowForward /></NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="/HomeImage.png" alt="home Image" className="sm:h-160 sm:w-220 h-60 w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;