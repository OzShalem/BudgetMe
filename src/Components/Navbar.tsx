import { Link } from 'react-router-dom';
import { NavItems } from '../types';
import { useState } from 'react';
import logo from '../assets/icon.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems: NavItems[] = [
        { name: "Home", path: "/" },
        { name: "Budget Planner", path: "/planner" },
        { name: "Tips", path: "/tips" },
        { name: "Reviews", path: "/reviews" },
        { name: "Download", path: "/download" },
    ];

    return (
        <nav className='sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div className='max-w-7xl mx-auto px-3 sm:px-6 lg-px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* logo */}
                    <Link to='/' className='flex items-center'>
                        <img src={logo} alt="" className='w-8 h-8 mr-2' />
                        <span className='text-xl font-bold'>BudgetMe</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className='hidden md:flex space-x-8'>
                        {navItems.map(item => (
                            <Link className='text-sm font-medium text-gray-600 hover:text-[#00C853]'
                                key={item.name}
                                to={item.path}>{
                                    item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ?
                            <X className='h-6 w-6 text-gray-600'></X> :
                            <Menu className='h-6 w-6 text-gray-600'></Menu>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen &&
                    <div className='md:hidden py-4'>
                        <div className='flex flex-col space-y-4'>
                            {navItems.map(item => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className='text-sm font-medium text-gray-600 hover:text-[#00c853]'
                                >{item.name}</Link>
                            ))}
                        </div>
                    </div>}
            </div>
        </nav>
    )
}

export default Navbar