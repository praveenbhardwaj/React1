import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';
const Awatar = (props) => {

    const avatarlistarray = [
        {
            id: 1,
            name: "pravee B",
            work: "web developer"
        },
        {
            id: 2,
            name: "Nazim D",
            work: "web developer"
        },
        {
            id: 3,
            name: "Jaadu C",
            work: "web developer"
        },
        {
            id: 4,
            name: "Capital C",
            work: "web developer"
        }
    ]
        const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
            return  <Avatarlist
                                name={avatarlistarray[i].name}
                                work={avatarlistarray[i].work} />
        })
    
    return (<div className="Mainpage">
        <h1>Welcome to Tachyons world</h1>
        {arrayavatarcard}
       <button>Subscribe</button>
    </div>
    )
}

export default Awatar;