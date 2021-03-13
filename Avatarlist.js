import React from 'react';
import './Avatar.css'

const Avatarlist =(props) => {
    return (
        <div className=" avatar grow tc ma4 bg-light-pink dib pa4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt=""></img>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
        )
}
export default Avatarlist;