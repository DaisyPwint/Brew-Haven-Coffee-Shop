import Wave from '../../assets/wave.png';
import Unlock from '../../assets/unlock.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forwardRef, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCredentials } from '../../app/slices/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const {userInfo} = useSelector(state => state.auth);

    const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = emailRef.current.value;
    const userPwd = passwordRef.current.value;
    
    if(userEmail === userInfo?.email && userPwd === userInfo?.password){
      const customToken = btoa(JSON.stringify(userInfo));
      // const decodedToken = atob(encodedToken);
      dispatch(setCredentials({token: customToken}));
      toast('Logged in Successfully');
      navigate('/');
    }else{
      toast('Invalid Email or Password')
    }
  }

  return (
    <>
        <img src={Wave} alt="wave image" className='fixed hidden md:block h-full -z-10' />
        <div className='flex justify-center items-center lg:gap-[18rem] gap-[10rem] h-screen'>
            <img src={Unlock} alt="unlock image" className='hidden md:block h-[350px]' />
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
              <h1 className='text-2xl font-bold text-center'>Login</h1>  
              <FormField type="email" id="email" name="email" ref={emailRef}>Email</FormField>
              <FormField type="password" id="password" name="password" ref={passwordRef}>Password</FormField>
              <button className='p-3 bg-primary-100 text-white rounded-lg font-bold'>Register</button>
              <p className='text-center'>Not a member yet? <Link to="/register" className='text-blue-500 underline'>Register</Link></p>
            </form>
        </div>
        <ToastContainer/>
    </>
  )
}  

const FormField = forwardRef(({type,id,name,children},ref) => (
  <div className="relative border-2 focus-within:border-primary-100 rounded-lg">
    <input type={type} id={id} name={name} placeholder='' ref={ref} required
    autoComplete='off' className='block p-3 w-full appearance-none focus:outline-none bg-transparent'/>
    <label htmlFor={id} className='absolute top-0 bg-white p-3 -z-1 duration-300 origin-0 rounded-lg'>{children}</label>
  </div>
))

export default Login
