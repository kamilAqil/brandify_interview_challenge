import React, {useEffect} from 'react';

//third party
import {Grid} from '@material-ui/core'
import classNames from 'classnames'

import StoreLocatorStyles from 'Store_Locator/StoreLocatorStyles.js'
// functions
import {useWidth} from 'Store_Locator/StoreLocatorFunctions.js'



const StoreLocator = (props) => {

    let s = StoreLocatorStyles()

    let width = useWidth()
    



    useEffect(() => {
        console.log(width)
        return () => {
            
        }
    }, [width])

    return (
        <Grid
            id='storeLocatorContainer'
            className={classNames(`${s.wireFrameBorderOne} ${s.storeLocatorContainer}`)}
        >
            StoreLocator
        </Grid>
    );
}
 
export default StoreLocator;