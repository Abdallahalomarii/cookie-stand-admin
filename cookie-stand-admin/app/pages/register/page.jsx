'use client';
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


const Register = () => {
  const [registerData, setRegisterData ] = useState({
    username:'',
    email:'',
    phoneNumber:'',
    password:''
  });
  const [holdToken, setHoldToken] = useState('');
  const router = useRouter();   
const handleRegister = async (e) => {
  e.preventDefault();
  await axios
    .post("https://cookiesalmonapi.azurewebsites.net/api/user/register", registerData)
    .then((res) => {
      setHoldToken(res.data.token);
      alert("Account created successfully"+res.data.token);

      // Navigate to the login page with the token as a query parameter
      localStorage.removeItem("token");
      localStorage.setItem("token", res.data.token);
      router.push('/pages/components');
      
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <div className="container mx-auto p-4 h-screen flex-col justify-center items-center m-auto">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="text-center text-2xl font-semibold p-4 bg-gray-100">
          Register
        </div>
        <div className="p-4">
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-600 font-bold">username</label>
              <input
                name="userName"
                type="text"
                className="w-full py-2 px-3 border border-gray-300 rounded"
                onChange={(e)=> setRegisterData({ ...registerData, username:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-bold">Email</label>
              <input
                name="email"
                type="email"
                className="w-full py-2 px-3 border border-gray-300 rounded"
                onChange={(e)=> setRegisterData({...registerData, email:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-bold">phoneNumber</label>
              <input
                name="phoneNumber"
                type="phone"
                className="w-full py-2 px-3 border border-gray-300 rounded"
                onChange={(e)=> setRegisterData({...registerData, phoneNumber:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-bold">Password</label>
              <input
                name="password"
                type="password"
                className="w-full py-2 px-3 border border-gray-300 rounded"
                onChange={(e)=>setRegisterData({...registerData, password:e.target.value})}
              />
            </div>
            <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded">
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
          <Link href={{pathname:'/pages',name:'page'}}>
              <span className="text-blue-500">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
