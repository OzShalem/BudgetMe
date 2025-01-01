import { useState } from "react";
import budgetplanner from "../assets/budgetplanner.png";
import BudgetPlannerAI from "../gpt";
import BudgetPlannerDisplay from "./BudgetPlannerDisplay";
import Cashflow from "./Cashflow";

// var plannerAI = new BudgetPlannerAI();


const BudgetPlanner = () => {
    const [step, setStep] = useState<number>(1);

    // Form data state
    const [formData, setFormData] = useState({
        salary: "",
        currency: "",
        spendings: "",
        living: "renting",
        goal: "",
        target: "",
        timeline: "",
        job: "full-time",
        preferences: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // await plannerAI.generateBudgetPlan(formData);
    };

    //Cashflow
    const mockResponse = {
        savingsPlan: {
            goal: 10000,
            months: 24,
            monthly_savings: 416.67,
        },
        monthlyExpenses: 2500,
        income: 4000,
    };


    // Handle navigation
    const nextStep = (): void => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = (): void => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <>
            <div className="container flex flex-col-reverse md:flex-row items-center justify-center mx-auto py-12 px-6 gap-8 gap-x-14">

                <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full min-w-[370px] min-h-[600px] sm:w-[500px] flex flex-col">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your Budget Plan</h1>


                    <div className="flex justify-between mb-6 text-gray-700">
                        <span className={step === 1 ? "font-bold" : "text-gray-500"}>Step 1</span>
                        <span className={step === 2 ? "font-bold" : "text-gray-500"}>Step 2</span>
                        <span className={step === 3 ? "font-bold" : "text-gray-500"}>Step 3</span>
                    </div>


                    <form className="space-y-6" onSubmit={handleSubmit}>

                        {step === 1 && (
                            <>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="number"
                                        id="salary"
                                        name="salary"
                                        value={formData.salary}
                                        onChange={handleChange}
                                        className="w-2/3 p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none placeholder-gray-500"
                                        placeholder="Enter your salary"
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="currency"
                                        name="currency"
                                        value={formData.currency}
                                        onChange={handleChange}
                                        className="w-1/4 p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none placeholder-gray-500"
                                        placeholder="Currency"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="spendings"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Monthly Spendings
                                    </label>
                                    <input
                                        type="number"
                                        id="spendings"
                                        name="spendings"
                                        value={formData.spendings}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none placeholder-gray-500"
                                        placeholder="Enter your spendings"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="living"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Living Situation
                                    </label>
                                    <select
                                        id="living"
                                        name="living"
                                        value={formData.living}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none"
                                    >
                                        <option value="renting">Renting</option>
                                        <option value="owning">Own a Home</option>
                                        <option value="family">Living with Family</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="goal"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        What Are You Saving For?
                                    </label>
                                    <textarea
                                        id="goal"
                                        name="goal"
                                        value={formData.goal}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none placeholder-gray-500"
                                        placeholder="e.g., vacation, car, emergency fund"
                                    ></textarea>
                                </div>
                            </>
                        )}


                        {step === 2 && (
                            <>
                                <div>
                                    <label
                                        htmlFor="target"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Desired Savings Amount
                                    </label>
                                    <input
                                        type="number"
                                        id="target"
                                        name="target"
                                        value={formData.target}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none placeholder-gray-500"
                                        placeholder="Enter your target amount"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="timeline"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Target Timeline (Months)
                                    </label>
                                    <input
                                        type="number"
                                        id="timeline"
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none placeholder-gray-500"
                                        placeholder="e.g., 12 months"
                                        required
                                    />
                                </div>
                            </>
                        )}


                        {step === 3 && (
                            <>
                                <div>
                                    <label
                                        htmlFor="job"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Job Type
                                    </label>
                                    <select
                                        id="job"
                                        name="job"
                                        value={formData.job}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none"
                                    >
                                        <option value="full-time">Full-Time</option>
                                        <option value="part-time">Part-Time</option>
                                        <option value="self-employed">Self-Employed</option>
                                        <option value="unemployed">Unemployed</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="preferences"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Additional Comments or Preferences
                                    </label>
                                    <textarea
                                        id="preferences"
                                        name="preferences"
                                        value={formData.preferences}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none placeholder-gray-500"
                                        placeholder="Add any specific notes or comments"
                                    ></textarea>
                                </div>
                            </>
                        )}


                        <div className="flex justify-between mt-8">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition"
                                >
                                    Back
                                </button>
                            )}
                            {step < 3 && (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition"
                                >
                                    Next
                                </button>
                            )}
                            {step === 3 && (
                                <button
                                    type="submit"
                                    className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition"
                                >
                                    Generate My Plan
                                </button>
                            )}
                        </div>
                    </form>
                </div>


                <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[660px]">
                    <img
                        src={budgetplanner}
                        alt="Budget Planner"
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <BudgetPlannerDisplay />
            <Cashflow
                savingsPlan={mockResponse.savingsPlan}
                monthlyExpenses={mockResponse.monthlyExpenses}
                income={mockResponse.income}
            />
        </>
    );
};

export default BudgetPlanner;