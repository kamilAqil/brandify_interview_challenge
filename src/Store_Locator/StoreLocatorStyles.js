import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from '../Material_Theme/Theme.js'


let StoreLocatorStyles = makeStyles((theme)=>createStyles({
    wireFrameBorderOne: {
            border: `1px solid ${theme.palette.limeGreen.main}`
        },
        wireFrameBorderThree: {
            border: `1px solid ${theme.palette.beetRed.main}`
        },
        wireFrameBorderTwo: {
            border: `1px solid ${theme.palette.skyBlue.main}`
        },
        storeLocatorContainer : {
            width : '100%',
            height : '100%'
        }
}))


export default StoreLocatorStyles