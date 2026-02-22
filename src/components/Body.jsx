import React, { useEffect } from 'react'
import Navbar from "./Navbar.jsx"
import Footer from './Footer.jsx'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../slice/userSlice.js'
import BASE_URL from '../utils/constant.js'
import axios from 'axios'
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=> store.user);
  const fetchUser = async () => {
    if(userData) return;
    try{
      const res = await axios.get(BASE_URL+"/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    }catch(err){
      if(err.status ===401){
      navigate("/login");
      }
      console.error(err);
    }
  };

  useEffect(()=>{
    fetchUser();
  },[]);

  return (
    <div>
       <div className="min-h-screen flex flex-col">
  <Navbar />
  
  <div className="flex-grow flex items-center justify-center bg-base-200">
    <Outlet />
  </div>
  
  <Footer />
</div>
    </div>
  )
}

export default Body
