import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderNav from './components/HeaderSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import StatsSection from './components/StatsSection'
import CallToActionSection from './components/CallToActionSection'
import FooterSection from './components/FooterSection.jsx'
import CompanySlider from './components/CompanySliderSection.jsx'
import ServiceSection from './components/ServiceSection.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderNav />
    <HeroSection />
    <AboutSection />
    <CompanySlider /> 
    <FeaturesSection />  
    <StatsSection />     
    <ServiceSection />
    
    <CallToActionSection />
    <FooterSection />
    </>
  )
}

export default App
