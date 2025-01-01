import React from "react";

interface SavingsPlan {
    goal: number;
    months: number;
    monthly_savings: number;
}

interface CashflowProps {
    savingsPlan: SavingsPlan;
    monthlyExpenses: number;
    income: number;
}

const Cashflow: React.FC<CashflowProps> = ({ savingsPlan, monthlyExpenses, income }) => {
    // Generate cashflow data based on savingsPlan
    const generateCashflows = () => {
        const cashflows = [];
        for (let i = 1; i <= savingsPlan.months; i++) {
            const savings = savingsPlan.monthly_savings;
            const expenses = monthlyExpenses;
            cashflows.push({
                month: i,
                income,
                expenses,
                savings,
            });
        }
        return cashflows;
    };

    const cashflows = generateCashflows();

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6 flex justify-center">
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex justify-center">Cashflow Overview</h2>
                <div className="overflow-x-auto">
                    <table className="w-[800px] table-auto border-collapse bg-gray-100">
                        <thead>
                            <tr className="bg-gray-200 text-left text-sm text-gray-800 font-bold">
                                <th className="px-4 py-2 border-b border-gray-300">Month</th>
                                <th className="px-4 py-2 border-b border-gray-300">Income</th>
                                <th className="px-4 py-2 border-b border-gray-300">Expenses</th>
                                <th className="px-4 py-2 border-b border-gray-300">Savings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cashflows.map((flow, index) => (
                                <tr
                                    key={index}
                                    className={`text-sm ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                        } text-gray-800`}
                                >
                                    <td className="px-4 py-2 border-b border-gray-300">{flow.month}</td>
                                    <td className="px-4 py-2 border-b border-gray-300">${flow.income.toLocaleString()}</td>
                                    <td className="px-4 py-2 border-b border-gray-300">${flow.expenses.toLocaleString()}</td>
                                    <td className="px-4 py-2 border-b border-gray-300 text-green-600 font-bold">
                                        ${flow.savings.toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cashflow;
