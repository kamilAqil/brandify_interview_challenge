import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from 'Material_Theme/Theme.js'



let SearchCompStyles = makeStyles((theme)=>createStyles({
    buttonIcon: {
        height: '20px',
        width: '20px',
        marginRight : '5%',
        color : 'red'
    },
    ButtonBase : {
        // padding : '1%',
        justifyContent : 'space-between',
        width : 'fit-content'
    },
    ButtonBaseSelected : {
        color : 'red'
    },
    buttonsRow: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '1%'
    },
    SearchComp: {
        // alignItems: 'center',
        display: 'flex',
        flexFlow: 'column'
    },
    searchCompTitle: {
        alignSelf: 'center'
    },
    searchInput: {
        border: `1px solid ${theme.palette.grey.main}`,
        borderRadius: '0px',
        padding: '2%',
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



export default SearchCompStyles