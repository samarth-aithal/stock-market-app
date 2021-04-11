import React from 'react';
import { useHistory } from 'react-router-dom'


export default function ViewButton(){
    const history = useHistory();

    function openSavedTable(){
        history.push("/view");
    }

    return(
        <button onClick={openSavedTable}>View Saved</button>
    )
}