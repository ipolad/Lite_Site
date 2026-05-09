import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Products } from '@/components/sections/Products'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ValueProps } from '@/components/sections/ValueProps'
import { DemoForm } from '@/components/sections/DemoForm'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Products />
      <HowItWorks />
      <ValueProps />
      <DemoForm />
      <Footer />
    </main>
  )
}
