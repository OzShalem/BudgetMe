import { useState } from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const defaultGraphData = {
    labels: [],
    datasets: [
        {
            label: "Savings Over Time",
            data: [],
            fill: false,
            borderColor: "#4CAF50",
            backgroundColor: "#4CAF50",
            tension: 0.4,
        },
    ],
};

const BudgetPlannerDisplay = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponse(null);

        setTimeout(() => {
            const mockResponse = {
                recommended_budget: {
                    essentials: "$1500",
                    savings: "$500",
                    discretionary: "$1000",
                },
                tips: [
                    "Track your monthly expenses using an app.",
                    "Reduce eating out to save more.",
                    "Allocate 20% of your salary to savings.",
                ],
                action_plan: "Focus on reducing unnecessary expenses and allocate $500 to savings monthly.",
                savings_plan: {
                    goal: 10000,
                    months: 24,
                    monthly_savings: 416.67,
                },
            };
            setResponse(mockResponse);
            setLoading(false);
        }, 3000);
    };

    const generateGraphData = () => {
        if (!response || !response.savings_plan) return null;

        const { months, monthly_savings } = response.savings_plan;
        const labels = Array.from({ length: months }, (_, i) => `Month ${i + 1}`);
        const data = Array.from({ length: months }, (_, i) => {
            const isHoliday = (i + 1) % 12 === 0;
            const adjustedSavings = isHoliday ? monthly_savings * 0.7 : monthly_savings * 1.2;
            return adjustedSavings * (i + 1);
        });

        return {
            labels,
            datasets: [
                {
                    label: "Savings Over Time",
                    data,
                    fill: false,
                    borderColor: "#4CAF50",
                    backgroundColor: "#4CAF50",
                    tension: 0.4,
                },
            ],
        };
    };

    return (
        <div className="container mx-auto py-12 px-6">
            <form onSubmit={handleSubmit} className="mb-8 flex justify-center">
                <button
                    type="submit"
                    className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition"
                >
                    Generate My Plan
                </button>
            </form>

            {loading && (
                <div className="flex items-center justify-center">
                    <div className="loader animate-spin rounded-full h-12 w-12 border-t-4 border-gray-800"></div>
                </div>
            )}

            {response && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Budget Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Essentials:</span>
                            <span>{response.recommended_budget.essentials}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Savings:</span>
                            <span>{response.recommended_budget.savings}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discretionary:</span>
                            <span>{response.recommended_budget.discretionary}</span>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Savings Plan</h2>
                        {generateGraphData() && (
                            <Line
                                data={generateGraphData() || defaultGraphData}
                                options={{
                                    plugins: {
                                        legend: { display: false },
                                    },
                                    scales: {
                                        x: {
                                            grid: { display: false },
                                            ticks: { color: "#374151" },
                                        },
                                        y: {
                                            grid: { color: "#E5E7EB" },
                                            ticks: { color: "#374151" },
                                        },
                                    },
                                }}
                            />
                        )}
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Tips</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {response.tips.map((tip: string, index: number) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-3 bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Action Plan</h2>
                        <p className="text-gray-700">{response.action_plan}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BudgetPlannerDisplay;
