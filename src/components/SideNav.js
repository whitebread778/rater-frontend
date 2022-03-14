import React from 'react';

const SideNav = (props) => {
    return (
        <div className='sidenav'>
            <a><img src='bcit.svg'/></a>
            <a href ="/"> Home</a>
            <a href ="/programs">Programs</a>
            <a href ="#section"> Write Reviews</a>
            <a href ="#section"> About</a>
            <a href ="#section"> {props.name}</a>
        </div>
    )
}


export default SideNav;