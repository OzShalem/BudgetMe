import { Facebook, Twitter, Instagram, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center">
                            <div className="w-8 h-8 bg-[#00C853] rounded-lg mr-2" />
                            <span className="text-xl font-bold">BudgetMe</span>
                        </Link>
                        <p className="mt-4 text-gray-600 max-w-md">
                            Empowering individuals to take control of their finances through AI-driven tools
                            and personalized insights.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-[#00C853]">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/features" className="text-gray-600 hover:text-[#00C853]">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-gray-600 hover:text-[#00C853]">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-600 hover:text-[#00C853]">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-[#00C853]"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-[#00C853]"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-[#00C853]"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-[#00C853]"
                                aria-label="Github"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-center text-gray-600 text-sm">
                        © {new Date().getFullYear()} BudgetMe. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

