import React from 'react'
import { BiLibrary } from "react-icons/bi";
import Playlists from './Playlists'
import {MdHomeFilled,MdSearch} from "react-icons/md";
function Sidebar() {
  return (
    <>
    <div className="bg-zinc-900 m-2 rounded-lg text-md p-4 font-semibold">
        <div className="text-center my-4">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" className="max-w-[80%] h-auto mx-auto" />
        </div>
        <span className="flex items-center gap-3 py-3 hover:cursor-pointer"><MdHomeFilled className="text-3xl" /><p>Home</p></span>
        <span className="flex items-center gap-3 py-3 text-slate-400 hover:text-white transition-colors duration-500 hover:cursor-pointer"><MdSearch className="text-3xl"/><p>Search</p></span>
    </div>
    <div className="bg-zinc-900 mx-2 sm:mx-0 rounded-lg text-md p-3 font-semibold flex-1">
        <span className="flex items-center gap-3 py-3 text-slate-400 hover:text-white transition-colors duration-500 hover:cursor-pointer"><BiLibrary className="text-3xl"/><p>Your Library</p></span>
        <Playlists/>
    </div>
</>

  )
}

export default Sidebar