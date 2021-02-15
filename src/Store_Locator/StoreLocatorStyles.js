import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from '../Material_Theme/Theme.js'


let StoreLocatorStyles = makeStyles((theme) => createStyles({
    storeLocatorContainer: {
        height: '70vh',
        width: '100%'
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