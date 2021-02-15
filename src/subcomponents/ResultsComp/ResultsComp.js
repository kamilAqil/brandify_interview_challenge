import React from 'react';


//third party
import {Grid} from '@material-ui/core'
import classNames from 'classnames'


// subcomponents
import MapComp from 'subcomponents/MapComp/MapComp.js'


const ResultsComp = (props) => {


    let {
        compShown
    } = props

    if(compShown.list){
        // return list comp
        return (
            <Grid>
               list
            </Grid>
        )
    }else if(compShown.map){
        // return map comp
        return (
            <Grid>
                <MapComp/>
            </Grid>
        )
    }else if(compShown.filter){
        // return filter comp
        return (
            <Grid>
               filter
            </Grid>
        )
    }

    
}
 
export default ResultsComp;