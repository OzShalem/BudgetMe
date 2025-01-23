import { Brain, LineChart, Lock, Smartphone } from 'lucide-react'

const Features = () => {

    const features = [
        {
            icon: <Brain className="h-6 w-6 text-[#00C853]" />,
            title: 'AI-Powered Insights',
            description: 'Get personalized recommendations based on your spending patterns and financial goals.'
        },
        {
            icon: <LineChart className="h-6 w-6 text-[#00C853]" />,
            title: 'Smart Analytics',
            description: 'Visualize your spending habits and track your progress with intuitive charts and graphs.'
        },
        {
            icon: <Smartphone className="h-6 w-6 text-[#00C853]" />,
            title: 'Mobile First',
            description: 'Access your budget anywhere, anytime with our responsive mobile application.'
        },
        {
            icon: <Lock className="h-6 w-6 text-[#00C853]" />,
            title: 'Secure & Private',
            description: 'Your financial data is encrypted and protected with industry-leading security measures.'
        }
    ]
    return (
        <section className='py-16 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold'>Why Choose BudgetMe?</h2>
                    <p className='mt-4 text-lg text-gray-600'>Experience the future of personal finance management</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                    {features.map((feature, index) => (
                        <div key={index} className='p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow'>
                            <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>{feature.icon}</div>
                            <h2 className='text-lg font-semibold mb-2'>{feature.title}</h2>
                            <p className='text-gray-600'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;