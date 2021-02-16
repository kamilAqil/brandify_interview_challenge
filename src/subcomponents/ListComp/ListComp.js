import React, {useEffect, useState} from 'react';
//third party
import {Grid,ButtonBase ,Typography} from '@material-ui/core'
import classNames from 'classnames'
import {ReactComponent as ArrowDown} from 'subcomponents/ListComp/arrow_down.svg'
// functions
import {useWidth} from 'subcomponents/SearchComp/SearchCompFunctions.js'
// styles
import listCompStyles from 'subcomponents/ListComp/listCompStyles.js'
const ListComp = (props) => {
    let logger = 1
    let {
        results
    } = props
    let s = listCompStyles()
    logger && console.log('results',results)
    const [desktopView, setdesktopView] = useState(false)
    let width = useWidth()
    useEffect(() => {
       
        return () => {
            if(width == 'xs' ||width == 'sm' ){
                setdesktopView(false)
            }else{
                setdesktopView(true)
            }
        }
    }, [results,width,desktopView])

    return (
        <Grid
            id='listComp'
            className={classNames(`${s.wireFrameBorderTwo} ${s.listComp}`)}
        >
            {results.map((result,index)=>{
                {index += 1}
                return(<Grid
                    id={`resultContainer${index}`}
                    className={classNames(`${s.wireFrameBorderTwo} ${s.resultContainer}`)}
                >
                    {/* indexAndDistance */}
                    <Grid
                        id={`indexAndDistance${index}`}
                        className={classNames(`${s.wireFrameBorderTwo} ${s.indexAndDistance}`)}
                    >
                        {/* index */}
                        <Grid
                            id={`resultIndexContainer${index}`}
                            className={classNames(`${s.wireFrameBorderTwo} ${s.resultIndexContainer}`)}
                        >
                            <ArrowDown id={`indexArrowDown${index}`} className={
                            result.relevance === 'warm'?
                            classNames(`${s.wireFrameBorderOne} ${s.indexArrowDown} ${s.colorWarm}`)
                            :
                            result.relevance === 'warmer'?
                            classNames(`${s.wireFrameBorderOne} ${s.indexArrowDown} ${s.colorWarmer}`)
                            :
                            classNames(`${s.wireFrameBorderOne} ${s.indexArrowDown} ${s.colorWarmest}`)
                        }/>
                            <Typography id={`resultIndex${index}`} className={classNames(`${s.wireFrameBorderOne} ${s.resultIndex}`)} classes={{root:s.resultIndex}} >{index}</Typography>
                        </Grid>
                        {/* distance */}
                        <Typography>{result.distance} away</Typography>
                    </Grid>
                    {/* nameAndCity */}
                    <Grid
                        id={`nameAndCityContainer${index}`}
                        className={classNames(`${s.wireFrameBorderOne} ${s.nameAndCityContainer}`)}
                    >
                        <Typography variant='subtitle1' id={`resultNameAndCity${index}`} className={classNames(`${s.wireFrameBorderOne}`)} classes={{root:s.resultNameAndCity}}>{result.name} - {result.city}</Typography>
                    </Grid>
                    {/* Address */}
                    <Grid
                        id={`address${index}`}
                        className={classNames(`${s.wireFrameBorderOne} ${s.addressContainer}`)}
                    ><Typography>{result.address}</Typography></Grid>
                    {desktopView?
                    <Grid>
                        <Typography>{result.phone}</Typography>
                        {/* sendToPhoneOrEmailContainer */}
                        <ButtonBase><Typography variant='button' className={classNames(`${s.wireFrameBorderOne} ${s.sendToDeviceButton}`)}>Send To Phone</Typography></ButtonBase> | <ButtonBase><Typography variant='button' className={classNames(`${s.wireFrameBorderOne} ${s.sendToDeviceButton}`)}>Send To Email</Typography></ButtonBase>
                    </Grid>
                    :
                    null
                    }
                    {/* buttonsContainer */}
                    {desktopView?
                        <Grid
                        id={`buttonsContainer${index}`}
                        className={classNames(`${s.wireFrameBorderOne} ${s.buttonsContainer}`)}
                    >
                        {/* callAndGetDirections */}
                        <Grid
                            id={`callAndGetDirectionsContainer${index}`}
                            className={classNames(`${s.wireFrameBorderOne} ${s.callAndGetDirectionsContainer}`)}
                        >
                            
                            {/* call store */}
                         
                            <ButtonBase id={`callstoreButton${index}`} className={classNames(`${s.wireFrameBorderOne} ${s.resultButton}`)}><Typography classes={{root:s.buttonText}} variant='button'>Call Store</Typography></ButtonBase>
                            {/* get directions */}
                            <ButtonBase id={`getDirectionsButton${index}`} className={classNames(`${s.wireFrameBorderOne} ${s.resultButton}`)}><Typography classes={{root:s.buttonText}} variant='button'>Get Directions</Typography></ButtonBase>
                        </Grid>
                        {/* moreInfoButton */}
                        <Grid
                            id={`moreInfoButtonContainer${index}`}
                        >
                            <ButtonBase
                                id={`moreInfoButton${index}`}
                                className={classNames(`${s.wireFrameBorderOne} ${s.moreInfoButton}`)}
                                
                            ><Typography variant='button' classes={{root:s.buttonText}}>More Info</Typography></ButtonBase>
                        </Grid>
                    </Grid>
                    :
                    // buttonsContainerDesktop
                    <Grid
                        id={`buttonsContainer${index}`}
                        className={classNames(`${s.wireFrameBorderOne} ${s.buttonsContainer}`)}
                    >
                        {/* callAndGetDirections */}
                        <Grid
                            id={`callAndGetDirectionsContainer${index}`}
                            className={classNames(`${s.wireFrameBorderOne} ${s.callAndGetDirectionsContainer}`)}
                        >
                            
                            {/* call store */}
                         
                            <ButtonBase id={`callstoreButton${index}`} className={classNames(`${s.wireFrameBorderOne} ${s.resultButton}`)}><Typography classes={{root:s.buttonText}} variant='button'>Call Store</Typography></ButtonBase>
                            {/* get directions */}
                            <ButtonBase id={`getDirectionsButton${index}`} className={classNames(`${s.wireFrameBorderOne} ${s.resultButton}`)}><Typography classes={{root:s.buttonText}} variant='button'>Get Directions</Typography></ButtonBase>
                        </Grid>
                        {/* moreInfoButton */}
                        <Grid
                            id={`moreInfoButtonContainer${index}`}
                        >
                            <ButtonBase
                                id={`moreInfoButton${index}`}
                                className={classNames(`${s.wireFrameBorderOne} ${s.moreInfoButton}`)}
                                
                            ><Typography variant='button' classes={{root:s.buttonText}}>More Info</Typography></ButtonBase>
                        </Grid>
                    </Grid>
                    }
                    

                </Grid>)
            })}
        </Grid>
    );
}
 
export default ListComp;