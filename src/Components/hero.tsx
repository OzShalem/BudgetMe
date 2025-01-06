import { ArrowRight, BarChart2, PieChart, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            A Smarter Way to Manage Expenses with{' '}
                            <span className="text-[#00C853]">AI</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Get a personalized expense plan based on your life situation, career, and financial status.
                            Let AI guide you to better financial decisions and smarter spending.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/planner"
                                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00C853] text-white font-medium hover:bg-[#00B548] transition-colors"
                            >
                                Create Your Plan
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                to="/tips"
                                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                            >
                                Quick Tips
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Animated Icons */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#E8F5E9] rounded-full blur-3xl opacity-30" />
                        <div className="relative grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="animate-float-slow bg-white p-6 rounded-2xl shadow-lg">
                                    <BarChart2 className="h-8 w-8 text-[#00C853]" />
                                    <p className="mt-2 font-medium">Track Expenses</p>
                                </div>
                                <div className="animate-float-medium bg-white p-6 rounded-2xl shadow-lg">
                                    <PieChart className="h-8 w-8 text-[#00C853]" />
                                    <p className="mt-2 font-medium">Smart Analytics</p>
                                </div>
                            </div>
                            <div className="mt-12 space-y-6">
                                <div className="animate-float-fast bg-white p-6 rounded-2xl shadow-lg">
                                    <Wallet className="h-8 w-8 text-[#00C853]" />
                                    <p className="mt-2 font-medium">Save Money</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

