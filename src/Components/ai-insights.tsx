import { Brain, TrendingUp, AlertTriangle, ThumbsUp } from 'lucide-react'

const insights = [
    {
        icon: <TrendingUp className="h-6 w-6 text-[#00C853]" />,
        title: 'Spending Trend',
        description: 'Your food expenses have increased by 15% this month. Consider meal planning to reduce costs.',
    },
    {
        icon: <AlertTriangle className="h-6 w-6 text-[#FFA000]" />,
        title: 'Budget Alert',
        description: 'Youre close to exceeding your entertainment budget.Try free local events this weekend.',
    },
    {
        icon: <ThumbsUp className="h-6 w-6 text-[#2196F3]" />,
        title: 'Savings Opportunity',
        description: 'You could save $50/month by switching to a different cell phone plan. Want to explore options?',
    },
]

export default function AIInsights() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">AI-Powered Insights</h2>
                    <p className="text-xl text-gray-600">
                        Our AI analyzes your spending patterns to provide personalized financial advice.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {insights.map((insight, index) => (
                        <div key={index} className="border border-gray-200 p-6 rounded-xl">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center mr-4">
                                    {insight.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{insight.title}</h3>
                            </div>
                            <p className="text-gray-600">{insight.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00C853] text-white font-medium hover:bg-[#00B548] transition-colors">
                        <Brain className="mr-2 h-5 w-5" />
                        Get More AI Insights
                    </button>
                </div>
            </div>
        </section>
    )
}

