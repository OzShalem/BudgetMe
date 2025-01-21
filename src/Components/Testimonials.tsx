import malepfp from '../assets/manpfp.png';
import femalepfp1 from '../assets/femalepfp1.png';
import femalepfp2 from '../assets/femalepfp2.png';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            image: femalepfp1,
            name: 'Sarah Johnson',
            role: 'Small Business Owner',
            content: 'BudgetMe has transformed how I manage my business finances. The AI-driven insights have helped me cut costs and increase profits.',
            rating: 5,
        },
        {
            image: malepfp,
            name: 'Michael Chen',
            role: 'Graduate Student',
            content: 'As a student on a tight budget, BudgetMe has been a lifesaver. Its helped me stay on track with my spending and even start saving.',
            rating: 5,
        },
        {
            image: femalepfp2,
            name: 'Emily Rodriguez',
            role: 'Marketing Manager',
            content: 'I love how BudgetMe adapts to my changing financial situation. Its like having a personal financial advisor in my pocket.',
            rating: 4,
        },
    ]

    return (
        <section className='px-12 py-6 bg-gray-50'>
            <div className='text-center my-12'>
                <h2 className="font-bold text-3xl">What Our Users Say</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto gap-x-8'>
                {testimonials.map((review, index) => (
                    <div key={index} className='px-8 py-10 mb-4 lg:py-4 lg:mb-2 shadow-sm hover:shadow-md rounded-md bg-white'>
                        <div className='flex'>
                            <img className='h-20 w-20 rounded-full object-cover mr-2 mb-4' src={review.image} alt="" />
                            <div>
                                <h4 className="font-semibold text-gray-800">{review.name}</h4>
                                <p className="text-gray-500 text-sm mb-2">{review.role}</p>
                                <div className='flex'>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className='text-yellow-400 fill-current h-5 w-5 mb-2' />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-500 text-md">{review.content}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials;