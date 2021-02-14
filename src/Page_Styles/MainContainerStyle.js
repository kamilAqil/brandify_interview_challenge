import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from '../Material_Theme/Theme.js'

let MainContainerStyles = makeStyles((theme)=>createStyles({
    wireFrameBorderOne: {
        border: `1px solid ${theme.palette.limeGreen.main}`
    },
    wireFrameBorderThree: {
        border: `1px solid ${theme.palette.beetRed.main}`
    },
    wireFrameBorderTwo: {
        border: `1px solid ${theme.palette.skyBlue.main}`
    },
    pageContainer : {
        width : '100vw',
        height : '100vh',
        display : 'flex'
    }
}))



export default MainContainerStyles