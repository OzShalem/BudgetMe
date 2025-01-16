import { Link } from 'react-router-dom';
import excel from '../assets/Excel.png';

const LandingCF = () => {
    return (
        <div className='lg:flex p-6 lg:p-32 mx-auto'>
            <div className='shadow-lg'>
                <img className='w-full h-full object-cover rounded-lg' src={excel} alt="Cashflow Feature" />
            </div>
            <div className='p-4 lg:p-6 lg:ml-4'>
                <h2 className="font-bold text-3xl text-gray-700">Track Your Cashflow</h2>
                <p className="mt-4 text-md text-gray-600">Our Cashflow feature helps you visualize your monthly income,
                    expenses, and savings in an easy-to-understand format. By organizing your financial data into a clear matrix,
                    you can see how much you're earning, spending, and saving over time. Whether you're planning for a big purchase
                    or just looking to take control of your finances, the Cashflow feature provides the insights you need to make smarter financial decisions.
                </p>
                <h4 className="mt-4 text-lg font-semibold text-gray-700">CTA:</h4>
                <p className="mt-2 text-md text-gray-600">Take control of your finances today!
                    Explore our Cashflow feature and start building
                    your path to financial freedom.</p>
                <Link to='/planner' className='inline-flex mt-4 p-3 bg-green-500 hover:bg-green-700 text-green-50 rounded-lg 
                shadow-md transition-colors duration-300'>Get Your Cashflow</Link>
            </div>
        </div>
    )
}

export default LandingCF