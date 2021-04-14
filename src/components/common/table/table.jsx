import React, {Fragment, useState, useMemo, useLayoutEffect, useCallback} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import ViewButton from '../../home/viewButton';
import SaveButton from '../../home/savebutton';



const customStyles = {
    headCells: {
        style:{
            backgroundColor: '#F0F0F0',
        }
    }
}

export default function Table(props){

    const[savedStatus, setSavedStatus] = useState();

    const statusHandler = (rowData) =>{
        const stock = {
            name:rowData.name,
            symbol: rowData.symbol,
            marketcap : rowData.marketcap,
            currentPrice: rowData.currentPrice
        }

        axios.post('localhost:3001', stock)
            .then(res => {
                console.log(res);
            })
        setSavedStatus(true);

    }

    const updateState = useCallback(state=>{console.log(state)},[])
    const column = useMemo(()=> [
        {
            name:"COMPANY NAME",
            selector:"companyName"
        },
        {
            name:"SYMBOL",
            selector:"symbol"
        },
        {
            name:"MARKET CAP",
            selector:"marketcap"
        },
        {
            name:" ",
            cell: 
            row=><div>{!row.saved ? (
                <SaveButton saveFn={ statusHandler(row)}  />):
                (<ViewButton />)}
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,

        },
        {
            name:"CURRENT PRICE",
            selector:"currentPrice"
        }
    ],)



    return(
        <Fragment>
            
                <Fragment>
                    <DataTable 
                        data={ props.data}
                        columns={column}
                        noHeader
                        pagination
                        paginationPerPage={5}
                        paginationRowsPerPageOptions={[5]}
                        subHeader={props.subHeader ? props.subHeader: false}
                        subHeaderComponent ={props.subHeaderComponent ? props.subHeaderComponent: []}
                        subHeaderAlign={ 'left' }
                        customStyles={customStyles}
                        onSelectedRowsChange={updateState}
                        style={{ borderRadius:'6px', boxShadow:' 0 2px 9px 0 rgba(40,44,51,0.26)'}}
                        />
                </Fragment> 

        </Fragment>
    )
}