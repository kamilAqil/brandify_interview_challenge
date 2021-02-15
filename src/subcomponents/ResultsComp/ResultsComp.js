import React, {useEffect} from 'react';


//third party
import {Grid} from '@material-ui/core'
import classNames from 'classnames'


// subcomponents
import MapComp from 'subcomponents/MapComp/MapComp.js'
import ListComp from 'subcomponents/ListComp/ListComp.js'
import FilterComp from 'subcomponents/FilterComp/FilterComp.js'

const ResultsComp = (props) => {

    

    let {
        compShown,
        results,
        setfilterOptions,
        filterOptions
    } = props

    useEffect(() => {
        
        return () => {
            
        }
    }, [])

    if(compShown.list){
        // return list comp
        return (
         
               <ListComp results={results} />
           
        )
    }else if(compShown.map){
        // return map comp
        return (
            
                <MapComp/>
        )
    }else if(compShown.filter){
        // return filter comp
        return (
            <FilterComp setfilterOptions={setfilterOptions} filterOptions={filterOptions} />
        )
    }

    
}
 
export default ResultsComp;