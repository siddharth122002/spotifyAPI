import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setPlaylist } from '../reducers/TokenSlice';
function Playlists() {
    const token = useSelector(state=>state.tokenset.token);
    const playlist = useSelector(state=>state.tokenset.playlist);
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get('https://api.spotify.com/v1/me/playlists',{
            headers:{
                Authorization:"Bearer " +token,
                "Content-Type":"application/json"
            }
        })
        .then(data=>{
            dispatch(setPlaylist(data.data.items));
            
        }).catch(err=>{
            console.log("ERROR::",err)
        });
    },[token])

    return (
        <div>
            {playlist.length>0 && (
                playlist.map((list,i)=>(
                    <div key={i} className="flex font-normal w-full items-center mt-4 hover:cursor-pointer hover:bg-zinc-800 p-2 rounded-lg">
                        <img className="w-16 rounded-lg" src={list.images[0].url} alt="img" />
                        <div className=" px-2 w-full">
                            <p className="font-semibold">{list.name}</p>
                            <p className="text-sm ">{list.type}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Playlists

