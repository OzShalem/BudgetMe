import Hero from '../components/hero'
import Features from '../components/features'
import FAQ from '../components/faq'
import HowItWorks from '../components/how-it-works'
import Testimonials from '../components/testimonials'

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <Hero />
                <Features />
                <Testimonials />
                <HowItWorks />
                <FAQ />
            </main>
        </div>
    )
}


