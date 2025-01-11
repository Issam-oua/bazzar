import React from 'react'
import Navbar from '../compentes/Navbar';
import { Outlet } from 'react-router-dom';
import CartTab from '../compentes/CartTab';
const Layout = () => {
    return(
    <div className='bg-zinc-200'>
        <main className='w-[1200px] max-w-full m-auto p-5 '>
            <Navbar />
            <Outlet/>
        </main>
        <CartTab/>
    </div>
)
}
export default Layout