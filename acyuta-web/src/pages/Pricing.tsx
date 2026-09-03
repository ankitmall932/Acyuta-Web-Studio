import { ArrowForward, Campaign, CheckCircle, Info, Language } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

function Pricing ()
{
    const websitePlans = [
        {
            label: '01',
            title: 'Basic Website',
            price: '₹2,999',
            description: 'A clean starting point for individuals, local services, and small businesses.',
            features: [ 'Responsive website layout', 'Essential business sections', 'Contact and enquiry setup', 'Basic mobile optimization' ]
        },
        {
            label: '02',
            title: 'Business Website',
            price: '₹5,999',
            description: 'For growing businesses that need a stronger and more enquiry-focused online presence.',
            features: [ 'Custom business sections', 'Responsive design', 'Enquiry-focused layout', 'Basic SEO setup' ]
        },
        {
            label: '03',
            title: 'Professional Website',
            price: '₹9,999',
            description: 'A polished, growth-ready website for brands that want to look established online.',
            features: [ 'Everything in Business', 'Custom UI and brand styling', 'SEO-ready page structure', 'Social media integration', 'Launch support and handover' ],
            featured: true
        },
        {
            label: '04',
            title: 'Custom Web Solution',
            price: 'On quote',
            description: 'For e-commerce, dashboards, portals, and web applications with custom requirements.',
            features: [ 'Requirement-based planning', 'Custom features and integrations', 'Scalable technical foundation', 'Dedicated project estimate' ]
        }
    ];

    const socialPlans = [
        { title: 'Social Starter', price: 'From ₹3,999 / month', description: 'A starting point for a business that needs a consistent, professional presence.', features: [ '8 branded posts per month', 'Captions and hashtag direction', 'Instagram and Facebook publishing', 'Monthly content calendar' ] },
        { title: 'Social Growth', price: 'From ₹7,999 / month', description: 'A starting point for brands ready to publish more often and learn from performance.', features: [ '12 branded posts per month', '4 short-form video or reel concepts', 'Instagram, Facebook, and WhatsApp support', 'Monthly performance summary' ] },
        { title: 'Campaign Custom', price: 'Quote on demand', description: 'For launches, offers, events, ads, and high-volume content requirements.', features: [ 'Campaign strategy', 'Creative direction and ad assets', 'Custom publishing schedule', 'Budget and deliverables planned with you' ] }
    ];

    const terms = [
        'Prices are starting prices and may change based on pages, features, content, integrations, and project scope.',
        'Domain, hosting, paid plugins, stock assets, advertising budget, and third-party subscriptions are billed separately when required.',
        'Client provides final logo, business information, images, and content unless content creation is included in the selected package.',
        'Project timeline begins after the required content and advance payment are received. Delayed approvals may change the delivery date.',
        'Two reasonable revision rounds are included in website packages. Additional revisions or new requirements may need a revised quote.',
        'A 50% advance confirms the booking. The remaining balance is due before final launch or handover.',
        'Social media pricing depends on platform count, posting frequency, design complexity, video work, ad campaigns, and approval speed.',
        'Monthly social media work renews each month. Unused posts or services do not automatically carry forward unless agreed in writing.'
    ];

    return (
        <div className='min-h-screen overflow-hidden bg-[#080d16] text-slate-100'>
            <section className='border-b border-white/10'><div className='mx-auto max-w-350 px-6 py-24 sm:px-10 lg:px-16'><p className='text-sm font-semibold uppercase tracking-[0.32em] text-amber-300'>Pricing / Acyuta Digital Agency</p><h1 className='mt-5 max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-7xl'>Clear starting points. Flexible scope.</h1><p className='mt-7 max-w-2xl text-lg leading-8 text-slate-400'>Choose a website foundation, add the right level of social support, and we will shape the final plan around what your business actually needs.</p></div></section>

            <section className='mx-auto max-w-350 px-6 py-24 sm:px-10 lg:px-16'>
                <div className='flex flex-col gap-4 border-b border-amber-400/30 pb-8 sm:flex-row sm:items-end sm:justify-between'><div><p className='text-sm font-semibold uppercase tracking-[0.3em] text-amber-300'>01 / Website pricing</p><h2 className='mt-4 text-4xl font-bold text-white sm:text-5xl'>A website that works as hard as you do.</h2></div><p className='max-w-md text-sm leading-7 text-slate-400'>These packages follow the template's core structure. We confirm the final quote after understanding your pages, features, content, and integrations.</p></div>
                <div className='mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
                    { websitePlans.map( ( plan ) => <div key={ plan.title } className={ `hover-card relative border p-7 sm:p-9 ${ plan.featured ? 'border-amber-300 bg-amber-300/8' : 'border-white/10 bg-white/3' }` }>{ plan.featured && <span className='absolute right-6 top-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950'>RECOMMENDED</span> }<span className='text-5xl font-black text-amber-300'>{ plan.label }</span><h3 className='mt-10 text-3xl font-semibold text-white'>{ plan.title }</h3><p className='mt-3 max-w-lg leading-7 text-slate-400'>{ plan.description }</p><p className='mt-8 text-4xl font-bold text-white'>{ plan.price }<span className='ml-2 text-xs font-normal text-slate-500'>starting from</span></p><ul className='mt-8 space-y-3 border-t border-white/10 pt-6'>{ plan.features.map( ( feature ) => <li key={ feature } className='flex gap-3 text-sm text-slate-300'><CheckCircle className='text-amber-300' fontSize='small' />{ feature }</li> ) }</ul><NavLink to='/contact' className='mt-9 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300'>Discuss this website <ArrowForward className='ml-2' fontSize='small' /></NavLink></div> ) }
                </div>
                <div className='hover-card mt-8 flex gap-3 border border-amber-300/20 bg-amber-300/5 p-5 text-sm leading-7 text-slate-300'><Info className='shrink-0 text-amber-300' />Domain and hosting charges are not included in the starting prices. We can help you select and set them up according to your requirement.</div>
            </section>

            <section className='border-y border-cyan-300/20 bg-[#071b27]'><div className='mx-auto max-w-350 px-6 py-24 sm:px-10 lg:px-16'><div className='flex flex-col gap-4 border-b border-cyan-300/30 pb-8 sm:flex-row sm:items-end sm:justify-between'><div><p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>02 / Social media pricing</p><h2 className='mt-4 text-4xl font-bold text-white sm:text-5xl'>Content that adapts to your demand.</h2></div><p className='max-w-md text-sm leading-7 text-slate-400'>Social media is not one fixed-size service. Your monthly price depends on how many platforms, posts, reels, campaigns, and approvals your brand needs.</p></div><div className='hover-card mt-8 flex gap-3 border border-cyan-300/40 bg-cyan-300/10 p-5 text-sm leading-7 text-cyan-100'><Info className='shrink-0 text-cyan-300' />The prices shown are starting prices only, not fixed final prices. If your content volume, platform count, reel/video work, ad campaigns, or customer demand increases, the monthly price will be revised accordingly after discussion.</div><div className='mt-12 grid gap-5 lg:grid-cols-3'>{ socialPlans.map( ( plan ) => <div key={ plan.title } className='hover-card social-hover-card border border-cyan-300/20 bg-cyan-300/5 p-7'><Campaign className='text-cyan-300' /><h3 className='mt-8 text-2xl font-semibold text-white'>{ plan.title }</h3><p className='mt-3 min-h-14 text-sm leading-7 text-slate-400'>{ plan.description }</p><p className='mt-7 text-2xl font-bold text-cyan-200'>{ plan.price }</p><p className='mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/80'>Final price based on demand</p><ul className='mt-7 space-y-3 border-t border-cyan-300/20 pt-6'>{ plan.features.map( ( feature ) => <li key={ feature } className='flex gap-3 text-sm text-slate-300'><CheckCircle className='text-cyan-300' fontSize='small' />{ feature }</li> ) }</ul></div> ) }</div><div className='hover-card social-hover-card mt-10 border border-cyan-300/20 p-6 sm:p-8'><div className='flex items-center gap-3'><Language className='text-cyan-300' /><h3 className='text-xl font-semibold text-white'>How we calculate a custom social quote</h3></div><p className='mt-4 leading-8 text-slate-400'>We first discuss your goal, audience, platforms, posting frequency, and content mix. Then we prepare a clear monthly plan covering the number of static designs, reels or videos, captions, publishing support, community replies, and ad campaign work. You pay for the work you actually need, not an oversized package. Any increase in demand or deliverables is discussed and approved before the next billing cycle.</p><NavLink to='/contact' className='mt-7 inline-flex items-center rounded-full border border-cyan-300/50 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#071b27]'>Request a social media quote <ArrowForward className='ml-2' fontSize='small' /></NavLink></div></div></section>

            <section className='mx-auto max-w-350 px-6 py-24 sm:px-10 lg:px-16'><div className='max-w-3xl'><p className='text-sm font-semibold uppercase tracking-[0.3em] text-amber-300'>03 / Terms and conditions</p><h2 className='mt-4 text-4xl font-bold text-white sm:text-5xl'>Everything clear before we begin.</h2><p className='mt-5 leading-8 text-slate-400'>These general terms keep scope, timelines, payments, and approvals transparent for both sides.</p></div><div className='mt-10 grid gap-4 sm:grid-cols-2'>{ terms.map( ( term, index ) => <div key={ term } className='hover-card flex gap-4 border border-white/10 bg-white/3 p-6'><span className='text-xl font-bold text-amber-300'>0{ index + 1 }</span><p className='text-sm leading-7 text-slate-300'>{ term }</p></div> ) }</div><div className='mt-16 flex flex-col gap-5 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between'><div><p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Ready to plan?</p><h2 className='mt-3 text-3xl font-bold text-white'>Let's discuss the right scope for you.</h2></div><NavLink to='/contact' className='inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300'>Start a conversation <ArrowForward className='ml-2' fontSize='small' /></NavLink></div></section>
        </div>
    );
}

export default Pricing;