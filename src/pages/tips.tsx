import { Lightbulb, DollarSign, PiggyBank, TrendingDown, ShoppingCart } from 'lucide-react'

const tips = [
    {
        icon: <Lightbulb className="h-8 w-8 text-[#00C853]" />,
        title: "Create a Realistic Budget",
        content: "Start by tracking your income and expenses for a month. Use this information to create a budget that reflects your actual spending habits and financial goals."
    },
    {
        icon: <DollarSign className="h-8 w-8 text-[#00C853]" />,
        title: "Use the 50/30/20 Rule",
        content: "Allocate 50% of your income to needs, 30% to wants, and 20% to savings and debt repayment. This simple rule can help you balance your spending and saving."
    },
    {
        icon: <PiggyBank className="h-8 w-8 text-[#00C853]" />,
        title: "Build an Emergency Fund",
        content: "Aim to save 3-6 months of living expenses in an easily accessible account. This fund can help you avoid debt when unexpected expenses arise."
    },
    {
        icon: <TrendingDown className="h-8 w-8 text-[#00C853]" />,
        title: "Cut Unnecessary Expenses",
        content: "Review your subscriptions and recurring expenses. Cancel services you don't use often and look for ways to reduce your regular bills."
    },
    {
        icon: <ShoppingCart className="h-8 w-8 text-[#00C853]" />,
        title: "Practice Mindful Spending",
        content: "Before making a purchase, ask yourself if it's a need or a want. Wait 24 hours before making non-essential purchases to avoid impulse buying."
    }
]

export default function TipsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-center mb-12">Budgeting Tips</h1>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {tips.map((tip, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                    <div className="flex items-center mb-4">
                                        <div className="mr-4">{tip.icon}</div>
                                        <h2 className="text-xl font-semibold">{tip.title}</h2>
                                    </div>
                                    <p className="text-gray-600">{tip.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

