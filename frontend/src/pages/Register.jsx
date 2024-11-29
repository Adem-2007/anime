import React, { useState } from 'react';
import Title from '../components/auth/Title';
import { MdAccountBox } from 'react-icons/md';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';
import Input from '../components/auth/Input';
import AuthButton from '../components/auth/AuthButton';
import Oauth from '../components/auth/Oauth';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ErrorMessage from '../components/auth/ErrorMessage';
import VideoBackground from '../components/auth/VideoBackground';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [FormData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handelChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
  };

  const handelSubmite = async (e) => {
    e.preventDefault();
    console.log('Submited', FormData);
    try {
      setLoading(true);
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
      setMessage('Registred successfully');
      if (!res.ok) {
        throw new Error(data.message || 'Failed to register');
      }

      console.log('register successfully');
      setError(false);
      setFormData({ username: '', email: '', password: '' });

      navigate('/login');
    } catch (error) {
      console.error('Error in Register', error.message);
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
    <div className='w-full h-screen flex justify-center items-center'>
        <ErrorMessage Message={message} Error={error} />
    <div className="min-h-auto w-full flex justify-center  overflow-hidden relative">
      {/* Video Background */}
        <VideoBackground />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        className="bg-gray-900 shadow-[0px_0px_60px_red] m-12 h-auto w-[430px] rounded-lg  flex flex-col items-center gap-3 py-3 px-4 relative z-10"
      >
        <Title Icon={MdAccountBox} text="Register" />
        <form
          onSubmit={handelSubmite}
          className="w-full flex flex-col justify-center p-3 gap-4"
        >
          <Input
            type="username"
            value={FormData.username}
            id={'username'}
            label="UserName"
            onChange={handelChange}
            LabelIcon={FaUser}
            placeholder={'Enter your name'}
            delay={0.1}
          />

          <Input
            type="email"
            value={FormData.email}
            id={'email'}
            label="Email"
            onChange={handelChange}
            LabelIcon={FaEnvelope}
            placeholder={'Enter your email'}
            delay={0.6}
          />

          <Input
            type="password"
            value={FormData.password}
            id={'password'}
            label="Password"
            onChange={handelChange}
            LabelIcon={FaLock}
            placeholder={'Enter your password'}
            delay={1}
          />
        </form>

        <AuthButton
          text={'Register'}
          Icon={FiUserPlus}
          onClick={handelSubmite}
          isLoading={isLoading}
        />
        <Oauth text={'Register with Google'} />

        <p className="text-white">
          I have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
    </div>
  );
};

export default Register;
