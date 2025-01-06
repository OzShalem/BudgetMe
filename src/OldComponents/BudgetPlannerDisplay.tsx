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

interface BudgetPlan {
    recommended_budget: {
        essentials: string;
        savings: string;
        discretionary: string; // Flexible spending, rename if needed
    };
    savings_plan: {
        months: number;
        monthly_savings: number;
    };
    tips: string[];
    action_plan: string;
}

const BudgetPlannerDisplay = ({ budgetPlan: { recommended_budget, tips, action_plan, savings_plan } }: { budgetPlan: BudgetPlan }) => {
    const generateGraphData = () => {
        // if (!savings_plan) return null;

        const { months, monthly_savings } = savings_plan;
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Budget Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Essentials:</span>
                        <span>{recommended_budget.essentials}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Savings:</span>
                        <span>{recommended_budget.savings}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>flexible spending:</span>
                        <span>{recommended_budget.discretionary}</span>
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
                        {tips.map((tip: string, index: number) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-3 bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Action Plan</h2>
                    <p className="text-gray-700">{action_plan}</p>
                </div>
            </div>
        </div>
    );
};

export default BudgetPlannerDisplay;
