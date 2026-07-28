import { Moving, ArrowForward, WorkspacePremium, Group, AccessTime, SignalCellularAlt, ShieldOutlined, Computer, Speed, PhoneAndroid, Search, VerifiedUser, Timer, Place, StackedLineChart, HourglassBottom, CurrencyRupee, Handshake, RocketLaunch } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { orange } from '@mui/material/colors';
function Home ()
{
    return (
        <>
            <div className="sm:px-10 px-4 sm:pt-20 pt-10 min-h-screen w-full bg-[url('/bg5.png')] bg-cover bg-center text-slate-100">
                <div className="mx-auto max-w-350 rounded-4xl border border-white/10 bg-slate-950/85 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 p-8 sm:p-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-flex items-center gap-2 rounded-full bg-orange-400/15 px-4 py-2 text-sm font-semibold text-orange-200 tracking-[0.18em]">
                                WELCOME TO ACYUTA WEB STUDIO
                            </span>
                            <div className="space-y-3">
                                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">We Build Websites</h1>
                                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">That Help Businesses</h1>
                                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-orange-300">
                                    Grow <Moving sx={ { fontSize: 50, color: orange[ 500 ] } } />
                                </h1>
                            </div>
                            <p className="max-w-xl text-slate-300/90 leading-relaxed text-sm sm:text-base">
                                We create modern, responsive, and high-performance websites that help you attract more customers and grow your brand online.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <NavLink
                                    to='/contact'
                                    className='inline-flex items-center justify-center rounded-3xl bg-linear-to-r from-orange-500 to-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl'
                                >
                                    Contact Us <ArrowForward className='ml-2' />
                                </NavLink>
                                <NavLink
                                    to='/services'
                                    className='inline-flex items-center justify-center rounded-3xl border border-white/20 bg-slate-900/90 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:border-orange-400/40'
                                >
                                    Services <ArrowForward className='ml-2' />
                                </NavLink>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="rounded-4xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-slate-900/40">
                                <img
                                    src="/HomeImage.png"
                                    alt="home Image"
                                    className="h-full w-full max-w-130 rounded-3xl object-cover shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-950 text-slate-100 sm:px-10 px-4 py-16'>
                <div className='mx-auto max-w-300 space-y-10'>
                    <section className='rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/50'>
                        <h2 className='text-4xl font-bold text-center text-slate-100 mb-8'>Key Features</h2>
                        <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6'>
                            { [ {
                                icon: <WorkspacePremium sx={ { fontSize: 44 } } />,
                                title: 'Professional Online Identity',
                                description: 'Build a strong and professional image for your business.'
                            }, {
                                icon: <Group sx={ { fontSize: 44 } } />,
                                title: 'More Customer Enquiries',
                                description: 'Get more calls and messages from interested customers.'
                            }, {
                                icon: <AccessTime sx={ { fontSize: 44 } } />,
                                title: '24/7 Availability',
                                description: 'Your business information is available anytime, anywhere.'
                            }, {
                                icon: <SignalCellularAlt sx={ { fontSize: 44 } } />,
                                title: 'Business Growth',
                                description: 'Reach more people and convert visitors into customers.'
                            }, {
                                icon: <ShieldOutlined sx={ { fontSize: 44 } } />,
                                title: 'Trust & Credibility',
                                description: 'Customers trust businesses that look professional online.'
                            } ].map( ( item, idx ) => (
                                <div key={ idx } className='group rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:-translate-y-2 hover:bg-linear-to-br hover:from-orange-500/20 hover:via-slate-950/70 hover:to-slate-950 shadow-lg shadow-slate-950/20'>
                                    <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/15 text-orange-300 transition duration-300 group-hover:bg-orange-500/25'>
                                        { item.icon }
                                    </div>
                                    <h3 className='text-xl font-semibold mb-2'>{ item.title }</h3>
                                    <p className='text-slate-300/90 text-sm leading-relaxed'>{ item.description }</p>
                                </div>
                            ) ) }
                        </div>
                    </section>
                    <section className='rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/50'>
                        <h2 className='text-4xl font-bold text-center text-slate-100 mb-8'>Why Choose Acyuta Web Studio?</h2>
                        <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                            { [ {
                                icon: <Computer sx={ { fontSize: 36 } } />, title: 'Modern Design'
                            }, {
                                icon: <Speed sx={ { fontSize: 36 } } />, title: 'Fast Loading'
                            }, {
                                icon: <PhoneAndroid sx={ { fontSize: 36 } } />, title: 'Mobile Friendly'
                            }, {
                                icon: <Search sx={ { fontSize: 36 } } />, title: 'SEO Ready'
                            }, {
                                icon: <VerifiedUser sx={ { fontSize: 36 } } />, title: 'Secure & Reliable'
                            }, {
                                icon: <Timer sx={ { fontSize: 36 } } />, title: '24/7 Support'
                            }, {
                                icon: <Place sx={ { fontSize: 36 } } />, title: 'Location Ready'
                            }, {
                                icon: <StackedLineChart sx={ { fontSize: 36 } } />, title: 'More Visibility'
                            }, {
                                icon: <HourglassBottom sx={ { fontSize: 36 } } />, title: 'On-Time Delivery'
                            }, {
                                icon: <CurrencyRupee sx={ { fontSize: 36 } } />, title: 'Affordable Pricing'
                            }, {
                                icon: <Handshake sx={ { fontSize: 36 } } />, title: 'Long-Term Partnership'
                            }, {
                                icon: <RocketLaunch sx={ { fontSize: 36 } } />, title: 'Future Ready'
                            } ].map( ( item, idx ) => (
                                <div key={ idx } className='group rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-slate-900/90'>
                                    <div className='mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/80 text-orange-300 transition duration-300 group-hover:bg-orange-500/20'>
                                        { item.icon }
                                    </div>
                                    <h3 className='font-semibold text-sm'>{ item.title }</h3>
                                </div>
                            ) ) }
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
export default Home;
