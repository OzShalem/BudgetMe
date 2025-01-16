import FAQ from '../components/faq'
import Features from '../components/features'
import Hero from '../components/hero'
import LandingCF from '../components/landingcf'
import Testimonials from '../components/testimonials'


const LandingPage = () => {
    return (
        <div className='min-h-screen flex flex-col bg-white'>
            <Hero />
            <Features />
            <LandingCF />
            <Testimonials />
            <FAQ />
        </div>
    )
}

export default LandingPage