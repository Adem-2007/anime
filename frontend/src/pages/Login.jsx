import React, { useState } from 'react';
import Title from '../components/auth/Title';
import { FaSignInAlt } from 'react-icons/fa';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Add icons for email and password
import Input from '../components/auth/Input';
import AuthButton from '../components/auth/AuthButton';
import Oauth from '../components/auth/Oauth';
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import ErrorMessage from '../components/auth/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/Slice/UserSlice'; // Import login action
import VideoBackground from '../components/auth/VideoBackground';



const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [FormData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handelChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
  };

  const handelSubmite = async (e) => {
    e.preventDefault();
    console.log('Submited', FormData);
    try {
      setLoading(true);
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(FormData)
      });
      const data = await res.json();
      setMessage("Registred successfully");
      if (!res.ok) {
        throw new Error(data.message || 'Failed to register');
      }
      // Dispatch login action to Redux store
      dispatch(login({
        user: data.user,
        token: data.token,
      }));
      console.log('register successfully');
      navigate('/')
      setError(false);
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      console.error("Error in Register", error.message);
      setMessage(error.message);
      setError(true);
    } finally {
      setLoading(false);
      // Clear message after 2 seconds
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden relative">
      <ErrorMessage Message={message} Error={error} />
      {/* Video Background */}
      <VideoBackground />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1, y: 0,
          transition: { duration: 1 }
        }}
        className="bg-gray-900 h-[440px] w-[400px] rounded-lg shadow-lg shadow-black flex flex-col items-center gap-3 p-4 relative z-10">

        <Title Icon={FaSignInAlt} text="Login" />

        <form onSubmit={handelSubmite} className="w-full h-[300px] flex flex-col justify-center p-3 gap-4">

          <Input
            type={'email'}
            value={FormData.email}
            id={'email'}
            onChange={handelChange}
            label="Email"
            LabelIcon={FaEnvelope}
            placeholder={"Enter your email"} />

          <Input
            type={'password'}
            label="Password"
            value={FormData.password}
            id={'password'}
            onChange={handelChange}
            LabelIcon={FaLock}
            placeholder={"Enter your password"} />
        </form>
        <AuthButton text={"Login"} Icon={FaSignInAlt} onClick={handelSubmite} isLoading={isLoading} />
        <Oauth text={"Login with Google"} />

        <p className='text-white'>I don't have account ? <Link to='/register' className='text-blue-600 hover:underline'>Register</Link></p>

      </motion.div>
    </div>
  );
};

export default Register;
