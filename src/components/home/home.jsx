import React, {useState, useEffect} from "react";
import axios from 'axios';
import CardBanner from '../common/cardBanner/cardBanner';
import Table from '../common/table/table';
import SearchBar from '../common/searchBar/searchBar';
import {mockData} from '../common/table/tableColumnConfig';
import '../../common/common.css';
export default function Home(){

    const[searchTerm, setSearchTerm] = useState(' ');

    const [gooleData, setGoogleData] = useState({});
    const [ fbData, setFbdata] = useState({});
    const [amazonData, setAmazonData] = useState({});
    const [ibmData, setIbmData] = useState({})
    const [microSoftData, setMicrosoftData] = useState({})
    const [appleData, setAppleIbmData] = useState({})

    const data = [gooleData, fbData, amazonData, ibmData, microSoftData, appleData]

    const req1 = () => axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=GOOGL&apikey=ZMR5NZPXZG2OH2G5');
    const req2 = () => axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=FB&apikey=ZMR5NZPXZG2OH2G5');
    const req3 = () => axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=AMZN&apikey=ZMR5NZPXZG2OH2G5');
    const req4 = () => axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=ZMR5NZPXZG2OH2G5');
    const req5 = () => axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=MSFT&apikey=ZMR5NZPXZG2OH2G5');
    const req6 = () => axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=ZMR5NZPXZG2OH2G5');

    useEffect(()=>{
        async function getCompanyDetails(){
            try{
                const[res1, res2, res3, res4, res5, res6] = await axios.all([req1(), req2(),req3(), req4(), req5(),req6()]);
                console.log(res1);
                setGoogleData({
                    name : res1.data.Name,
                    symbol : res1.data.Symbol,
                    stock: res1.data.PERatio * res1.data.EPS
                });
                
                setFbdata({
                    name : res2.data.Name,
                    symbol : res2.data.Symbol,
                    stock: res2.data.PERatio * res2.data.EPS
                });
               

                setAmazonData({
                    name : res3.data.Name,
                    symbol : res3.data.Symbol,
                    stock: res3.data.PERatio * res3.data.EPS
                });
                

                setIbmData({
                    name : res4.data.Name,
                    symbol : res4.data.Symbol,
                    stock: res4.data.PERatio * res4.data.EPS
                });
                

                setMicrosoftData({
                    name : res5.data.Name,
                    symbol : res5.data.Symbol,
                    stock: res5.data.PERatio * res5.data.EPS
                });
                

                setAppleIbmData({
                    name : res6.data.Name,
                    symbol : res6.data.Symbol,
                    stock: res6.data.PERatio * res6.data.EPS
                });
                
                

            
            }
            catch(err){
                console.log(err);
            }
        }
        getCompanyDetails();
    },[])



    
    
        const filteredData = mockData.filter(company => {
            return company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
        })
       
    

    
    return(
        <div className='page-layout'>
            
           
           <CardBanner />
            <Table data={filteredData}
                 title="Stock details" 
                subHeaderComponent ={
                    <div> 
                        <h4 style={{display:'inline', marginRight:'30px'}}>Stock Details</h4>
                    <SearchBar handleChange={(e) =>{setSearchTerm(e.target.value)} }/>
                    </div>
            }
                subHeader={true}
            />
        </div>
    )
}