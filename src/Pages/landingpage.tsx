import FAQ from '../Components/Faq'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
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
            <Footer />
        </div>
    )
}

export default LandingPage