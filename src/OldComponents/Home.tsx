import { NavLink } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import suit1 from '../assets/suit1.png';
import suit2 from '../assets/suit2.png';
import suit3 from '../assets/suit3.png';

const Home = () => {
    return (
        <>
            <section className='bg-gray-50'>
                <div className='flex items-center justify-center flex-col-reverse md:flex-row p-4 md:py-32'>
                    <div className='text-center md:text-left md:w-1/2 px-4 md:px-8'>
                        <h1 className='text-4xl font-bold font-[Poppins] text-gray-800 leading-snug'>
                            A Smarter Way to Manage Expenses with <span className='text-green-600'>AI</span>
                        </h1>
                        <p className='mt-4 text-gray-600 text-lg font-sans'>
                            Get a personalized expense plan based on your life situation, career, and financial status. Let AI guide you to better financial decisions and smarter spending.
                        </p>
                        <div className='mt-6 flex flex-row verysmall:items-center verysmall:justify-center md:justify-start'>
                            <NavLink to='/BudgetPlanner' className='bg-green-600 text-white py-3 px-6 rounded-md text-lg hover:bg-green-700 transition duration-300'>
                                Create Your Plan
                            </NavLink>
                            <NavLink to="/Tips" className='ml-4 text-green-600 py-3 px-6 rounded-md text-lg border border-green-600 hover:bg-green-50 transition duration-300'>
                                Quick Tips
                            </NavLink>

                        </div>
                    </div>

                    <div className='flex md:w-1/3 px-4 md:px-8 justify-center'>
                        <img
                            src={heroImage}
                            alt='AI-powered personalized expense planning illustration'
                            className='w-full max-w-xl mx-auto md:mx-0'
                        />
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                    <p className="text-gray-600 mt-2">
                        At BudgetMe, we believe everyone deserves financial clarity. Our mission is to empower individuals to take control of their finances through AI-driven tools and personalized insights.
                    </p>
                </div>
            </section>
            <section className='py-12 bg-white'>
                <div className='container mx-auto text-center'>
                    <h2>Powered By the Best</h2>
                    <p>We’re proud to integrate with leading technologies and platforms.</p>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4 verysmall:gap-y-8 md:gap-x-20 mt-8'>
                        <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png" alt="Openai" />
                        <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Plaid_logo.svg/1200px-Plaid_logo.svg.png" alt="Plaid" />
                        <img className='h-12' src="https://hostbillapp.com/appstore/payment_stripe/images/thumbnails/m_logo.png" alt="stripe" />
                        <img className='h-12' src="https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" alt="aws" />
                        <img className='h-12' src="https://assets.chathamfinancial.com/general-imagery/Chatham-Financial-Logo.png" alt="cf" />
                    </div>
                </div>
            </section>
            <section className="py-6 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Who is BudgetMe Suitable For?</h2>
                    <p className="text-gray-600 mt-2">
                        BudgetMe is designed to help different types of users achieve their financial goals.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-x-16 gap-y-6 mt-8">
                        <div className="shadow-md p-6 rounded-md bg-white">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={suit3}
                                    alt="Individuals Icon"
                                    className="h-12"
                                />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800">Individuals</h4>
                            <p className="text-gray-600 mt-2">
                                For those looking to save more and cut unnecessary expenses with AI-driven insights.
                            </p>
                        </div>

                        <div className="shadow-md p-6 rounded-md bg-white">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={suit1}
                                    alt="Families Icon"
                                    className="h-12"
                                />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800">Families</h4>
                            <p className="text-gray-600 mt-2">
                                Helping families plan budgets for education, home expenses, and future goals.
                            </p>
                        </div>

                        <div className="shadow-md p-6 rounded-md bg-white">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={suit2}
                                    alt="Small Business Icon"
                                    className="h-12"
                                />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800">Small Business Owners</h4>
                            <p className="text-gray-600 mt-2">
                                Supporting entrepreneurs in managing personal and business finances effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-2xl font-bold">BudgetMe</h1>
                    <p className="mt-4 text-gray-400">
                        Helping you make smarter financial decisions, one budget at a time.
                    </p>
                    <p className="mt-2 text-gray-400 italic">
                        "Plan better, save smarter, live happier."
                    </p>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} BudgetMe. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Home