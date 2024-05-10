import Login from "./components/Login";
import { useEffect } from "react";
import Spotify from "./components/Spotify"
import { setToken } from "./reducers/TokenSlice";
import {useDispatch,useSelector} from 'react-redux'
function App() {
  const token = useSelector(state=>state.tokenset.token);
  const dispatch = useDispatch();
  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
      const access_token = hash.split("&")[0].split("=")[1];
      dispatch(setToken(access_token));
    }
  }, []);
  return (
    <div className="w-full h-screen bg-black text-white">
      {token ? <Spotify/>:<Login/>}
    </div>
  )
}

export default App