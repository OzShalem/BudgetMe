'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
    {
        question: 'How secure is BudgetMe?',
        answer: 'BudgetMe uses bank-level encryption to protect your data. We never store your login credentials and use read-only access to your financial information.',
    },
    {
        question: 'Can I cancel my subscription at any time?',
        answer: 'Yes, you can cancel your subscription at any time. If you cancel, youll retain access to your paid features until the end of your billing cycle.',
    },
    {
        question: 'How accurate are the AI-powered insights?',
        answer: 'Our AI analyzes your transaction history and spending patterns to provide highly accurate insights. However, we always recommend reviewing the suggestions and using your judgment.',
    },
    {
        question: 'Is my data shared with third parties?',
        answer: 'No, we do not sell or share your personal data with third parties. Your information is used solely to provide you with the best budgeting experience.',
    },
    {
        question: 'How often is my financial data updated?',
        answer: 'BudgetMe syncs with your connected accounts several times a day to ensure your data is up-to-date. You can also manually refresh your accounts at any time.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4">
                            <button
                                className="flex justify-between items-center w-full text-left"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

