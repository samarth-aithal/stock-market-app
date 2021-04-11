import React  from 'react';


export default function SaveButton(props){
    return(
        <button onClick={props.saveFn}>Save </button>
    )
}