import React from 'react';
import { Link } from 'react-router-dom';

const AlbumListingCard=({data,gotoUrl})=>{
    return (
        <div className="container" onClick={()=>gotoUrl(data.id)}
      >
            <div className="div-container">
                <span className="title">ALBUM TITLE :  {data.title}</span>
                <span className="right-arrow">&#8594;</span>
            </div>
            <div className="div-container">
                <span className="title">USER : {data.username}</span>
                <span style={{marginTop:"10px"}}>.........................................................................................</span>
                <span className="title">View More</span>
            </div>

        </div>
    )
}
export default AlbumListingCard;