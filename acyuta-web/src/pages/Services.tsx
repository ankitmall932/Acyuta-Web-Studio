import { NavLink } from 'react-router-dom';
function Services ()
{
    const card: { title: string; description: string; image: string; }[] = [
        {
            title: "Website Development",
            description: "We create responsive and visually appealing websites that effectively represent your brand and engage your audience.",
            image: '/card1.png'
        },
        {
            title: 'E-commerce Development',
            description: 'We build secure and scalable e-commerce platforms that provide seamless shopping experiences for your customers.',
            image: '/card2.png'
        },
        {
            title: 'UI/UX Design',
            description: 'Our team designs intuitive and user-friendly interfaces that enhance user experience and drive conversions.',
            image: '/card3.png'
        },
        {
            title: 'Website Redesign',
            description: 'We refresh and modernize existing websites to improve their performance, user experience, and visual appeal.',
            image: '/card4.png'
        },
        {
            title: 'Website Maintenance & Support',
            description: 'We offer ongoing maintenance and support services to ensure your website remains secure, up-to-date, and fully functional.',
            image: '/card5.png'
        },
        {
            title: 'Custom Web Solutions',
            description: 'We develop custom web applications tailored to your specific business needs, providing unique solutions that drive growth.',
            image: '/card6.png'
        }
    ];

    const processSteps = [
        {
            title: 'Understand',
            description: 'We start by learning your business goals, audience, and technical needs so the project is built for real impact.'
        },
        {
            title: 'Plan & Design',
            description: 'Our team creates a strategic roadmap and modern visuals that align with your brand and deliver an intuitive experience.'
        },
        {
            title: 'Develop',
            description: 'We bring the design to life with clean code, fast performance, and responsive layouts across devices.'
        },
        {
            title: 'Review & Refine',
            description: 'We test, polish, and improve every detail to ensure the final product is reliable, usable, and on-brand.'
        },
        {
            title: 'Launch',
            description: 'We deploy your website or app with careful setup and smooth delivery so your audience can engage immediately.'
        },
        {
            title: 'Support',
            description: 'After launch, we stay available for updates, maintenance, and continued growth as your business evolves.'
        }
    ];

    return (
        <div className="sm:px-10 px-4 sm:py-20 py-12 min-h-screen w-full overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
            <div className='mx-auto max-w-300 text-center'>
                <p className='text-sm uppercase tracking-[0.32em] text-amber-400/80 mb-4'>Services</p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Solutions That Empower Your Business</h1>
                <p className="mx-auto max-w-2xl text-slate-300 leading-relaxed">From business websites to advanced web applications, we deliver digital solutions tailored to your goals with modern design and performance.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 my-12">
                { card.map( ( item, index ) => (
                    <div
                        key={ index }
                        className="group overflow-hidden rounded-4xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-2 hover:border-amber-400/30 hover:bg-slate-900"
                    >
                        <div className='grid sm:grid-cols-[1.1fr_0.9fr] gap-6 items-center'>
                            <div className='space-y-4'>
                                <div className='inline-flex items-center justify-center rounded-3xl bg-linear-to-r from-orange-500 to-amber-400 p-4 text-slate-950 shadow-lg shadow-orange-500/20'>
                                    <span className='text-lg font-semibold'>0{ index + 1 }</span>
                                </div>
                                <h2 className="text-2xl font-semibold">{ item.title }</h2>
                                <p className="text-slate-300 leading-relaxed">{ item.description }</p>
                            </div>
                            <div className='flex justify-center items-center rounded-3xl bg-slate-950/70 p-4'>
                                <img
                                    src={ item.image }
                                    alt={ item.title }
                                    className="max-w-45 w-full h-auto object-contain rounded-[1.2rem]"
                                />
                            </div>
                        </div>
                    </div>
                ) ) }
            </div>
            <section className='mx-auto max-w-300 rounded-4xl border border-white/10 bg-slate-900/80 p-6 sm:p-10 shadow-2xl shadow-slate-950/30 mt-10 overflow-hidden'>
                <div className='text-center mb-8 sm:mb-10'>
                    <p className='text-sm uppercase tracking-[0.32em] text-amber-400/80 mb-3'>Development Process</p>
                    <h2 className='text-3xl sm:text-4xl font-bold'>Our 6-Step Project Workflow</h2>
                </div>
                <div className='relative'>
                    <div className='hidden lg:block absolute left-6 top-12 bottom-12 w-1 bg-amber-400/20' />
                    <div className='hidden lg:block absolute left-6 top-12 bottom-12 w-1 bg-linear-to-b from-amber-400/40 via-transparent to-amber-400/40 blur-sm' />
                    <div className='space-y-8 lg:pl-20'>
                        { processSteps.map( ( step, idx ) => (
                            <div key={ step.title } className='grid gap-4 overflow-hidden rounded-4xl border border-white/10 bg-slate-950/95 p-6 sm:p-8 shadow-2xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 lg:grid-cols-[56px_minmax(0,1fr)] lg:items-start'>
                                <div className='flex h-14 w-14 items-center justify-center rounded-full border-2 border-amber-400 bg-slate-950 text-amber-300 font-bold shadow-xl'>
                                    { idx + 1 }
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold mb-3 text-slate-100'>{ step.title }</h3>
                                    <p className='text-slate-300 text-sm leading-relaxed'>{ step.description }</p>
                                </div>
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>
            <div className='mx-auto max-w-300 rounded-4xl border border-white/10 bg-slate-900/80 p-10 mt-10 shadow-2xl shadow-slate-950/30'>
                <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-bold mb-3'>Looking for a custom solution?</h2>
                        <p className='text-slate-300 leading-relaxed max-w-2xl'>Whether you need a dynamic e-commerce site, a modern landing page, or a full web app, our team can build it with speed, security, and style.</p>
                    </div>
                    <NavLink
                        to='/contact'
                        className='inline-flex items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl'
                    >
                        Get Started
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default Services;
