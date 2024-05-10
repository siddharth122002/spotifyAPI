import {createSlice} from '@reduxjs/toolkit'
export const TokenSlice = createSlice({
    name:"token",
    initialState:{
        token:null,
        playlist:[],
        user:null,
        selectedPlaylistId:"5ePlU4RwMEHyES5J1EcxIT",
        selectedPlaylist:null,
        currentSong:null,
        playerState:false,
    },
    reducers:{
        setToken(state,action){
            state.token=action.payload
        },
        setPlaylist(state,action){
            state.playlist=action.payload
        },
        setUser(state,action){
            state.user=action.payload
        },
        setSelectedPlaylist(state,action){
            state.selectedPlaylist=action.payload
        },
        setCurrentsong(state,action){
            state.currentSong=action.payload
        },
        setPlayerstate(state,action){
            state.playerState=action.payload;
        }
    }
})

export const {setToken,setPlaylist,setUser,setSelectedPlaylist,setCurrentsong,setPlayerstate} = TokenSlice.actions;

export default TokenSlice.reducer;