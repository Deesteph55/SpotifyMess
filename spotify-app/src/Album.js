import React, { useState, useEffect } from "react";
import { List, Segment } from "semantic-ui-react";
import SpotifyWebAPI from "spotify-web-api-js";
const spotifyApi = new SpotifyWebAPI();

export const Album = ({ id }) => {
  //const id = props.id;

  const [albumTracks, setAlbumTracks] = useState([]);
  const [albumImage, setAlbumImage] = useState("");
  const [albumName, setAlbumName] = useState("");
  //need an alt for images
  useEffect(() => {
    const getAlbumTracks = id => {
      spotifyApi.getAlbumTracks(id).then(response => {
        let names = [];
        names = response.items;
        console.log("names");
        console.log(names);
        setAlbumTracks(names);
        console.log("albumtracsk");
        //console.log(albumTracks);
      });
    };
    const getAlbum = id => {
      spotifyApi.getAlbum(id).then(response => {
        setAlbumImage(response.images[1].url);
        setAlbumName(response.name);
      });
    };
    getAlbumTracks(id);
    getAlbum(id);
  }, [id, setAlbumTracks, setAlbumImage, setAlbumName]);

  return (
    <div>
      <h1>
        <img style={{float: 'left', paddingLeft:'20px'}} src={albumImage} /> {albumName}
      </h1>
      
      {/* <List divided relaxed verticalAlign='middle' style={{clear: 'left'}}> 
        {albumTracks.map(track => (
          <List.Item key={track.id}>
            <List.Content>
              <List.Header>{track.name}</List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List> */}
      <h1 style={{clear: 'left', textAlign: 'left', paddingLeft: '20px'}} >Title</h1>
      <ol style={{clear: 'left', textAlign:'left', paddingRight: '20px'}}>

        {albumTracks.map(track => (
            <li key ={track.id} style={{borderBottom:'1px solid black', padding: '10px'}}> {track.name}</li>
        ))}
      </ol>
    </div>
  );
};
