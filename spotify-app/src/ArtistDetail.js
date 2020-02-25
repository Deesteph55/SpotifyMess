import React from 'react'

//showtracks will be false, showartsist will be true
export const ArtistDetail = (props) => {
    console.log("the prop name")
    console.log(props.name);
    return (
        <div>
            <h1> The artist is </h1>
            <h1>{props.name}</h1>
        </div>
    )
}
