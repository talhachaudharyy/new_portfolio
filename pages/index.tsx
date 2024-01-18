import Technologies from '@/components/Technologies';
import Hero from '../components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <Hero />
    <Technologies/>
    <Projects />
    <div className='mt-20 mb-20 mx-20'>
      <hr/>
    </div>
    
    <Footer/>
   
    </>
  )
}