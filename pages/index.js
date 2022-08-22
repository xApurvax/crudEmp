import axios from 'axios'
import styles from '../styles/Home.module.css'
import Footer from './Components/Footer'
import LandingDetails from './Components/LandingDetails'
import Navbar from './Components/Navbar'
import SingleDetail from './Components/SingleDetail'

export default function Home({count,allCars,carMake,carModel,carType,carStyle,carEcolur,carIcolur,carTrans,carDrive,carFuel,carFeature}) {
  return (
    <div className={`flex justify-center items-center  ${styles.container}`}>
    <section className='w-[1520px]'>
      <Navbar /> 
      {/* <LandingDetails count={count} allCars={allCars} carMake={carMake} carModel={carModel} carType={carType} carStyle={carStyle} carEcolur={carEcolur} carIcolur={carIcolur} carTrans={carTrans} carDrive={carDrive} carFuel={carFuel} carFeature={carFeature} /> */}
      <SingleDetail />
      <Footer />
    </section>
    </div>
  )
}


// export const getStaticProps = async () => {
export async function getStaticProps(){
  const response = await axios.get("https://autodigg.com/ad-api/cars/list?car_type=Used+car%2CNew+car%2CCertified+pre-owned&page=1&radius=100&year=2011%2C2021&return=count")
  const count = await response.data

  const allCarsRes = await axios.get("https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100")
  const allCars = await allCarsRes.data
  
  const allCarsMakeRes = await axios.get("https://autodigg.com/ad-api/cars/list?return=make")
  const carMake = await allCarsMakeRes.data

  const allCarsModelRes = await axios.get("https://autodigg.com/ad-api/cars/list?make=&return=model")
  const carModel = await allCarsModelRes.data

  const allCarsTypeRes = await axios.get("https://autodigg.com/ad-api/cars/list?return=body_type")
  const carType = await allCarsTypeRes.data
  
  const allCarsBTypeRes = await axios.get("https://autodigg.com/ad-api/cars/list?make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=body_type")
  const carStyle = await allCarsBTypeRes.data

  const allCarsEcolourRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=exterior_color")
  const carEcolur = await allCarsEcolourRes.data

  const allCarsIcolourRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=interior_color")
  const carIcolur = await allCarsIcolourRes.data

  const allCarsTransRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=transmission")
  const carTrans = await allCarsTransRes.data

  const allCarsDriveTrainRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=drivetrain")
  const carDrive = await allCarsDriveTrainRes.data

  const allCarsFuleTRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=fuel_type")
  const carFuel = await allCarsFuleTRes.data

  const allCarsFeaturesRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=features")
  const carFeature = await allCarsFeaturesRes.data

  return {
    props:{
      count : count,
      allCars,
      carMake : carMake,
      carModel : carModel,
      carType : carType,
      carStyle : carStyle,
      carEcolur : carEcolur,
      carIcolur : carIcolur,
      carTrans : carTrans,
      carDrive : carDrive,
      carFuel : carFuel,
      carFeature : carFeature,
    },
  } 
}