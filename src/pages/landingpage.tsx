import FAQ from '../components/FAQ'
import Features from '../components/Features'
import Hero from '../components/Hero'
import LandingCF from '../components/landingcf'
import Testimonials from '../components/Testimonials'


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