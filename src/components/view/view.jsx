import React, { Fragment } from "react";
import CardBanner from "../common/cardBanner/cardBanner";
import Navbar from "../common/navbar";
export default function View(){
    return(
        <Fragment>
            <Navbar />
        <div className='page-layout'>
            <CardBanner />
        </div>
        </Fragment>
    )
}