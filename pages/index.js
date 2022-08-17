import axios from 'axios'
import styles from '../styles/Home.module.css'
import Footer from './Components/Footer'
import LandingDetails from './Components/LandingDetails'
import Navbar from './Components/Navbar'

export default function Home({count,allCars,carMake}) {
  return (
    <div className={`flex justify-center items-center  ${styles.container}`}>
    <section className='w-[1520px]'>
      <Navbar /> 
      <LandingDetails count={count} allCars={allCars} carMake={carMake} />
      <Footer />
    </section>
    </div>
  )
}


// export const getStaticProps = async () => {
export async function getStaticProps(){
  const response = await axios.get("https://autodigg.com/ad-api/cars/list?car_type=Used+car%2CNew+car%2CCertified+pre-owned&page=1&radius=100&year=2011%2C2021&return=count")
  const count = await response.data
  console.log(response.data)

  const allCarsRes = await axios.get("https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100")
  const allCars = await allCarsRes.data
  console.log(allCarsRes.data,"cars")
  
  const allCarsMakeRes = await axios.get("https://autodigg.com/ad-api/cars/list?return=make")
  const carMake = await allCarsMakeRes.data
  console.log(allCarsRes.data,"cars")


  return {
    props:{
      count : count,
      allCars,
      carMake : carMake,
    },
  } 
}