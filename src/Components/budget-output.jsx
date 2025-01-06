import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Download } from 'react-feather'

export default function BudgetOutput({ data, onDownload }) {
    const [monthlyView, setMonthlyView] = useState(true)

    // Calculate budget breakdown
    const totalIncome = Number(data.salary)
    const totalExpenses = Number(data.spendings)
    const monthlySavings = Number(totalIncome - totalExpenses)
    const monthlyEssentials = Number(totalExpenses) * 0.5 // Assuming 50% of expenses are essentials
    const monthlyDiscretionary = Number(totalExpenses) * 0.3 // Assuming 30% of expenses are discretionary
    const additionalSavings = Number(totalExpenses) * 0.2 // Assuming 20% of expenses can be additional savings

    // Generate chart data
    const generateChartData = () => {
        const months = monthlyView ? 12 : data.timeline
        return Array.from({ length: months }, (_, i) => ({
            name: monthlyView ? `Month ${i + 1}` : `Year ${Math.floor(i / 12) + 1}`,
            Savings: monthlySavings * (i + 1),
            Target: data.target / months * (i + 1),
        }))
    }

    const chartData = generateChartData()

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Your Personalized Budget Plan</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Monthly Budget Breakdown</h3>
                        <ul className="space-y-2">
                            <li>Income: ${totalIncome.toFixed(2)}</li>
                            <li>Essentials: ${monthlyEssentials.toFixed(2)}</li>
                            <li>Discretionary: ${monthlyDiscretionary.toFixed(2)}</li>
                            <li>Savings: ${monthlySavings.toFixed(2)}</li>
                            <li>Additional Potential Savings: ${additionalSavings.toFixed(2)}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Savings Progress</h3>
                        <div className="flex items-center justify-between mb-4">
                            <span>Current Progress: ${(monthlySavings * data.timeline).toFixed(2)}</span>
                            <span>Target: ${Number(data.target).toFixed(2)}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                                className="bg-[#00C853] h-2.5 rounded-full"
                                style={{ width: `${Math.min((monthlySavings * data.timeline / data.target) * 100, 100)}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Savings Projection</h3>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => setMonthlyView(!monthlyView)}
                            className="px-4 py-2 text-sm font-medium text-[#00C853] bg-white border border-[#00C853] rounded-md hover:bg-[#E8F5E9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C853]"
                        >
                            {monthlyView ? 'Show Yearly View' : 'Show Monthly View'}
                        </button>
                    </div>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Savings" fill="#00C853" />
                            <Bar dataKey="Target" fill="#FFA000" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">AI-Powered Recommendations</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Based on your {data.living} situation, consider {data.living === 'renting' ? 'negotiating your rent or finding a more affordable place' : data.living === 'owning' ? 'refinancing your mortgage to lower monthly payments' : 'contributing to household expenses to increase your savings'}.</li>
                        <li>As a {data.job} worker, look into {data.job === 'full-time' ? 'maximizing your employer-sponsored benefits' : data.job === 'part-time' ? 'seeking additional part-time work or freelance opportunities' : data.job === 'self-employed' ? 'setting aside a portion of your income for taxes and retirement' : 'government assistance programs and job training opportunities'}.</li>
                        <li>To reach your savings goal of ${data.target} in {data.timeline} months, try to increase your monthly savings by ${(data.target / data.timeline - monthlySavings).toFixed(2)} through a combination of reducing expenses and increasing income.</li>
                        <li>Consider automating your savings by setting up automatic transfers to a separate savings account each payday.</li>
                    </ul>
                </div>
                <div className="mt-8 text-center">
                    <button
                        onClick={() => onDownload(data)}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#00C853] hover:bg-[#00B548] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C853]"
                    >
                        <Download className="mr-2 h-5 w-5" />
                        Download Budget Plan
                    </button>
                </div>
            </div>
        </section>
    )
}

