import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar'
import Player from "../components/Player";
import axios from 'axios'
import React, { useEffect, useRef, useState } from "react";
import { setUser, } from '../reducers/TokenSlice'
import { useDispatch, useSelector } from 'react-redux'
function Spotify() {
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyRef = useRef();
  const bodyScrolled = () => {
    
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 400
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };


  const token = useSelector(state=>state.tokenset.token);
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get("https://api.spotify.com/v1/me",{
      headers:{
        Authorization:"Bearer " +token,
        "Content-Type":"application/json"
      }
    })
    .then(data=>{
      const user ={
        name:data.data.display_name,
        id:data.data.id
      }
      dispatch(setUser(user));
        
    }).catch(err=>{
      console.log("ERRORsdf::",err)
    });
  },[token])
  return (
    <div className="bg-black min-h-screen text-white">
       <div className="flex flex-col sm:flex-row">
         <div className="w-full sm:w-[27vw] h-[90vh] flex flex-col">
             <Sidebar/>
         </div>
         <div className="w-full sm:w-[73vw] bg-black relative">
           <div className="rounded-lg top-2 fixed overflow-scroll h-[91vh] bg-gradient-to-b from-teal-800 to-zinc-950 text-white w-full sm:w-[78vw]" ref={bodyRef} onScroll={bodyScrolled} >
               <Navbar navBackground={navBackground} />
               <Body headerBackground={headerBackground}/>
           </div>
         </div>
       </div>
       <Player/>
    </div>
 )
 
}

export default Spotify
