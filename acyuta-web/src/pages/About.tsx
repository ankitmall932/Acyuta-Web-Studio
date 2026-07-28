function About ()
{
    return (
        <div className='min-h-screen w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-16'>
            <div className='mx-auto max-w-300 px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-12 lg:grid-cols-[0.9fr_0.8fr] items-center'>
                    <div className='space-y-6'>
                        <p className='text-sm uppercase tracking-[0.35em] text-amber-400/80'>About Acyuta</p>
                        <h1 className='text-4xl sm:text-5xl font-bold tracking-tight text-white'>Designing modern websites that grow brands and convert visitors.</h1>
                        <p className='max-w-2xl text-slate-300 leading-relaxed'>Acyuta is a creative web design and development studio focused on building fast, polished digital experiences for startups, small businesses, and brands that want to stand out online.</p>
                        <div className='grid gap-4 sm:grid-cols-2'>
                            <div className='rounded-4xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/20'>
                                <p className='text-sm uppercase tracking-[0.22em] text-amber-300 mb-3'>Mission</p>
                                <p className='text-slate-300 leading-relaxed'>We help businesses tell their story with beautiful design, strong strategy, and reliable web technology.</p>
                            </div>
                            <div className='rounded-4xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/20'>
                                <p className='text-sm uppercase tracking-[0.22em] text-amber-300 mb-3'>Approach</p>
                                <p className='text-slate-300 leading-relaxed'>Every project begins with clear goals, smart planning, and user-first design to create websites that perform and feel premium.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-4xl border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30'>
                        <div className='space-y-4'>
                            <p className='text-sm uppercase tracking-[0.32em] text-amber-400/80'>What we do</p>
                            <div className='grid gap-4'>
                                <div className='rounded-3xl bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border hover:border-amber-400/30'>
                                    <h2 className='text-lg font-semibold text-white'>Web Design</h2>
                                    <p className='mt-2 text-slate-400 leading-relaxed'>Crafting memorable brand experiences with clean layouts, modern visuals, and polished UI details.</p>
                                </div>
                                <div className='rounded-3xl bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border hover:border-amber-400/30'>
                                    <h2 className='text-lg font-semibold text-white'>Web Development</h2>
                                    <p className='mt-2 text-slate-400 leading-relaxed'>Building responsive, fast websites and apps using modern technologies for performance and accessibility.</p>
                                </div>
                                <div className='rounded-3xl bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border hover:border-amber-400/30'>
                                    <h2 className='text-lg font-semibold text-white'>Support & Growth</h2>
                                    <p className='mt-2 text-slate-400 leading-relaxed'>Helping clients maintain their presence, improve conversions, and scale with ongoing support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-16 grid gap-8 lg:grid-cols-2'>
                    <div className='rounded-4xl border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/20'>
                        <p className='text-sm uppercase tracking-[0.32em] text-amber-400/80 mb-4'>Experience</p>
                        <p className='text-3xl font-bold text-white'>3</p>
                        <p className='mt-3 text-slate-400'>Years creating websites, digital products, and brand experiences that users love.</p>
                    </div>
                    <div className='rounded-4xl border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/20'>
                        <p className='text-sm uppercase tracking-[0.32em] text-amber-400/80 mb-4'>Projects</p>
                        <p className='text-3xl font-bold text-white'>5+</p>
                        <p className='mt-3 text-slate-400'>Delivered websites, landing pages, and web apps with care, polish, and strong results.</p>
                    </div>
                </div>

                <div className='mt-16 rounded-4xl border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/30'>
                    <div className='grid gap-8 lg:grid-cols-3'>
                        <div className='space-y-4'>
                            <p className='text-sm uppercase tracking-[0.32em] text-amber-400/80'>Our process</p>
                            <h2 className='text-3xl font-bold text-white'>How we bring ideas to life</h2>
                            <p className='text-slate-400 leading-relaxed'>A clear workflow keeps every project moving smoothly, from first concept to launch and beyond.</p>
                        </div>
                        <div className='lg:col-span-2'>
                            <div className='space-y-6'>
                                { [
                                    { title: 'Discover', description: 'Research your brand, goals, and audience to define the best path forward.' },
                                    { title: 'Design', description: 'Create engaging visuals and layouts that reflect your brand and convert visitors.' },
                                    { title: 'Develop', description: 'Build fast, responsive websites that work beautifully on every device.' },
                                    { title: 'Refine', description: 'Test and polish every detail for usability, performance, and clarity.' },
                                    { title: 'Launch', description: 'Deploy your website with confidence and ensure a smooth go-live experience.' },
                                    { title: 'Support', description: 'Provide ongoing help, updates, and improvements after launch.' }
                                ].map( ( step, index ) => (
                                    <div key={ index } className='rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-inner shadow-slate-950/10'>
                                        <p className='text-sm font-semibold uppercase tracking-[0.24em] text-amber-300'>0{ index + 1 } { step.title }</p>
                                        <p className='mt-3 text-slate-400 leading-relaxed'>{ step.description }</p>
                                    </div>
                                ) ) }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-16 rounded-4xl border border-white/10 bg-linear-to-r from-slate-900 to-slate-950/80 p-10 shadow-2xl shadow-slate-950/40'>
                    <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
                        <div>
                            <p className='text-sm uppercase tracking-[0.32em] text-amber-400/80'>Ready to work together?</p>
                            <h2 className='text-3xl font-bold text-white'>Let’s build something your audience remembers.</h2>
                        </div>
                        <a href='/contact' className='inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl'>Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;