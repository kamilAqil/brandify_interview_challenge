import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from '../Material_Theme/Theme.js'

let MainContainerStyles = makeStyles((theme) => createStyles({
    pageContainer: {
        display: 'flex',
        height: 'fit-content',
        minHeight: '100vh',
        padding: '2%',
        width: '100vw'
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



export default MainContainerStyles