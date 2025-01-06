import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Download, FileText, Lock } from 'lucide-react'

export default function DownloadPage() {
    const [planData, setPlanData] = useState(null)
    const location = useLocation()

    useEffect(() => {
        // In a real application, you would fetch the plan data from an API or state management solution
        // For this example, we'll simulate fetching data from the location state
        const data = location.state?.planData
        if (data) {
            setPlanData(data)
        }
    }, [location])

    const handleDownload = () => {
        // In a real application, this function would generate and download a PDF
        // For this example, we'll just log a message
        console.log('Downloading PDF of budget plan...')
        alert('Your budget plan PDF is being downloaded!')
    }

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <section className="py-16 bg-[#E8F5E9]">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-6">Download Your Budget Plan</h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Your personalized budget plan is ready! Download it now to start your journey towards financial success.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-6">
                                <FileText className="h-16 w-16 text-[#00C853]" />
                            </div>
                            <h2 className="text-2xl font-semibold text-center mb-4">Your Budget Plan Summary</h2>
                            {planData ? (
                                <div className="mb-6">
                                    <p className="text-gray-600 mb-2">Monthly Income: ${planData.salary}</p>
                                    <p className="text-gray-600 mb-2">Monthly Expenses: ${planData.expenses}</p>
                                    <p className="text-gray-600 mb-2">Savings Goal: ${planData.savingsGoal}</p>
                                    <p className="text-gray-600">Timeline: {planData.timeline} months</p>
                                </div>
                            ) : (
                                <p className="text-gray-600 mb-6">No plan data available. Please create a budget plan first.</p>
                            )}
                            <button
                                onClick={handleDownload}
                                className="w-full py-3 px-6 text-white bg-[#00C853] rounded-lg hover:bg-[#00B548] transition-colors flex items-center justify-center"
                                disabled={!planData}
                            >
                                <Download className="h-5 w-5 mr-2" />
                                Download PDF
                            </button>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-600 flex items-center justify-center">
                                <Lock className="h-4 w-4 mr-2" />
                                Your data is secure and will only be used to generate your PDF
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

