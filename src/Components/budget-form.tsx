import React, { ChangeEvent, FormEvent } from "react";
import { DollarSign, ArrowRight, ArrowLeft } from "lucide-react";

// Define the form data structure
export interface FormData {
    salary: string;
    currency: string;
    spendings: string;
    living: string;
    goal: string;
    target: string;
    timeline: string;
    job: string;
    preferences: string;
}

// Define the props for the BudgetForm component
interface BudgetFormProps {
    step: number;
    setStep: (step: number) => void;
    formData: FormData;
    setFormData: (data: Partial<FormData>) => void;
    onSubmit: (data: FormData) => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
    step,
    setStep,
    formData,
    setFormData,
    onSubmit,
}) => {
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            onSubmit(formData);
        }
    };

    return (
        <section id="budget-form" className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-6 py-8 bg-gray-50 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8">Create Your Budget Plan</h2>
                <div className="mb-8 flex justify-between">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`w-1/3 text-center ${s === step ? "text-[#00C853] font-bold" : "text-gray-400"
                                }`}
                        >
                            Step {s}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1 */}
                    {step === 1 && (
                        <>
                            <div>
                                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                                    Monthly Salary
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <DollarSign className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="number"
                                        id="salary"
                                        name="salary"
                                        value={formData.salary || ""}
                                        onChange={handleInputChange}
                                        className="focus:ring-[#00C853] focus:border-[#00C853] block w-full pl-10 pr-12 p-3 sm:text-sm border-gray-300 rounded-md"
                                        placeholder="0.00"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                                    Currency
                                </label>
                                <input
                                    type="text"
                                    id="currency"
                                    name="currency"
                                    value={formData.currency || ""}
                                    onChange={handleInputChange}
                                    className="focus:ring-[#00C853] focus:border-[#00C853] block w-full sm:text-sm border-gray-300 p-3 rounded-md"
                                    placeholder="USD"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="spendings" className="block text-sm font-medium text-gray-700 mb-1">
                                    Monthly Spendings
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <DollarSign className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="number"
                                        id="spendings"
                                        name="spendings"
                                        value={formData.spendings || ""}
                                        onChange={handleInputChange}
                                        className="focus:ring-[#00C853] focus:border-[#00C853] block w-full pl-10 pr-12 sm:text-sm p-3 border-gray-300 rounded-md"
                                        placeholder="0.00"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="living" className="block text-sm font-medium text-gray-700 mb-1">
                                    Living Situation
                                </label>
                                <select
                                    id="living"
                                    name="living"
                                    value={formData.living || ""}
                                    onChange={handleInputChange}
                                    className="focus:ring-[#00C853] focus:border-[#00C853] block w-full sm:text-sm border-gray-300 p-3 rounded-md"
                                    required
                                >
                                    <option value="">Select...</option>
                                    <option value="renting">Renting</option>
                                    <option value="owning">Owning a Home</option>
                                    <option value="family">Living with Family</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                                    Saving Goal
                                </label>
                                <textarea
                                    id="goal"
                                    name="goal"
                                    value={formData.goal || ""}
                                    onChange={handleInputChange}
                                    className="focus:ring-[#00C853] focus:border-[#00C853] block w-full sm:text-sm border-gray-300 p-3 rounded-md"
                                    placeholder="e.g., car, vacation, emergency fund"
                                    required
                                />
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <div>
                                <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">
                                    Desired Savings Amount
                                </label>
                                <input
                                    type="number"
                                    id="target"
                                    name="target"
                                    value={formData.target || ""}
                                    onChange={handleInputChange}
                                    className="focus:ring-[#00C853] focus:border-[#00C853] block w-full sm:text-sm p-3 border-gray-300 rounded-md"
                                    placeholder="Enter your savings target"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                                    Target Timeline (in months)
                                </label>
                                <input
                                    type="number"
                                    id="timeline"
                                    name="timeline"
                                    value={formData.timeline || ""}
                                    onChange={handleInputChange}
                                    className="focus:ring-[#00C853] focus:border-[#00C853] block w-full sm:text-sm p-3 border-gray-300 rounded-md"
                                    placeholder="Enter timeline in months"
                                    required
                                />
                            </div>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <div>
                                <label htmlFor="job" className="block text-sm font-medium text-gray-700 mb-1">
                                    Job Type
                                </label>
                                <select
                                    id="job"
                                    name="job"
                                    value={formData.job || ""}
                                    onChange={handleInputChange}
                                    className="focus:ring-[#00C853] focus:border-[#00C853] block w-full sm:text-sm p-3 border-gray-300 rounded-md"
                                    required
                                >
                                    <option value="">Select...</option>
                                    <option value="full-time">Full-Time</option>
                                    <option value="part-time">Part-Time</option>
                                    <option value="self-employed">Self-Employed</option>
                                    <option value="unemployed">Unemployed</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="preferences" className="block text-sm font-medium text-gray-700 mb-1">
                                    Additional Comments or Preferences
                                </label>
                                <textarea
                                    id="preferences"
                                    name="preferences"
                                    value={formData.preferences || ""}
                                    onChange={handleInputChange}
                                    className="focus:ring-[#00C853] focus:border-[#00C853] block w-full sm:text-sm p-3 border-gray-300 rounded-md"
                                    placeholder="Any additional information you'd like to share..."
                                />
                            </div>
                        </>
                    )}
                    <div className="flex justify-between pt-6">
                        {step > 1 && (
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C853]"
                                onClick={() => setStep(step - 1)}
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                            </button>
                        )}
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#00C853] hover:bg-[#00B548] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C853]"
                        >
                            {step < 3 ? "Next" : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BudgetForm;
