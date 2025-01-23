import FAQ from '../Components/Faq'
import Features from '../Components/Features'
import Hero from '../Components/Hero'
import LandingCF from '../Components/Landingcf'
import Testimonials from '../Components/Testimonials'


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