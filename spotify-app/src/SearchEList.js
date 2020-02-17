import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardMedia, CardContent } from '@material-ui/core';
import { Grid, GridList, GridListTile, GridListTileBar, ListSubheader } from '@material-ui/core';

export const SearchEList = ({ track, artist, album, playlist }) => {
  const playlistSrc = "data:image/png;base64,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"
  const artistSrc = 'data:image/png;base64,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'
  const albumSrc = 'https://cdn1.iconfinder.com/data/icons/weby-flat-multimedia/64/multimedia-22-512.png'
  const songSrc = 'https://lh3.googleusercontent.com/proxy/k7o1IUmmfsHpRW5vq-ATiD9KmTxhAfVs2q4w9_UPkf1_ZNnqZCCwOisOhKITE2HcUZ24kN57q8-pcMXD6M0ngbpU0Iq10sBZ-hk1_jYSOt0vDzVi7VTWurxijEHl57MPSpcX7Big40T17A'

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  const classes = useStyles();
  return (

    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Songs</ListSubheader>
        </GridListTile>
        {track.map(unit => (
          <GridListTile key={unit.id}>
            <img src={unit.album.images.length ? unit.album.images[0].url : songSrc} />
            <GridListTileBar
              title={unit.name}
              subtitle={<span>by: {unit.artists[0].name}</span>}
            />
          </GridListTile>
        ))}
      </GridList>

      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Albums</ListSubheader>
        </GridListTile>
        {album.map(unit => (
          <GridListTile key={unit.id}>
            <img src={unit.images.length ? unit.images[0].url : albumSrc} />
            <GridListTileBar
              title={unit.name}
              subtitle={<span>by: {unit.artists[0].name}</span>}
            />
          </GridListTile>
        ))}
      </GridList>

      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Artists</ListSubheader>
        </GridListTile>
        {artist.map(unit => (
          <GridListTile key={unit.id}>
            <img src={unit.images.length ? unit.images[0].url : artistSrc} />
            <GridListTileBar
              title={unit.name}
            />
          </GridListTile>
        ))}
      </GridList>

      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Playlists</ListSubheader>
        </GridListTile>
        {playlist.map(unit => (
          <GridListTile key={unit.id}>
            <img src={unit.images.length ? unit.images[0].url : playlistSrc} />
            <GridListTileBar
              title={unit.name}
              subtitle={<span>Created by: {unit.owner.display_name}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );

};
