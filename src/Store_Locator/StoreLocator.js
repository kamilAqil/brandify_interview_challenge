import React, {useEffect, useState} from 'react';

//third party
import {Grid, Typography} from '@material-ui/core'
import classNames from 'classnames'

import StoreLocatorStyles from 'Store_Locator/StoreLocatorStyles'
// functions
import {useWidth} from 'Store_Locator/StoreLocatorFunctions'

import SearchComp from 'subcomponents/SearchComp/SearchComp'
import ResultsComp from 'subcomponents/ResultsComp/ResultsComp'
const StoreLocator = (props) => {
    let logger = 1
    let s = StoreLocatorStyles()

    let width = useWidth()
    
    const [compShown, setcompShown] = useState({
        list : true, 
        map : false, 
        filter : false
    })
   
    const [filterOptions, setfilterOptions] = useState([
        {
            name: <Typography>{`Specialty`}</Typography>,
            value: false
        },
        {
            name: <Typography>{`Factory Outlet`}</Typography>,
            value: false
        },
        {
            name: <Typography>{`Authorized Retailer`}</Typography>,
            value: false
        },
        {
            name: <Typography>{`Timberland PRO Footwear`}&copy;</Typography>,
            value: false
        },
        {
            name: <Typography>{`Timberland PRO Workwear `}&copy;</Typography>,
            value: false
        }
    ])

    let results = [
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            address : '2114 East Lincoln Ave Anaheim, Ca, 92806',
            distance : '1.75km',
            relevance : 'warm'
        },
        {
            name : 'Shoeteria',
            city : 'Anaheim',
            address : '1922 West Lincoln Ave Anaheim, Ca, 92806',
            distance : '2.75km',
            relevance : 'warmer'
        },
        {
            name : 'Shoeteria',
            city : 'Anaheim',
            address : '2114 East Lincoln Ave Anaheim, Ca, 92806',
            distance : '3.75km',
            relevance : 'warmest'
        },
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            address : '3564 Capitol Avenue Anaheim, Ca, 92806',
            distance : '4.75km',
            relevance : 'warm'
        },
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            address : '3355 George Avenue Anaheim, Ca, 92806',
            distance : '5.75km',
            relevance : 'warmer'
        },
        {
            name : 'Shoeteria',
            city : 'Anaheim',
            address : '371 Pine Tree Lane Anaheim, Ca, 92806',
            distance : '6.75km',
            relevance : 'warmest'
        },
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            address : '548 Hill Haven Drive Anaheim, Ca, 92806',
            distance : '7.75km',
            relevance : 'warm'
        },
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            address : '1743  Wilkinson Court Anaheim, Ca, 92806',
            distance : '8.75km',
            relevance : 'warmer'
        }
    ]

    useEffect(() => {
        logger && console.log(width)
        return () => {
            
        }
    }, [width])

    if(width == 'xs' || width == 'sm' || width == 'md'){
        // MOBILE VIEW
        return (
            <Grid
                id='storeLocatorContainer'
                className={classNames(`${s.wireFrameBorderOne} ${s.storeLocatorContainer}`)}
            >
                {/* searchComp */}
                <SearchComp compShown={compShown} setcompShown={setcompShown} />
                {/* resultsComp */}
                <ResultsComp compShown={compShown} results={results} filterOptions={filterOptions} setfilterOptions={setfilterOptions} />
            </Grid>
        )
    }else{
        // DESKTOP VIEW
        return (
            <Grid
                id='storeLocatorContainer'
                className={classNames(`${s.wireFrameBorderOne} ${s.storeLocatorContainer}`)}
            >
                StoreLocator Desktop
            </Grid>
        )
    }


   
}
 
export default StoreLocator;