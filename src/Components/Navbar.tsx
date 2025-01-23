import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/icon.png';
import { Menu, X } from 'lucide-react';
import { NavLinkItem } from '../Routes/Routes'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks: NavLinkItem[] = [
        { label: "Home", to: "/" },
        { label: "Planner", to: "/Planner" },
        { label: "Tips", to: "/Tips" },
        { label: "Reviews", to: "/Reviews" },
        { label: "Download", to: "/Download" },
    ];

    return (
        <nav className='sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div className='max-w-7xl mx-auto px-3 sm:px-6 lg-px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* logo */}
                    <NavLink to='/' className='flex items-center'>
                        <img src={logo} alt="" className='w-8 h-8 mr-2' />
                        <span className='text-xl font-bold'>BudgetMe</span>
                    </NavLink>

                    {/* Desktop Links */}
                    <div className='hidden md:flex space-x-8'>
                        {navLinks.map(link => (
                            <NavLink className='text-sm font-medium text-gray-600 hover:text-[#00C853]'
                                key={link.label}
                                to={link.to}>{
                                    link.label}
                            </NavLink>
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
                            {navLinks.map(link => (
                                <NavLink
                                    key={link.label}
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className='text-sm font-medium text-gray-600 hover:text-[#00c853]'
                                >{link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>}
            </div>
        </nav>
    )
}

export default Navbar