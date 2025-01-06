import { ArrowRight, PiggyBank } from 'lucide-react'
import budgetplanner from '../assets/budgetplanner.png'

export default function BudgetHero() {
    return (
        <section className="bg-[#E8F5E9] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">Create Your Smart Budget Plan</h1>
                        <p className="text-xl text-gray-600 mb-6">
                            Take control of your finances with our AI-powered budget planner.
                            Get personalized insights and achieve your financial goals.
                        </p>
                        <a
                            href="#budget-form"
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00C853] text-white font-medium hover:bg-[#00B548] transition-colors"
                        >
                            Start Planning
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <img src={budgetplanner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

