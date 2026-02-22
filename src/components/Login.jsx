import axios from "axios";
import  { useState } from "react"
import { useDispatch} from "react-redux";
import  {addUser, removeUser} from "../slice/userSlice"
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constant";

const Login = () => {
 
  const [emailId , setEmailId]= useState("ym@gmail.com");
  const [password, setPassword] = useState("yuvraj@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleLogin = async()=> {
    try{
      const res = await axios.post(BASE_URL+"/login", {
        emailId,
        password,
      },{withCredentials: true}
    );
    dispatch(addUser(res.data));
    return navigate("/");
    }catch(err){
  const errorMessage =
    err.response?.data?.error || 
    err.response?.data?.message || 
    "Something went wrong";

  setError(errorMessage);
}
  }
  return (
    <div className="flex items-center justify-center bg-base-200 flex-grow">
      
      <fieldset className="fieldset bg-base-100 border border-base-300 rounded-xl w-80 p-6 shadow-lg">
        
        <legend className="text-lg font-semibold mb-4">
          Login
        </legend>

        <label className="label">
          <span className="label-text">Email </span>
        </label>
        <input
          type="email"
          value={emailId}
          className="input input-bordered w-full"
          placeholder="Enter your email"
          onChange={(e)=> setEmailId(e.target.value)}
        />

        <label className="label mt-3">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          value={password}
          className="input input-bordered w-full"
          placeholder="Enter your password"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <p className="text-red-500">{error}</p>
        <button className="btn btn-primary w-full mt-5" onClick={handleLogin}>
          Login
        </button>

      </fieldset>

    </div>
  )
}

export default Login