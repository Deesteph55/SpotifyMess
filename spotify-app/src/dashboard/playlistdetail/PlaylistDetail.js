import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { Link } from "@material-ui/core";
import style from "./Playlist.module.css";
const spotifyApi = new SpotifyWebApi();

export const PlaylistDetail = (props) => {
  let id = props.match.params.id;
  const playlistImgAlt =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fliveforlivemusic.com%2Ffeatures%2F10-positive-benefits-of-listening-to-music-according-to-science%2F&psig=AOvVaw0J-KPfP3L--NXa7PqzLIcB&ust=1583735043304000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICkr_qeiugCFQAAAAAdAAAAABAD";
  const [tracks, setTracks] = useState([]);
  const [playImage, setImage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const getPlaylistTracks = id => {
      spotifyApi.getPlaylistTracks(id, { limit: 100 }).then(response => {
        let tracks = [];
      //  console.log(response.items);
        tracks = response.items;
        setTracks(tracks);
      });
    };
    const getImage = id => {
      spotifyApi.getPlaylist(id).then(response => {
        if (response.images.length) {
          setImage(response.images[0].url);
        } else {
          setImage(playlistImgAlt);
        }
        setName(response.name);
      });
    };
    getPlaylistTracks(id);
    getImage(id);
  }, [id, setTracks, setImage, setName]);

  

  return (
    <div>
      <p>id : {id}</p>
      {tracks.length > 0 ? (
        <div>
          <div className={style.heading}>
            <img src={playImage} />
            <h1>{name}</h1>
          </div>
          <table className={style.table}>
            <tr>
              <th> Title </th>
              <th>Artist</th>
              <th>Album</th>
            </tr>

            {tracks.map(unit => (
              <tr key={unit.track.id}>
                <td>{unit.track.name}</td>
                <td>
                  {unit.track.artists.map((artist, index) => [
                    index > 0 && ", ",
                    <Link> {artist.name}</Link>
                  ])}
                </td>
                <td>{unit.track.album.name}</td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
        <h1> Oops there is nothing to see here. Add a song</h1>
      )}
    </div>
  );
};
