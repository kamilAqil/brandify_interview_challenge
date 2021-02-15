import React, {useEffect, useState} from 'react';

//third party
import {Grid} from '@material-ui/core'
import classNames from 'classnames'

import StoreLocatorStyles from 'Store_Locator/StoreLocatorStyles'
// functions
import {useWidth} from 'Store_Locator/StoreLocatorFunctions'

import SearchComp from 'subcomponents/SearchComp/SearchComp'
import ResultsComp from 'subcomponents/ResultsComp/ResultsComp'
const StoreLocator = (props) => {

    let s = StoreLocatorStyles()

    let width = useWidth()
    
    const [compShown, setcompShown] = useState({
        list : true, 
        map : false, 
        filter : false
    })
   


    useEffect(() => {
        console.log(width)
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
                <ResultsComp compShown={compShown}/>
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