import { useRef } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

function Contact ()
{
    const form = useRef<HTMLFormElement | null>( null );

    const sendEmail = ( e: FormEvent<HTMLFormElement> ) =>
    {
        e.preventDefault();

        if ( !form.current )
        {
            return;
        }

        emailjs
            .sendForm(
                'service_koyucwb',
                'template_jaeyyxl',
                form.current,
                '43qYR7Purru0o53B5'
            )
            .then(
                () =>
                {
                    alert( 'Message sent successfully 😼' );
                    form.current?.reset();
                },
                ( error: { text?: string; } ) =>
                {
                    console.log( error.text );
                    alert( 'Failed to send message' );
                }
            );
    };

    return (
        <div className='min-h-screen w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-16'>
            <div className='mx-auto max-w-300 px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center'>
                    <div className='space-y-6'>
                        <p className='text-sm uppercase tracking-[0.3em] text-amber-400/80'>Get in Touch</p>
                        <h1 className='text-4xl sm:text-5xl font-bold tracking-tight text-white'>Talk to Acyuta and start your next digital project.</h1>
                        <p className='max-w-2xl text-slate-300 leading-relaxed'>Whether you need a brand new website, a web app, or ongoing support, we are ready to help craft a solution that fits your business goals.</p>
                        <div className='grid gap-4 sm:grid-cols-2'>
                            <div className='rounded-4xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30'>
                                <p className='text-sm text-amber-300 uppercase tracking-[0.22em] mb-3'>Email</p>
                                <p className='text-lg text-white font-semibold'>acyutawebstudio@gmail.com</p>
                                <p className='mt-3 text-slate-400 text-sm'>Fast replies, project estimates, and partnership details.</p>
                            </div>
                            <div className='rounded-4xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30'>
                                <p className='text-sm text-amber-300 uppercase tracking-[0.22em] mb-3'>Phone</p>
                                <p className='text-lg text-white font-semibold'>+91 93367 27772</p>
                                <p className='mt-3 text-slate-400 text-sm'>Available Monday to Saturday, 10am to 7pm.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-4xl border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30'>
                        <div className='mb-8'>
                            <p className='text-sm uppercase tracking-[0.3em] text-amber-400/80 mb-2'>Contact form</p>
                            <h2 className='text-2xl font-bold text-white'>Send us a message</h2>
                        </div>
                        <form ref={ form } onSubmit={ sendEmail } className='space-y-5'>
                            <div className='grid gap-4 sm:grid-cols-2'>
                                <label className='block'>
                                    <span className='text-sm text-slate-300'>Full name</span>
                                    <input name='user_name' type='text' placeholder='Your name' required className='mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20' />
                                </label>
                                <label className='block'>
                                    <span className='text-sm text-slate-300'>Email address</span>
                                    <input required name='user_email' type='email' placeholder='you@example.com' className='mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20' />
                                </label>
                            </div>
                            <label className='block'>
                                <span className='text-sm text-slate-300'>Company or project</span>
                                <input required name='project_title' type='text' placeholder='Brief project title' className='mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20' />
                            </label>
                            <label className='block'>
                                <span className='text-sm text-slate-300'>How can we help?</span>
                                <textarea required name='message' rows={ 5 } placeholder='Describe your project, goals, or questions...' className='mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20' />
                            </label>
                            <button type='submit' className='inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl'>Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;