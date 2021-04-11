import React from 'react';
import "./card.css"

export default function Card(props){
    return(
        <div className='float-left card'>
            <div style={{fontWeight:'bold'}}>{props.symbol}</div>
            <img  className='banner' src={props.src} />
            <div className='stock'>{props.stock} USD </div>
        </div>
    )
}