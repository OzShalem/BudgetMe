import { useState } from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

interface NavLinkItem {
    to: string,
    label: string
};

const navLinks: NavLinkItem[] = [
    { to: "/", label: "Home" },
    { to: "/BudgetPlanner", label: "Budget Planner" },
    { to: "/Tips", label: "Tips" },
    { to: "/Reviews", label: "Reviews" },
    { to: "/Download", label: "Download" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <header className="bg-grey shadow-sm flex justify-between">
            <div className="container flex items-center justify-between py-4 md:px-6">
                <div className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-200">
                    <FcMoneyTransfer className="w-6 h-6" />
                    <NavLink to='/' className='text-black-500 font-[poppins] text-2xl font-bold leading-none'>BudgetMe</NavLink>
                </div>

                <nav className="hidden md:flex gap-8 verylarge:pr-32">
                    {navLinks.map(link => (
                        <NavLink key={link.to} to={link.to} className='text-gray-700 font-[Roboto] hover:text-green-600'>{link.label}</NavLink>
                    ))}
                </nav>

                {isOpen && (
                    <nav className="absolute bg-white top-16 left-0 w-full shadow-lg z-10 transition-all duration-300 ease-in-out">
                        {navLinks.map(link => (
                            <NavLink key={link.to} to={link.to} className='block py-2 px-4 hover:bg-gray-100 font-[Roboto]'>{link.label}</NavLink>
                        ))}
                    </nav>
                )}
                <div className="hidden md:block"></div>

            </div>
            <div className="md:hidden p-6 ">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600">
                    <GiHamburgerMenu />
                </button>
            </div>
        </header>
    )
}

export default Navbar