import React from 'react'
function Login() {
  const loginHandler=()=>{
    const clientId="a72b45adbc7b4f2cbf0e4cbb61649612";
    const redirectUrl="https://spotify-api-five.vercel.app/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope=[
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    
    window.location.href=`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
  }


  return (
    <div className='bg-green-500 h-screen w-full flex flex-col justify-center items-center'>
        <img 
        className='h-[20vh]'
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spot"/>
        <button 
        onClick={()=>{loginHandler()}}
        className='bg-black text-green-500 mt-9 py-4 px-8 rounded-full text-xl'>Connect Spotify</button>
    </div>
  )
}

export default Login
