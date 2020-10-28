import React, { useState, useEffect } from "react";
import style from "./ArtistDetail.module.css";
import SpotifyWebAPI from "spotify-web-api-js";

const spotifyApi = new SpotifyWebAPI();
const artistImg =
  "https://lh3.googleusercontent.com/proxy/-SN7deH75xgew81GhTbtB39BnMX7GrZSjoSWcskHtyTLoyeDL1Zp-zC4IKt9GAfioWA1jbo8-FCsdsNpMzFXZycQIzebw0iaESw-6qSWpnJAr6eYnB3rqaM_4nqt5WBec0kMYw";

export const ArtistDetail = (props) => {
  // console.log("the prop id");

  let id = props.match.params.id;
  const [artistImage, setArtistImage] = useState("");
  const [artistName, setArtistName] = useState("");
  const [followers, setFollowers] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [related, setRelated] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getArtist = (id) => {
      let img = "";
      spotifyApi.getArtist(id).then((response) => {
        setArtistName(response.name);
        if (response.images.length) {
          img = response.images[0].url;
        } else {
          img = artistImg;
        }
        setArtistImage(img);
        setFollowers(response.followers.total);
      });
    };
    const getArtistTop = (id) => {
      spotifyApi.getArtistTopTracks(id, "US").then((response) => {
        let tracks = [];
        tracks = response.tracks;
        setTracks(tracks);
      });
    };

    const getArtistRelated = (id) => {
      spotifyApi.getArtistRelatedArtists(id).then((response) => {
        let related = [];
        related = response.artists;
        setRelated(related);
      });
    };

    const getAlbums = (id) => {
      let album = "album";
      spotifyApi
        .getArtistAlbums(id, {
          include_groups: ["single", "album", "appears_on", "compilation"],
        })
        .then((response) => {
          let albums = [];
          albums = response.items;
          console.log("artist albums");
          console.log(response.items);
          setAlbums(albums);
        });
    };

    getArtist(id);
    getArtistTop(id);
    getArtistRelated(id);
    getAlbums(id);
  }, [id, setArtistImage, setArtistName, setTracks, setRelated, setAlbums]);

  return (
    <div id="artistdetailrender">
      <div
        id="header"
        // style={{ backgroundImage: `url(${artistImage})`}}
        className={style.pixelated}
      >
        <img src={artistImage} />

        <div>
          <h1>{artistName} </h1>

          <h3>{followers} followers</h3>
        </div>
      </div>
      <div className={style.artistH}>
        <div
          id="popular"
          className={style.popular}
          // style={{ background: "grey", height: "400px", width: "70%", overflow:'auto', border: "2px solid black" }}
        >
          <h3 style={{ textAlign: "left", margin: "5px auto" }}>Popular</h3>

          {tracks.map((unit) => (
            <div className={style.pop} key={unit.id}>
              <img src={unit.album.images[2].url} />
              {unit.name}
            </div>
          ))}
        </div>

        <div
          id="fans"
          // style={{
          //   background: "grey",
          //   height: "400px",
          //   width: "30%",
          //   overflow: "auto",
          //   border: "2px solid black"
          // }}
          className={style.fans}
        >
          <h3>The people have spoken</h3>
          {related.map((unit) => (
            <div key={unit.id} className={style.alike}>
              <img
                src={unit.images.length ? unit.images[2].url : artistImg}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              />
              <p>{unit.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="artist album and singles" className={style.background}>
        <h3>Discography</h3>
        <div className={style.album_wrap}>
          {albums.map((album) => (
            <div key={album.id} className={style.album}>
              <img src={album.images[0].url} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//392.76, 916.44
