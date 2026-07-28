import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Route ()
{
    return (
        <div className='bg-slate-950 text-slate-100'>
            <Navbar />
            <main className='pt-16 sm:pt-20'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Route;