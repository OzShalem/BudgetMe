import { Star } from 'lucide-react'

const reviews = [
    {
        name: "Sarah Johnson",
        role: "Small Business Owner",
        content: "BudgetMe has transformed how I manage my business finances. The AI-driven insights have helped me cut costs and increase profits.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Graduate Student",
        content: "As a student on a tight budget, BudgetMe has been a lifesaver. It's helped me stay on track with my spending and even start saving.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Manager",
        content: "I love how BudgetMe adapts to my changing financial situation. It's like having a personal financial advisor in my pocket.",
        rating: 4,
    },
    {
        name: "David Thompson",
        role: "Freelance Designer",
        content: "The customizable categories in BudgetMe have made it easy for me to track my irregular income and expenses. Highly recommended for freelancers!",
        rating: 5,
    },
    {
        name: "Lisa Patel",
        role: "Nurse",
        content: "BudgetMe's goal-setting feature helped me save for a down payment on my first home. The visual progress tracker kept me motivated throughout the process.",
        rating: 5,
    },
    {
        name: "John Doe",
        role: "Retiree",
        content: "I was skeptical about using a budgeting app at first, but BudgetMe's user-friendly interface made it easy for me to manage my retirement income and expenses.",
        rating: 4,
    }
]

export default function ReviewsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-center mb-12">What Our Users Say</h1>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {reviews.map((review, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="flex items-center mb-4">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-4">{review.content}</p>
                                    <div className="font-medium">{review.name}</div>
                                    <div className="text-sm text-gray-500">{review.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

