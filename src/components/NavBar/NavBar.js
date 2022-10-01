import React from 'react';
import Link from '../Link/Link';
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes =[
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Products', path: '/products'},
        {id: 3, name: 'Contact', path: '/contact'},
        {id: 4, name: 'Orders', path: '/orders'},
        {id: 5, name: 'About', path: '/about'},
    ];

    return (
        <nav className='bg-purple-200 w-full'>
           <div  onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
             {
                open ?  <XMarkIcon /> : <Bars3Icon />
             }
           
           </div>
    
           <ul className={`bg-purple-200 w-full md:flex justify-center md:static absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
           {
                routes.map(route => <Link 
                    key={route.id}
                    route={route}
                    ></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;