import styles from '../styles/Home.module.css'
import Footer from './Components/Footer'
import LandingDetails from './Components/LandingDetails'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <div className={`flex justify-center items-center  ${styles.container}`}>
    <section className='w-[1520px]'>
      <Navbar /> 
      <LandingDetails />
      <Footer />
    </section>
    </div>
  )
}
