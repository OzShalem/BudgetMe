'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
    { name: 'Housing', value: 35 },
    { name: 'Transportation', value: 15 },
    { name: 'Food', value: 20 },
    { name: 'Utilities', value: 10 },
    { name: 'Insurance', value: 5 },
    { name: 'Healthcare', value: 5 },
    { name: 'Personal', value: 5 },
    { name: 'Other', value: 5 },
]

const COLORS = ['#00C853', '#1E88E5', '#FFC107', '#E53935', '#8E24AA', '#3949AB', '#00ACC1', '#546E7A']

export default function BudgetChart() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Sample Budget Breakdown</h2>
                <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {data.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    )
}

