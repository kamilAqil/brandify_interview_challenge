import React, {useEffect, useState} from 'react';

//third party
import {Grid, Typography} from '@material-ui/core'
import classNames from 'classnames'

import StoreLocatorStyles from 'Store_Locator/StoreLocatorStyles'
// functions
import {useWidth} from 'Store_Locator/StoreLocatorFunctions'

import SearchComp from 'subcomponents/SearchComp/SearchComp'
import ResultsComp from 'subcomponents/ResultsComp/ResultsComp'
import ListComp from 'subcomponents/ListComp/ListComp.js'
import FilterComp from 'subcomponents/FilterComp/FilterComp.js'
// subcomponents
import MapComp from 'subcomponents/MapComp/MapComp.js'
const StoreLocator = (props) => {
    let logger = 1
    let s = StoreLocatorStyles()

    let width = useWidth()
    
    const [compShown, setcompShown] = useState({
        list : false, 
        map : true, 
        filter : false
    })
   
    const [filterOptions, setfilterOptions] = useState([
        {
            name: <Typography>{`Specialty`}</Typography>,
            nameRaw : 'Specialty',
            value: false
        },
        {
            name: <Typography>{`Factory Outlet`}</Typography>,
            nameRaw : 'Factory Outlet',
            value: false
        },
        {
            name: <Typography>{`Authorized Retailer`}</Typography>,
            nameRaw : 'Authorized Retailer',
            value: false
        },
        {
            name: <Typography>{`Timberland PRO Footwear`}&copy;</Typography>,
            nameRaw : 'Timberland PRO Footwear',
            value: false
        },
        {
            name: <Typography>{`Timberland PRO Workwear`}&copy;</Typography>,
            nameRaw : 'Timberland PRO Workwear',
            value: false
        }
    ])


    const [showFilterOptions, setshowFilterOptions] = useState(false)

    let results = [
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            address : '100 East Washington Ave, Ca, 92806',
            street : '100 East Washington Ave',
            state : 'Ca',
            zip : '92806',
            distance : '1.75 miles',
            relevance : 'superWarm',
            phone : '555-555-5555'
        },
        {
            name : 'Shoeteria',
            city : 'Anaheim',
            street : '1922 West Lincoln Ave',
            state : 'Ca',
            zip : '92806',
            address : '1922 West Lincoln Ave Anaheim, Ca, 92806',
            distance : '2.75 miles',
            relevance : 'warmer',
            phone : '555-555-5555'
        },
        {
            name : 'Shoeteria',
            city : 'Anaheim',
            street : '2114 East Lincoln Ave Anaheim',
            state : 'Ca',
            zip : '92806',
            address : '2114 East Lincoln Ave Anaheim, Ca, 92806',
            distance : '3.75 miles',
            relevance : 'warmest',
            phone : '555-555-5555'
        },
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            street : '3564 Capitol Avenue Anaheim',
            state : 'Ca',
            zip : '92806',
            address : '3564 Capitol Avenue Anaheim, Ca, 92806',
            distance : '4.75 miles',
            relevance : 'warm',
            phone : '555-555-5555'
        },
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            street : '3355 George Avenue',
            state : 'Anaheim',
            zip : '92806',
            address : '3355 George Avenue Anaheim, Anaheim, 92806',
            distance : '5.75 miles',
            relevance : 'warmer',
            phone : '555-555-5555'
        },
        {
            name : 'Shoeteria',
            city : 'Anaheim',
            street : '371 Pine Tree Lane Anaheim',
            state : 'Ca',
            zip : '92806',
            address : '371 Pine Tree Lane Anaheim, Ca, 92806',
            distance : '6.75 miles',
            relevance : 'warmest',
            phone : '555-555-5555'
        },
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            street : '548 Hill Haven Drive Anaheim',
            state : 'Ca',
            zip : '92806',
            address : '548 Hill Haven Drive Anaheim, Ca, 92806',
            distance : '7.75 miles',
            relevance : 'warm',
            phone : '555-555-5555'
        },
        {
            name : 'Warehouse Shoe Sale',
            city : 'Anaheim',
            street : '1743  Wilkinson Court Anaheim',
            state : 'Ca',
            zip : '92806',
            address : '1743  Wilkinson Court Anaheim, Ca, 92806',
            distance : '8.75 miles',
            relevance : 'warmer',
            phone : '555-555-5555'
        }
    ]

    useEffect(() => {
        logger && console.log(width)
        return () => {
            
        }
    }, [width, showFilterOptions, ])

    if(width == 'xs' || width == 'sm' ){
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
                {/* leftCol */}
                <Grid
                    id='leftCol'
                    className={classNames(`${s.wireFrameBorderOne} ${s.leftCol}`)}
                >
                    {/* map */}
                    <MapComp/>
                </Grid>
                {/* rightCol */}
                <Grid
                    id='rightCol'
                    className={classNames(`${s.wireFrameBorderOne} ${s.rightCol}`)}
                >
                    {/* search */}
                    <SearchComp filterOptions={filterOptions} setfilterOptions={setfilterOptions}  compShown={compShown} setcompShown={setcompShown} showFilterOptions={showFilterOptions} setshowFilterOptions={setshowFilterOptions}/>
                    {/* resultsContainerDesktop */}
                    <Grid
                        id='resultsContainerDesktop'
                        className={classNames(`${s.wireFrameBorderOne} ${s.resultsContainerDesktop}`)}
                    >
                        {/* {showFilterOptions?
                        <FilterComp filterOptions={filterOptions} setfilterOptions={setfilterOptions} />
                        :
                        null
                        } */}
                    {/* listComponent */}
                    <ListComp results={results}  />
                    </Grid>
                    
                </Grid>
            </Grid>
        )
    }


   
}
 
export default StoreLocator;