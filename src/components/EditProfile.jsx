import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/constant';
import UserCard from './UserCard';
import { addUser } from '../slice/userSlice';


const EditProfile = ({user}) => {
  const [firstName , setFirstName]= useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
   const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [showToast, setShowToast]= useState(false);

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const saveProfile = async ()=> {
    try{
      {/* before saving the user i am making error empty */}
      setError("")
      const res = await axios.patch(BASE_URL + "/profile/edit",
        {firstName, lastName, photoUrl, age, about, gender},
        {withCredentials: true}
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(()=> {
        setShowToast(false);
      },3000)
    } catch(err) {
      setError(err.res.data);
    }
  };
 
  return ( <>
    <div className='flex justify-center my-10'>
    <div className="flex items-center justify-center mx-10 bg-base-400 flex-grow">
      
      <fieldset className="fieldset bg-base-100 border border-base-300 rounded-xl w-80 p-6 shadow-lg">
        
        <legend className="text-lg font-semibold mb-4">
          Edit Profile
        </legend>

        <label className="label">
          <span className="label-text">First Name: </span>
        </label>
        <input
          type="text"
          value={firstName}
          className="input input-bordered w-full"
          placeholder="Enter your first name"
          onChange={(e)=> setFirstName(e.target.value)}
        />

        <label className="label mt-3">
          <span className="label-text">Last Name:</span>
        </label>
        <input
          type="text"
          value={lastName}
          className="input input-bordered w-full"
          placeholder="Enter your last name"
          onChange={(e)=> setLastName(e.target.value)}
        />

         <label className="label mt-3">
          <span className="label-text">Photo Url:</span>
        </label>
        <input
          type="text"
          value={photoUrl}
          className="input input-bordered w-full"
          placeholder="Enter your url"
          onChange={(e)=> setPhotoUrl(e.target.value)}
        />
       
        <label className="label mt-3">
        <span className="label-text">Age:</span>
        </label>
        <input
          type="number"
          value={age}
          className="input input-bordered w-full"
          placeholder="Enter your age"
          onChange={(e)=> setAge(e.target.value)}
        />

         <label className="label mt-3">
        <span className="label-text">Gender:</span>
        </label>
        <input
          type="text"
          value={gender}
          className="input input-bordered w-full"
          placeholder="Enter your gender"
          onChange={(e)=> setGender(e.target.value)}
        />

        <label className="label mt-3">
        <span className="label-text">About:</span>
        </label>
      <textarea className="textarea" placeholder="about" value={about}
       onChange={(e)=> setAbout(e.target.value)}></textarea>
       


        <p className="text-red-500">{error}</p>
        <button className="btn btn-primary w-full mt-5" onClick={saveProfile} >
          Save Profile
        </button>

      </fieldset>

    </div>
    {/* here usercard is showing for preview */}
    <UserCard user= {{firstName, lastName, age, gender, about, photoUrl}} />
    </div>

    {/* toast code is here */}
 { showToast && (
   <div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span>Profile updated successfully.</span>
  </div>
</div>
  )}
    </>
  )
}

export default EditProfile
