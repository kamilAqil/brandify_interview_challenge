import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from 'Material_Theme/Theme.js'



let SearchCompStyles = makeStyles((theme) => createStyles({
    ButtonBase: {
        // padding : '1%',
        justifyContent: 'space-between',
        width: 'fit-content'
    },
    ButtonBaseSelected: {
        fill : theme.palette.selected.main,
        color : theme.palette.selected.main
    },
    buttonIcon: {
        fill: 'inherit',
        height: '20px',
        marginRight: '5%',
        width: '20px'
    },
    buttonsRow: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '1%',
        marginBottom : '2%',
        marginTop : '2%'
    },
    SearchComp: {
        // alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        borderBottom : `2px solid ${theme.palette.grey.main}`
    },
    searchCompTitle: {
        alignSelf: 'center',
        fontWeight : 'bold'
    },
    searchInput: {
        border: `1px solid ${theme.palette.grey.main}`,
        borderRadius: '0px',
        padding: '2%',
        width: '100%',
        marginBottom : '2%',
        marginTop : '2%',
        "&&&:before": {
            borderBottom: "none"
          },
          "&&:after": {
            borderBottom: "none"
          }
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



export default SearchCompStyles