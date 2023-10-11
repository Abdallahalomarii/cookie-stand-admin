'use client';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const router = useRouter();
    // const token = router.query;
    // console.log(token);
    const [loginData, setLoginData] = useState({
        username:'',
        password:'',
    })
    const [token, setToken] = useState('');
    const handlLogin = (e) =>{
        e.preventDefault();
        axios.post("https://cookiesalmonapi.azurewebsites.net/api/user/login", loginData)
        .then(res=>{
            setToken(res.data.token);
            localStorage.removeItem("token");
            localStorage.setItem("token", res.data.token);
            router.push('/pages/components')

        })
        .catch(error=>{
            alert(error);
        })

    }
  return (
    <div className="container mx-auto p-4 h-screen flex-col justify-center items-center m-auto">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="text-center text-2xl font-semibold p-4 bg-gray-100">
          Login
        </div>
        <div className="p-4">
          <form onSubmit={handlLogin}>
            <div className="mb-4">
              <label className="block text-gray-600 font-bold">Username</label>
              <input
                name="username"
                type="text"
                className="w-full py-2 px-3 border border-gray-300 rounded"
                onChange={(e)=>setLoginData({...loginData, username:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-bold">Password</label>
              <input
                name="password"
                type="password"
                className="w-full py-2 px-3 border border-gray-300 rounded"
                onChange={(e)=>setLoginData({...loginData, password:e.target.value})}
              />
            </div>
            <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded">
              <span className="spinner-border spinner-border-sm mr-1"></span>
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link href={{pathname:'/pages/register',name:'register'}}>
              <span className="text-blue-500">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
