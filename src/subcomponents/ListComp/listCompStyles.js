import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from 'Material_Theme/Theme.js'


let listCompStyles = makeStyles((theme) => createStyles({
    addressContainer: {
        [theme.breakpoints.up("xs")]: {
            width: '60%'
        },
        [theme.breakpoints.up("sm")]: {
            width: '40%'
        },
        [theme.breakpoints.up("md")]: {
            // width: '25%',
            marginBottom: '0%'
        },
        [theme.breakpoints.up("lg")]: {},
        marginBottom: '5%'
    },
    buttonsContainer: {
        marginBottom: '10%'
    },
    sendToDeviceButton : {
        color : theme.palette.warm.main
    },
    listComp : {
        [theme.breakpoints.up("xs")]: {
        
        },
        [theme.breakpoints.up("sm")]: {
         
        },
        [theme.breakpoints.up("md")]: {
         position : 'relative',
        //  top : '115px'
        },
        [theme.breakpoints.up("lg")]: {
        
        },
    },
    buttonText: {
        color: theme.palette.white.main,
        fontWeight: 'bold'
    },
    callAndGetDirectionsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5%'
    },
    colorWarm: {
        fill: theme.palette.warm.main
    },
    colorWarmer: {
        fill: theme.palette.warmer.main
    },
    colorWarmest: {
        fill: theme.palette.warmest.main
    },
    indexAndDistance: {
        [theme.breakpoints.up("xs")]: {
            width: '60%'
        },
        [theme.breakpoints.up("sm")]: {},
        [theme.breakpoints.up("md")]: {
            width: '25%'
        },
        [theme.breakpoints.up("lg")]: {},
        alignItems: 'center',
        display: 'flex'
    },
    indexArrowDown: {// fill: theme.palette.warm.main
    },
    moreInfoButton: {
        backgroundColor: theme.palette.lightBlack.main,
        // boxShadow : '0px 2px 2px rgba(0, 0, 0, 0.8)',
        borderRadius: '0',
        color: theme.palette.white.main,
        height: '100%',
        width: '100%'
    },
    nameAndCityContainer: {
        [theme.breakpoints.up("xs")]: {
            width: '60%'
        },
        [theme.breakpoints.up("sm")]: {},
        [theme.breakpoints.up("md")]: {
            width: '25%'
        },
        [theme.breakpoints.up("lg")]: {}
    },
    resultButton: {
        backgroundColor: theme.palette.lightBlack.main,
        color: theme.palette.white.main,
        height: '100%',
        width: '48%' // boxShadow : '0px 2px 2px rgba(0, 0, 0, 0.25)'

    },
    resultContainer: {
        // width: '83.33%'
        borderBottom: `2px solid ${theme.palette.grey.main}`,
        margin: 'auto',
        marginBottom: '5%',
        marginTop: '5%'
    },
    resultIndex: {
        color: theme.palette.white.main,
        fontWeight: 'bold',
        position: 'absolute'
    },
    resultIndexContainer: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        position: 'relative',
        width: '40px'
    },
    resultNameAndCity: {
        fontWeight: 'bold',
        whiteSpace: 'nowrap'
    },
     wireFrameBorderOne: {
            border: `1px solid ${theme.palette.limeGreen.main}`
    },
    wireFrameBorderThree: {
            border: `1px solid ${theme.palette.beetRed.main}`
    },
    wireFrameBorderTwo: {
            border: `1px solid ${theme.palette.skyBlue.main}`
    }

}))


export default listCompStyles