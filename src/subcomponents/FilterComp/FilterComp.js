import React, {useEffect, useState} from 'react';

//third party
import {Grid, Typography, FormControl,FormGroup, FormControlLabel , Checkbox} from '@material-ui/core'
import classNames from 'classnames'

// styles
import filterCompStyles from 'subcomponents/FilterComp/FilterCompStyles.js'



const FilterComp = (props) => {
    let logger = 1  
    let {
        setfilterOptions,
        filterOptions
    } = props
  
    let s = filterCompStyles()

    return (
        <Grid
            id='filterComponent'
        >
            {filterOptions.map((filter, index) => {
                logger && console.log('filter', filter)
                return (
                    <Grid
                        id='filterSelectionContainer'
                    >
                        <FormControlLabel
                            control={<Checkbox color='primary' classes={{colorPrimary : s.checkBoxFill}} className={classNames(`${s.wireFrameBorderOne} ${s.checkBoxFill}`)} />}
                            label={filter.name}
                        />
                    </Grid>
                )
            })}
        </Grid>
    );
}
 
export default FilterComp;