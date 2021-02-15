import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from 'Material_Theme/Theme.js'


let mapCompStyles = makeStyles((theme)=>createStyles({
    mapCompContainer: {
        height: '100%',
        marginTop : '3%',

    },
    mapImage: {
        height: '100%',
        width: '100%'
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


export default mapCompStyles