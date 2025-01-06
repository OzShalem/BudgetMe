import { Smartphone, BarChart, Zap, Coins } from 'lucide-react'

const steps = [
    {
        icon: <Smartphone className="h-8 w-8 text-[#00C853]" />,
        title: 'Connect Your Accounts',
        description: 'Securely link your bank accounts and credit cards to get a complete financial picture.',
    },
    {
        icon: <BarChart className="h-8 w-8 text-[#00C853]" />,
        title: 'Analyze Your Spending',
        description: 'Our AI analyzes your transactions and categorizes your spending patterns.',
    },
    {
        icon: <Zap className="h-8 w-8 text-[#00C853]" />,
        title: 'Get Personalized Insights',
        description: 'Receive AI-powered recommendations to optimize your budget and reach your financial goals.',
    },
    {
        icon: <Coins className="h-8 w-8 text-[#00C853]" />,
        title: 'Save and Grow',
        description: 'Track your progress, adjust your budget, and watch your savings grow over time.',
    },
]

export default function HowItWorks() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">How BudgetMe Works</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

