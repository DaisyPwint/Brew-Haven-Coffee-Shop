import Shop from '../../assets/coffee-shop.avif';
import ButtonLink from '../../components/ButtonLink';
import Featured from './Featured';

const Home = () => {

  return (
    <main className='mt-8'>
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-2 md:gap-6">
        <div>
          <h1 className="text-bold md:text-3xl text-2xl text-primary-200">Brew Haven: Where Every Sip is a Celebration</h1>
          <p className="text-primary-300 mt-3">
          Enjoy great coffee, yummy desserts, and tasty pizzas at <span className='text-primary-200 text-lg'>Brew Haven</span>. Relax, sip, and savor the goodness. It's the perfect place to chill and treat yourself to awesome flavors. Join us for a delightful experience!
          </p>
          <ButtonLink direction="/menu">Shop Now</ButtonLink>
        </div>
        <div className='w-full'>
          <img src={Shop} alt="coffee shop image" className='object-cover' />
        </div>
      </div>
      <Featured/>
    </main>
  )
}

export default Home