import React,{useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Card from './card';
import googel_src from '../../../assets/GOOGL.png';
import fb_src from '../../../assets/FB.png';
import amzn_src from '../../../assets/AMZN.svg';
export default function CardBanner(){

    const [gooleData, setGoogleData] = useState({});
    const [ fbData, setFbdata] = useState({});
    const [amazonData, setAmazonData] = useState({});

    const req1 = () => axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=GOOGL&apikey=ZMR5NZPXZG2OH2G5');
    const req2 = () => axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=FB&apikey=ZMR5NZPXZG2OH2G5');
    const req3 = () => axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=AMZN&apikey=ZMR5NZPXZG2OH2G5');

    useEffect(()=>{
        async function getCompanyDetails(){
            try{
                const[res1, res2, res3] = await axios.all([req1(), req2(),req3()]);
                console.log(res1);
                setGoogleData({
                    name : res1.data.Name,
                    symbol : res1.data.Symbol,
                    stock: Math.round(res1.data.PERatio * res1.data.EPS)
                });
                setFbdata({
                    name : res2.data.Name,
                    symbol : res2.data.Symbol,
                    stock: Math.round(res2.data.PERatio * res2.data.EPS)
                });
                setAmazonData({
                    name : res3.data.Name,
                    symbol : res3.data.Symbol,
                    stock: Math.round(res3.data.PERatio * res3.data.EPS)
                })

                console.log('gooleData',gooleData);
                console.log('fbData', fbData);
                console.log('amazonData',amazonData);
            }
            catch(err){
                console.log(err);
            }
        }
        getCompanyDetails();
    },[])

    return(
        <Fragment>
            <Card symbol={gooleData.symbol} stock={gooleData.stock} src={googel_src} />
            <Card symbol={fbData.symbol} stock={fbData.stock} src={fb_src}/>
            <Card symbol={amazonData.symbol} stock={amazonData.stock} src={amzn_src}/>
        </Fragment>
    )
}