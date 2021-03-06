import React, {useEffect, useState} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import style from './Playlist.module.css';

const spotifyApi = new SpotifyWebApi();

export const Playlist = ({switchView, setCurrentPlaylist}) => {
    
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        const getPlaylist = () => {
            spotifyApi.getUserPlaylists({limit: 50}).then(response => {
                let playlist = [];
                playlist = response.items;
                setPlaylist(playlist);
            });
        }
        getPlaylist();
    }, [setPlaylist])

    const openPlaylist = id => {
        setCurrentPlaylist(id);
        switchView("PlaylistDetail");
    }

    return (
        <div>
        
            {playlist.length}
            <div className={style.playlist_wrap}>
              {playlist.map(unit => (
                <div key ={unit.id} className={style.div} onClick ={() => openPlaylist(unit.id)}>
                    <p><b>{unit.name}</b></p>        
                </div>
            ))}  
            </div>        
        </div>
    )
}
