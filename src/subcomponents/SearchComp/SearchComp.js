import React, {useEffect, useState} from 'react';

//third party
import {Grid, Typography, Input, ButtonBase} from '@material-ui/core'
import classNames from 'classnames'

import SearchCompStyles from 'subcomponents/SearchComp/SearchCompStyles.js'

import {useWidth} from 'subcomponents/SearchComp/SearchCompFunctions.js'

const SearchComp = (props) => {

    let s = SearchCompStyles()
    let width = useWidth()


    const [buttonSelected, setbuttonSelected] = useState({
        list : true,
        map :  false,
        filter : false
    })

    useEffect(() => {
        
        return () => {
            
        }
    }, [width])


    if(width == 'xs' || width == 'sm' || width == 'md'){
        // mobile search component
        return (
            <Grid
                id='SearchComp'
                className={classNames(`${s.wireFrameBorderOne} ${s.SearchComp}`)}
            >
                {/* title */}
                <Typography
                    id='searchCompTitle'
                    className={classNames(`${s.wireFrameBorderOne} ${s.searchCompTitle}`)}
                >FIND STORES</Typography>
                {/* searchInput  */}
                <form>
                    <Input
                        placeholder='Anaheim CA 92805'
                        variant='outlined'
                        className={classNames(`${s.wireFrameBorderOne} ${s.searchInput}`)}
                    />
                </form>
                {/* buttonsRow */}
                <Grid
                    id='buttonsRow'
                    className={classNames(`${s.wireFrameBorderOne} ${s.buttonsRow}`)}
                >
                    {/* listButton */}
                    <ButtonBase
                        className={buttonSelected.list?
                        classNames(`${s.wireFrameBorderOne} ${s.ButtonBaseSelected}`)
                        :
                        classNames(`${s.wireFrameBorderOne} ${s.ButtonBase}`)
                        }
                    >
                        {/* icon */}
                        <img id='buttonIcon' className={classNames(`${s.wireFrameBorderOne} ${s.buttonIcon}`)} src='/icons/list.svg' />
                        <Typography variant='button'>LIST</Typography>
                    </ButtonBase>
                    {/* mapButton */}
                    <ButtonBase
                        className={classNames(`${s.wireFrameBorderOne} ${s.ButtonBase}`)}
                    >
                        {/* icon */}
                        <img id='buttonIcon' className={classNames(`${s.wireFrameBorderOne} ${s.buttonIcon}`)} src='/icons/map.svg' />
                        <Typography variant='button'>MAP</Typography>
                    </ButtonBase>
                    {/* filterButton */}
                    <ButtonBase
                        className={classNames(`${s.wireFrameBorderOne} ${s.ButtonBase}`)}
                    >
                        {/* icon */}
                        <img id='buttonIcon' className={classNames(`${s.wireFrameBorderOne} ${s.buttonIcon}`)} src='/icons/filter.svg' />
                        <Typography variant='button'>FILTER</Typography>
                    </ButtonBase>
                </Grid>
            </Grid>
        )

    }else{
        // desktop search component
        return (
            <Grid
                id='SearchComp'
                className={classNames(`${s.wireFrameBorderOne} ${s.SearchComp}`)}
                classes={{root:s.SearchComp}}
            >
                {/* title */}
                {/* searchInput  */}
                {/* buttonsRow */}
            </Grid>
        )
    }


   
}
 
export default SearchComp;