import React from 'react';
import { AiFillClockCircle } from "react-icons/ai";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPlaylist } from '../reducers/TokenSlice';

function Body({headerBackground}) {
  const selectedPlaylistId = useSelector(state => state.tokenset.selectedPlaylistId);
  const token = useSelector(state => state.tokenset.token);
  const selectedPlaylist = useSelector(state=>state.tokenset.selectedPlaylist);
  const dispatch = useDispatch();
  useEffect(() => {
      const getPlaylist = async () => {
          try {
              const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
                  headers: {
                      Authorization: "Bearer " + token,
                      "Content-Type": "application/json",
                  },
              });
              const selectedPlaylist = {
                  id: response.data.id,
                  name: response.data.name,
                  description: response.data.description.startsWith("<a")
                      ? ""
                      : response.data.description,
                  image: response.data.images[0]?.url || '',
                  tracks: response.data.tracks.items.map(({ track }) => ({
                      id: track.id,
                      name: track.name,
                      artists: track.artists.map((artist) => artist.name),
                      image: track.album.images[2]?.url || '', 
                      duration: track.duration_ms,
                      album: track.album.name,
                      context_uri: track.album.uri,
                      track_number: track.track_number,
                  })),
              }
              dispatch(setSelectedPlaylist(selectedPlaylist))
          } catch (error) {
              console.error("Error fetching playlist:", error);
          }
      };
      getPlaylist();
  }, [token,selectedPlaylistId]);
  const msToMinutesAndSeconds = (ms) => {
      var minutes = Math.floor(ms / 60000);
      var seconds = ((ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <>
      {selectedPlaylist && (
            <div>
                <div>
                  <div className='flex mt-28 m-2 p-4'>
                    <div>
                      <img className='w-48 drop-shadow-2xl' src={selectedPlaylist.image}/>
                    </div>
                    <div>
                      <span className='text-slate-400 font-semibold m-8 text-xl'>PLAYLIST</span>
                      <h1 className='md:text-6xl font-bold m-8 md:pt-20 text-2xl'>{selectedPlaylist.name}</h1>
                    </div>
                  </div>
              <div>
                <div className={`grid z-10 grid-cols-6 p-4 sticky  top-[70px] ${headerBackground && "bg-black/70"}`}>
     
                  <div>
                    <p>#</p>
                  </div>
                  <div className='col-span-2'>
                    <p >TITLE</p>
                  </div>
                  <div className='col-span-2'>
                    <p>ALBUM</p>
                  </div>
                  <div >
                    <AiFillClockCircle />
                  </div>
                </div>


                <div>
                  {selectedPlaylist.tracks.map(({ id, name, artists, image, duration, album, context_uri, track_number }, index) => {
                    return (
                      <div key={id} 
                      className='grid grid-cols-6 p-4 hover:bg-black/70 duration-200  rounded-xl my-2'
                      onClick={() => playTrack(id, name, artists, image, context_uri, track_number)}>
                        <div >
                          <p>{index + 1}</p>
                        </div>
                        <div className='col-span-2 flex items-center gap-2'>
                          <div >
                            <img src={image} />
                          </div>
                          <div >
                            {name?<p>{name}</p>:<p>Not available</p>}
                            <p>{artists}</p>
                          </div>
                        </div>
                        <div className='col-span-2'>
                          <p>{album}</p>
                        </div>
                        <div >
                          <p>{msToMinutesAndSeconds(duration)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            


                  
                </div>
                <footer className=" text-slate-200 py-4 h-80 w-full">
                    <div className="container mx-auto text-center">
                        <p>© 2024 Spotify AB All rights reserved.</p>
                        <p>Designed with ❤️ by Siddharth</p>
                    </div>
                </footer>
            </div>
      )}
    </>
  )
}

export default Body