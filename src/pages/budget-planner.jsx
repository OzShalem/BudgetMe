import { useState } from 'react'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import BudgetHero from '../components/budget-hero'
import BudgetForm from '../components/budget-form'
import BudgetOutput from '../components/budget-output'
import Footer from '../components/footer'

// Validation Schema
const BudgetFormSchema = z.object({
    salary: z.number().min(0, "Salary must be a positive number."),
    currency: z.string().min(3, "Currency must be a valid ISO code (e.g., USD, EUR)."),
    spendings: z.number().min(0, "Monthly spendings must be a positive number."),
    living: z.enum(["renting", "owning", "family"], "Choose a valid living situation."),
    goal: z.string().min(5, "Please provide a clear saving goal."),
    target: z.number().positive("Savings target must be a positive number."),
    timeline: z.number().min(1, "Timeline must be at least 1 month."),
    job: z.enum(["full-time", "part-time", "self-employed", "unemployed"], "Select a valid job type."),
    preferences: z.string().optional(),
})

export default function BudgetPlanner() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({})
    const [validatedData, setValidatedData] = useState(null)
    const navigate = useNavigate()

    const handleFormSubmit = (data) => {
        try {

            // const validated = BudgetFormSchema.parse(mapped)
            setValidatedData(data)
            setStep(4) // Move to results page
        } catch (error) {
            console.error("Validation Error:", error.errors)
            // Handle validation errors (e.g., display error messages)
        }
    }

    const handleDownload = (data) => {
        navigate('/download', { state: { planData: data } })
    }

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <BudgetHero />
                {step < 4 && (
                    <BudgetForm
                        step={step}
                        setStep={setStep}
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={handleFormSubmit}
                    />
                )}
                {step === 4 && validatedData && (
                    <BudgetOutput data={validatedData} onDownload={handleDownload} />
                )}
            </main>
        </div>
    )
}

