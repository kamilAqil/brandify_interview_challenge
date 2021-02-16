import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from '../Material_Theme/Theme.js'


let StoreLocatorStyles = makeStyles((theme) => createStyles({
    storeLocatorContainer: {
        height: '99vh',
        width: '100%',
        [theme.breakpoints.up("xs")]: {
        
        },
        [theme.breakpoints.up("sm")]: {
         
        },
        [theme.breakpoints.up("md")]: {
            display : 'flex',
            height: '100vh',
        },
        [theme.breakpoints.up("lg")]: {
        
        },
    },
    leftCol : {
        width : '66%',
        height : ''
    },
    rightCol : {
        width : '34%',
        height : '',
        paddingRight : '1%',
        paddingLeft : '1%',
        overflow : 'scroll',
        position : 'relative'
    },
    resultsContainerDesktop : {
        top : '115px',
        position : 'relative'
    },
    // wireFrameBorderOne: {
    //     border: `1px solid ${theme.palette.limeGreen.main}`
    // },
    // wireFrameBorderThree: {
    //     border: `1px solid ${theme.palette.beetRed.main}`
    // },
    // wireFrameBorderTwo: {
    //     border: `1px solid ${theme.palette.skyBlue.main}`
    // }
}))


export default StoreLocatorStyles