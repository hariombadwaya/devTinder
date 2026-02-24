import axios from 'axios'
import React, { useEffect } from 'react'
import BASE_URL from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../slice/connectionSlice'

const Connections = () => {
  const connections = useSelector((store)=>store.connection);
  const dispatch = useDispatch();
  const fetchConnections = async()=> {
    try{
        const res= await axios.get(BASE_URL+ "/user/connections", {
        withCredentials: true,
    });
    dispatch(addConnections(res.data.data));
    }catch(err){
        // handle error case
    }
  }  ;
  useEffect(()=>{
    fetchConnections();
  },[]);

  if(!connections) return ;
  if(connections.length ===0) return <h1>No Connections Found</h1>

return (
  <div className="min-h-screen bg-base-200 py-10 px-4">
    
    <h1 className="text-3xl font-bold text-center mb-8">
    My Connections
    </h1>

    <div className="max-w-2xl mx-auto space-y-5 ">
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } = connection;

        return (
          <div
            key={_id}
            className="flex items-center gap-6 p-5 rounded-xl bg-base-300 shadow-md hover:shadow-lg transition "
          >
            {/* Profile Image */}
            <img
              src={photoUrl}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-base-100"
            />

            {/* User Info */}
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">
                {firstName} {lastName}
              </h2>

              {age && gender && (
                <p className="text-sm opacity-70">
                  {age}, {gender}
                </p>
              )}

              <p className="text-sm mt-2 text-gray-300 max-w-md">
                {about}
              </p>
            </div>
          </div>
        );
      })}
    </div>

  </div>
);
};

export default Connections;
