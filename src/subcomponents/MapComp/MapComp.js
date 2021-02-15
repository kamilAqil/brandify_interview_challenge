import React, {useState, useEffect} from 'react';

//third party
import {Grid} from '@material-ui/core'
import classNames from 'classnames'

import {useWidth} from 'Store_Locator/StoreLocatorFunctions.js'

// styles
import mapCompStyles from 'subcomponents/MapComp/MapCompStyles.js'


const MapComp = (props) => {

    let width = useWidth()

    useEffect(() => {
        
        return () => {
            
        }
    }, [width])


    let s = mapCompStyles()

    if(width == 'xs' || width == 'sm' || width == 'md'){
        return (
            <Grid
                id='mapCompContainer'
                className={classNames(`${s.wireFrameBorderOne} ${s.mapCompContainer}`)}
            >
                <img id='mapImage' className={classNames(`${s.wireFrameBorderOne} ${s.mapImage}`)} src='map_images/map_mobile.png' />
            </Grid>
        )
    }else{
        return (
            <Grid
            id='mapCompContainer'
            className={classNames(`${s.wireFrameBorderOne} ${s.mapCompContainer}`)}
            >
                <img id='mapImage' className={classNames(`${s.wireFrameBorderOne} ${s.mapImage}`)} src='map_images/map_desktop.png' />
            </Grid>
        )
    }



   
}
 
export default MapComp;