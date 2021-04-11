import React,{ Fragment } from 'react';

export default function SearchBar(props){
    return(
        <Fragment>
            <input type="search" placeholder="Search Company" onChange={props.handleChange} />
        </Fragment>
    )
}
