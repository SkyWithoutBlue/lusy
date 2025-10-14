import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Footer from '@/components/Footer/Footer'

export default function Home () {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}
