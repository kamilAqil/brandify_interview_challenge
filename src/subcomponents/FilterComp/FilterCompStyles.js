import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from 'Material_Theme/Theme.js'


let filterCompStyles = makeStyles((theme)=>createStyles({
    checkBoxFill: {
        // fill : `${theme.palette.warm.main} !important`,
        color: `${theme.palette.grey.main} !important`
    },
    filterComponent: {
        [theme.breakpoints.up("xs")]: {},
        [theme.breakpoints.up("sm")]: {},
        [theme.breakpoints.up("md")]: {// marginTop : '115px'
        },
        [theme.breakpoints.up("lg")]: {}
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


export default filterCompStyles