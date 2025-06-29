import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../store/actions/userActions';


const Register = () => {
  const { register, handleSubmit } = useForm();
  let dispatch = useDispatch();
  let navigate = useNavigate()
  
  const registerHandler = (user) => {
    
    if (
     !user?.role?.trim() ||
  !user?.username?.trim() ||
  !user?.email?.trim() ||
  !user?.password?.trim() 
) {
  toast.error('Please fill in all the fields!', {
    position: 'bottom-right',
  });
  return;
}

    user.id = nanoid();
    if(user?.role==='Admin') user.isAdmin = true;
    else user.isAdmin = false;
    user.cart = [];
    dispatch(asyncRegisterUser(user));  
    toast.success('Registered Successfully!', {
      position:"bottom-right"
    })
    navigate('/login');
  };

  return (
    <div className="w-full flex items-center justify-center px-4 mt-16">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full max-w-[600px] bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl text-white rounded-3xl px-10 py-10 flex flex-col gap-6"
      >
           <h2 className="text-3xl mb-2 font-bold text-center">Create Your Account 🚀</h2>      

        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-lg font-semibold">Enter your name</label>
          <input
            {...register('username')}
            id="username"
            type="text"
            placeholder="John Doe"
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-lg font-semibold">Enter your email</label>
          <input
            {...register('email')}
            id="email"
            type="email"
            placeholder="john@example.com"
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
        </div>  

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-semibold">Password</label>
          <input
            {...register('password')}
            id="password"
            type="password"
            placeholder="******"
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="flex flex-col gap-4">
  <label htmlFor="role" className="text-lg font-semibold">Select Role</label>

  <div className="flex items-center gap-6">
    <label htmlFor="admin" className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
       value="Admin"
              {...register("role")}
        className="accent-blue-600 w-5 h-5"
      />
      <span className="text-base font-medium">Admin</span>
    </label>

    <label htmlFor="user" className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        value="Customer"
              {...register("role")}
        className="accent-green-600 w-5 h-5"
      />
      <span className="text-base font-medium">Customer</span>
    </label>
  </div>
</div>


        <button
          type="submit"
          className="mt-6 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl "
        >
          Submit
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-green-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
