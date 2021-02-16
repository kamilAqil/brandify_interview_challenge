import React, {useEffect, useState} from 'react';

//third party
import {Grid, Typography, Input, ButtonBase} from '@material-ui/core'
import classNames from 'classnames'

import SearchCompStyles from 'subcomponents/SearchComp/SearchCompStyles.js'

import {useWidth} from 'subcomponents/SearchComp/SearchCompFunctions.js'

// svgs
import { ReactComponent as FilterIcon } from 'subcomponents/SearchComp/icons/filter.svg'

import { ReactComponent as ListIcon } from "subcomponents/SearchComp/icons/list.svg"
import { ReactComponent as MapIcon } from 'subcomponents/SearchComp/icons/map.svg'
// subcomponents 
import FilterComp from 'subcomponents/FilterComp/FilterComp.js'
const SearchComp = (props) => {

    let s = SearchCompStyles()
    let width = useWidth()

    let {
        compShown,
        setcompShown,
        showFilterOptions,
        setshowFilterOptions,
        filterOptions,
        setfilterOptions
    } = props


    useEffect(() => {

        return () => {

        }
    }, [width])


    if (width == 'xs' || width == 'sm') {
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
                    classes={{ root: s.searchCompTitle }}

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
                        className={compShown.list ?
                            classNames(`${s.wireFrameBorderOne} ${s.ButtonBaseSelected}`)
                            :
                            classNames(`${s.wireFrameBorderOne} ${s.ButtonBase}`)
                        }
                        onClick={(e) => {
                            let compShownToSet = {
                                list: true,
                                map: false,
                                filter: false
                            }
                            setcompShown(compShownToSet)
                        }}
                    >
                        {/* icon */}
                        {/* <img id='buttonIcon' className={classNames(`${s.wireFrameBorderOne} ${s.buttonIcon}`)} style={{fill:'inherit'}} src={listIcon} /> */}
                        <ListIcon className={classNames(`${s.wireFrameBorderOne} ${s.buttonIcon}`)} />
                        <Typography variant='button'>LIST</Typography>
                    </ButtonBase>
                    {/* mapButton */}
                    <ButtonBase
                        className={compShown.map ?
                            classNames(`${s.wireFrameBorderOne} ${s.ButtonBaseSelected}`)
                            :
                            classNames(`${s.wireFrameBorderOne} ${s.ButtonBase}`)
                        }
                        onClick={(e) => {
                            let compShownToSet = {
                                list: false,
                                map: true,
                                filter: false
                            }
                            setcompShown(compShownToSet)
                        }}
                    >
                        {/* icon */}
                        <MapIcon className={classNames(`${s.wireFrameBorderOne} ${s.buttonIcon}`)} />
                        <Typography variant='button'>MAP</Typography>
                    </ButtonBase>
                    {/* filterButton */}
                    <ButtonBase
                        className={compShown.filter ?
                            classNames(`${s.wireFrameBorderOne} ${s.ButtonBaseSelected}`)
                            :
                            classNames(`${s.wireFrameBorderOne} ${s.ButtonBase}`)
                        }
                        onClick={(e) => {
                            let compShownToSet = {
                                list: false,
                                map: false,
                                filter: true
                            }
                            setcompShown(compShownToSet)
                        }}
                    >
                        {/* icon */}
                        <FilterIcon className={classNames(`${s.wireFrameBorderOne} ${s.buttonIcon}`)} />
                        <Typography variant='button'>FILTER</Typography>
                    </ButtonBase>
                </Grid>
            </Grid>
        )

    } else {
        // desktop search component
        return (
            <Grid
                id='SearchComp'
                className={classNames(`${s.wireFrameBorderOne} ${s.SearchComp}`)}
                classes={{ root: s.SearchComp }}
            >
                {/* title */}
                <Typography
                    id='searchCompTitle'
                    className={classNames(`${s.wireFrameBorderOne} ${s.searchCompTitle}`)}
                    classes={{ root: s.searchCompTitle }}

                >FIND STORES</Typography>
                {/* inputAndFilter */}
                <Grid
                    id='inputAndFilter'
                    className={classNames(`${s.wireFrameBorderOne} ${s.inputAndFilter}`)}
                >
                    {/* searchInput  */}
                    <form
                        id='searchForm'
                        className={classNames(`${s.wireFrameBorderOne} ${s.searchForm}`)}

                    >
                        <Input
                            placeholder='Anaheim CA 92805'
                            variant='outlined'
                            className={classNames(`${s.wireFrameBorderOne} ${s.searchInput}`)}
                        />
                    </form>
                    {/* filter by button */}
                    <ButtonBase id='filterByButton' className={classNames(`${s.wireFrameBorderOne} ${s.filterByButton}`)} onClick={(e)=>{
                        if(!showFilterOptions){
                            setshowFilterOptions(true)
                        }else{
                            setshowFilterOptions(false)
                        }
                    }} ><Typography className={classNames(`${s.wireFrameBorderOne} ${s.filterButton}`)} variant='button'>{showFilterOptions?'Filter By -':'Filter By +'}</Typography></ButtonBase>
                </Grid>
                {showFilterOptions?
                        <FilterComp filterOptions={filterOptions} setfilterOptions={setfilterOptions} />
                        :
                        null
                        }    
            </Grid>
        )
    }



}

export default SearchComp;