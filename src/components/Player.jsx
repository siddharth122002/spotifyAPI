import React, { useEffect } from 'react'
import axios from 'axios'
import {setCurrentsong} from '../reducers/TokenSlice'
import { useSelector,useDispatch } from 'react-redux'
import Controls from './Controls'
function Player() {
  const token = useSelector(state=>state.tokenset.token)
  const current = useSelector(state=>state.tokenset.currentSong)
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get("https://api.spotify.com/v1/me/player/currently-playing",{
      headers:{
        Authorization:"Bearer " +token,
        "Content-Type":"application/json"
      }
    }).then(data=>{
      if (data !== "") {
        const Song = {
          id: data.data.item.id,
          name: data.data.item.name,
          artists: data.data.item.artists.map((artist) => artist.name),
          image: data.data.item.album.images[2].url,
        };
        dispatch(setCurrentsong(Song));
      }
    }).catch(err=>{
      console.log("here",err)
    })
  },[])
  return (
    <>
      <div className="bg-black absolute bottom-0 w-full h-auto">
  {current && (
    <div className='p-4 flex  justify-between'>
      <div className='flex items-center mb-4 sm:mb-0'>
        <div className='w-16 h-16 rounded-lg'>
          <img src="https://i.scdn.co/image/ab67616d00004851aeb0b8de22f2eca9b229f95d" className='object-cover w-full h-full rounded-lg'/>
        </div>
        <div className='pl-4'>
          <h2 className='font-semibold'>Maa Tujhe Salaam</h2>
          <h6 className='text-zinc-500'>A.R. Rahman</h6>
        </div>
      </div>
      <Controls/>
      <input type="range" className='w-[20vw]' min={0} max={100} />
    </div>
  )}
</div>

    </>
  )
}

export default Player