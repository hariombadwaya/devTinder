import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BASE_URL from '../utils/constant';
import { addFeed } from '../slice/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store)=> store.feed);
  const dispatch = useDispatch();

  const getFeed = async()=> {
    if(feed) return;
    try{
      const res= await axios.get(BASE_URL+"/feed" ,{withCredentials: true});
      dispatch(addFeed(res.data.data));
    }catch(err){

    }
  };

  useEffect(()=>{
    getFeed();
  },[]);
  return (
    feed && (
    <div>
      <UserCard user = {feed[1]} />
    </div>
    )
  );
}

export default Feed
