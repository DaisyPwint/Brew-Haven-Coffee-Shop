import Image from '../assets/page_not_found.svg';
import ButtonLink from '../components/ButtonLink';

const NotFound = () => {
  return (
    <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
      <img src={Image} alt="404 image" className='mb-3 w-96'/>
      <h1 className='font-bold text-lg my-4'>Something went wrong.</h1>
      <p>Sorry,We can't find the page you're looking for.</p>
      <ButtonLink direction="/">Go to Home Page</ButtonLink>
    </section>
  )
}

export default NotFound