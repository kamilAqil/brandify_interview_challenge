import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from 'Material_Theme/Theme.js'


let mapCompStyles = makeStyles((theme)=>createStyles({
    mapCompContainer: {
        height: '80%',
        marginTop : '1%',
        [theme.breakpoints.up("xs")]: {
        
        },
        [theme.breakpoints.up("sm")]: {
         
        },
        [theme.breakpoints.up("md")]: {
            height: '100%',
            marginTop : '0%',
        },
        [theme.breakpoints.up("lg")]: {
        
        },
    },
    mapImage: {
        height: '100%',
        width: '100%',
        objectFit : 'fill'
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


export default mapCompStyles