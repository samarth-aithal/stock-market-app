import React, { Fragment } from "react";
import { useHistory } from "react-router";
import CardBanner from "../common/cardBanner/cardBanner";
import Navbar from "../common/navbar";
export default function View(){

    
    const history = useHistory();

    function homeOpenFn(){
        history.push("/");
    }

    return(
        <Fragment>
            <Navbar />
        <div className='page-layout'>
            <CardBanner />
        </div>
        <button style={{height:'50px' ,width:'100px'}} onClick={homeOpenFn}>Back</button>
        </Fragment>
    )
}