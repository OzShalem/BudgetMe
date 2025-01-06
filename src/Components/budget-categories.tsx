import { Home, ShoppingCart, Utensils, Car, Tv, AmbulanceIcon as FirstAid, Briefcase, DollarSign } from 'lucide-react'

const categories = [
    { name: 'Housing', icon: <Home className="h-6 w-6" /> },
    { name: 'Transportation', icon: <Car className="h-6 w-6" /> },
    { name: 'Food', icon: <Utensils className="h-6 w-6" /> },
    { name: 'Utilities', icon: <Tv className="h-6 w-6" /> },
    { name: 'Insurance', icon: <Briefcase className="h-6 w-6" /> },
    { name: 'Healthcare', icon: <FirstAid className="h-6 w-6" /> },
    { name: 'Personal', icon: <ShoppingCart className="h-6 w-6" /> },
    { name: 'Other', icon: <DollarSign className="h-6 w-6" /> },
]

export default function BudgetCategories() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Budget Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <div key={category.name} className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-4">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-medium">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

