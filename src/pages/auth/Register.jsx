import Wave from '../../assets/wave.png';
import Unlock from '../../assets/unlock.svg';
import { Link, useNavigate } from 'react-router-dom';
import { forwardRef, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../app/slices/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors,setErrors] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [focusedInput,setFocusedInput] = useState(null);

  const handleOnchange = (e) => {
    const {name,value} = e.target;
    validateField(name,value);
  }

  const validateField = (fieldName,value) => {
    switch(fieldName){
      case 'username': setErrors(prev => ({...prev,username: validateName(value)}))
      break;
      case 'email' : setErrors(prev => ({...prev,email: validateEmail(value)}))
      break;
      case 'password' : setErrors(prev => ({...prev,password: validatePassword(value)}))
    default:
      break;
    }
  }

  const validateName = (value) => {
    return /^[A-Za-z][A-z0-9-_]{3,23}$/.test(value) ? '' : 'Invalid User name';
  }

  const validateEmail = (value) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? '' : 'Invalid Email Address'
  }

  const validatePassword = (value) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(value) ? '' : 'Invalid Password'
  }

  const handleInputFocus = (e) => {
    setFocusedInput(e.name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if(userInfo){
      dispatch(setUserInfo(userInfo));
      toast('Account created successfully.')
      navigate('/login')
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <>
        <img src={Wave} alt="wave" className='fixed hidden md:block h-full -z-10' />
        <div className='flex justify-center items-center lg:gap-[18rem] gap-[10rem] h-screen'>
            <img src={Unlock} alt="unlock" className='hidden md:block h-[350px]' />
            <form onSubmit={handleSubmit} className={`flex flex-col w-96 ${errors ? 'gap-4' : 'gap-8'}`}>
              <h1 className='text-2xl font-bold text-center'>Register</h1>
              {(focusedInput === 'username' && errors.username !== "") ?  <p className='text-sm text-primary-200 mb-1'>
                4 to 24 characters. <br/>
                Must begin with a letter. <br/>
                Letters, number, underscores, hypens allowed.
              </p> : ""}
              <FormField type="text" id="username" name="username" ref={nameRef} error={errors.username} onChange={handleOnchange} onFocus={() => handleInputFocus(username)} />
              {(focusedInput === 'email' && errors.email !== "") ? <p className='text-sm text-primary-200 mb-1'>Please provide a valid email address.</p> : ""}
              <FormField type="email" id="email" name="email" error={errors.email} ref={emailRef} onChange={handleOnchange} onFocus={() => handleInputFocus(email)} />
              {(focusedInput === 'password' && errors.password !== "") ? <p className='text-sm text-primary-200 mb-1'>8 to 24 characters.<br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters: !@#$%
              </p> : ""}
              <FormField type="password" id="password" name="password" error={errors.password} ref={passwordRef} onChange={handleOnchange} onFocus={() => handleInputFocus(password)} />
              
              <button type='submit' className='p-3 bg-primary-100 text-white rounded-lg font-bold disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed' disabled={errors.username === "" && errors.email === "" && errors.password === "" ? false : true}>Register</button>
              <p className='text-center'>Already a member? <Link to="/login" className='text-blue-500 underline'>Login</Link></p>
            </form>
        </div>
        <ToastContainer/>
    </>
  )
}  

const FormField = forwardRef(({type,id,name,error,onChange,onFocus},ref) => (
  <> 
  <div className="relative border-2 focus-within:border-primary-100 rounded-lg">
    <input type={type} id={id} name={name} placeholder='' ref={ref} required onChange={onChange} onFocus={onFocus} 
    autoComplete='off' className='block p-3 w-full appearance-none focus:outline-none bg-transparent'/>
    <label htmlFor={id} className='absolute top-0 bg-white p-3 -z-1 duration-300 origin-0 rounded-lg'>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
  </div>
  {error && <p className='text-red-500'>{error}</p>}
  </>
))

export default Register


