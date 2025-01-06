import { Star } from 'lucide-react'

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Small Business Owner',
        content: 'BudgetMe has transformed how I manage my business finances. The AI-driven insights have helped me cut costs and increase profits.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Graduate Student',
        content: 'As a student on a tight budget, BudgetMe has been a lifesaver. Its helped me stay on track with my spending and even start saving.',
        rating: 5,
    },
    {
        name: 'Emily Rodriguez',
        role: 'Marketing Manager',
        content: 'I love how BudgetMe adapts to my changing financial situation. Its like having a personal financial advisor in my pocket.',
        rating: 4,
    },
]

export default function Testimonials() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">{testimonial.content}</p>
                            <div className="font-medium">{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

