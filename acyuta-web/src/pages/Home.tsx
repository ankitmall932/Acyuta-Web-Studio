import { Moving, ArrowForward, WorkspacePremium, Group, AccessTime, SignalCellularAlt, ShieldOutlined, Computer, Speed, PhoneAndroid, Search, VerifiedUser, Timer, Place, StackedLineChart, HourglassBottom, CurrencyRupee, Handshake, RocketLaunch } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { orange } from '@mui/material/colors';

function Home ()
{
    return (
        <>
            <div className="sm:px-10 px-1 sm:pt-20 pt-10 h-full w-full bg-[url('/bg5.png')] text-slate-300 bg-cover">
                <div>
                    <div className="bg-black/80">
                        <div className="flex sm:flex-row flex-col-reverse justify-between items-center">
                            <div className="lg:h-160 lg:w-120 sm:h-160 sm:w-120 h-full w-full bg-black/50 rounded-2xl sm:p-10 p-2 flex flex-col gap-5 justify-start items-center">
                                <div className="flex flex-col sm:mt-15 gap-4">
                                    <p className='text-orange-300 text-sm font-semibold'>WELCOME TO ACYUTA WEB STUDIO</p>
                                    <h1 className='text-5xl font-semibold'>We Build Website</h1>
                                    <h1 className='text-5xl font-semibold'>That Help Businesses </h1>
                                    <h1 className='text-5xl font-semibold text-orange-300'>Grow  <Moving sx={ { fontSize: 50, color: orange[ 500 ] } } /></h1>
                                    <p className='text-sm font-semibold'>We create modern,responsive,and high-performance website that help you attract more customers and grow your brand online.</p>
                                </div>
                                <div className='flex sm:flex-row flex-col sm:gap-15 gap-5'>
                                    <NavLink to='/contact' className='sm:px-5 sm:py-3 px-10 py-2 text-center rounded-2xl bg-orange-400 border border-white text-white 
                            hover:scale-105 duration-300 active:scale-95'>Contact Us <ArrowForward /></NavLink>
                                    <NavLink to='/services' className='sm:px-5 sm:py-3 px-10 py-2 text-center rounded-2xl bg-black border border-white text-white 
                            hover:scale-105 duration-300 active:scale-95'>Services <ArrowForward /></NavLink>
                                </div>
                            </div>
                            <div>
                                <img src="/HomeImage.png" alt="home Image" className="lg:h-160 lg:w-220 sm:h-100 sm:w-120 h-60 w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full  w-full bg-black  sm:px-10 px-1 pb-10  flex flex-col gap-10'>
                <div className='bg-white sm:px-10 px-1 py-5 text-center rounded-2xl'>
                    <h1 className='text-4xl font-bold underline underline-offset-8'>Key Features</h1>
                    <div className='bg-black/25 text-white text-start sm:px-5 sm:py-3 px-2 py-2 mt-5 rounded-2xl grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 gap-2'>
                        <div className='border border-white rounded-xl flex flex-row justify-center items-center gap-1 p-2 bg-black/50  hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <WorkspacePremium sx={ { fontSize: 50 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Professional Online Identity</h1>
                                <p className='text-sm'>Build a strong and professional image for your business.</p>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-row justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <Group sx={ { fontSize: 50 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>More Customer Enquiries</h1>
                                <p className='text-sm'>Get more calls and messages from interested customers.</p>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-row justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25 rounded-full flex justify-center items-center  '>
                                <AccessTime sx={ { fontSize: 50 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>24*7 Availability</h1>
                                <p className='text-sm'>Your Business information is available anytime, anywhere.</p>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-row justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25bg-amber-200 rounded-full flex justify-center items-center  '>
                                <SignalCellularAlt sx={ { fontSize: 50 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Business Growth</h1>
                                <p className='text-sm'>Reach more people and convert visiters into customers.</p>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-row justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <ShieldOutlined sx={ { fontSize: 50 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Better Trust & Credibility</h1>
                                <p className='text-sm'>Customers trust business that have a professional website.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white sm:px-10 px-1 py-5 text-center rounded-2xl'>
                    <h1 className='text-4xl font-bold underline underline-offset-8'>Why Choose Acyuta Web Studio?</h1>
                    <div className='bg-black/25 text-white  sm:px-5 sm:py-3 px-2 py-2 mt-5 rounded-2xl grid xl:grid-cols-6  lg:grid-cols-4 grid-cols-2 gap-2'>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50  hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <Computer sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Modern Design</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <Speed sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Fast Loading</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25 rounded-full flex justify-center items-center  '>
                                <PhoneAndroid sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Mobile Friendly</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25bg-amber-200 rounded-full flex justify-center items-center  '>
                                <Search sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>SEO Ready</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <VerifiedUser sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Secure & Reliable</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50  hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <Timer sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>24*7 Solution</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <Place sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Map Integration</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25 rounded-full flex justify-center items-center  '>
                                <StackedLineChart sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>More Visibility</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25bg-amber-200 rounded-full flex justify-center items-center  '>
                                <HourglassBottom sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>On-Time Delivery</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <CurrencyRupee sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Affordable Solutions</h1>
                            </div>
                        </div><div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50  hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <Handshake sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Lond-Term Partnership</h1>
                            </div>
                        </div>
                        <div className='border border-white rounded-xl flex flex-col justify-center items-center gap-1 p-2 bg-black/50 hover:scale-105 duration-500'>
                            <div className='h-full w-25  rounded-full flex justify-center items-center  '>
                                <RocketLaunch sx={ { fontSize: 40 } } />
                            </div>
                            <div>
                                <h1 className='font-medium'>Future Ready</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;