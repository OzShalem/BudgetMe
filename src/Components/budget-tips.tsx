import { Lightbulb, DollarSign, TrendingDown, ShieldCheck } from 'lucide-react'

const tips = [
    {
        icon: <Lightbulb className="h-6 w-6 text-[#00C853]" />,
        title: 'Track Your Spending',
        description: 'Keep a record of all your expenses to identify areas where you can cut back.',
    },
    {
        icon: <DollarSign className="h-6 w-6 text-[#00C853]" />,
        title: 'Set Realistic Goals',
        description: 'Create achievable financial goals to stay motivated and on track.',
    },
    {
        icon: <TrendingDown className="h-6 w-6 text-[#00C853]" />,
        title: 'Reduce Fixed Expenses',
        description: 'Look for ways to lower your recurring bills, such as negotiating rates or finding better deals.',
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-[#00C853]" />,
        title: 'Build an Emergency Fund',
        description: 'Save 3-6 months of living expenses to protect yourself from unexpected financial setbacks.',
    },
]

export default function BudgetTips() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Smart Budgeting Tips</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tips.map((tip, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-4">
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                            <p className="text-gray-600">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

