import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from 'Material_Theme/Theme.js'



let SearchCompStyles = makeStyles((theme) => createStyles({
    ButtonBase: {
        // padding : '1%',
        justifyContent: 'space-between',
        width: 'fit-content'
    },
    ButtonBaseSelected: {
        color: theme.palette.selected.main,
        fill: theme.palette.selected.main
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
        marginBottom: '2%',
        marginTop: '2%',
        padding: '1%'
    },
    filterByButton: {
        position: 'relative',
        right: '5%',
        color : theme.palette.grey.main,
        fontWeight : 'bold'
    },
    inputAndFilter: {
        [theme.breakpoints.up("xs")]: {},
        [theme.breakpoints.up("sm")]: {},
        [theme.breakpoints.up("md")]: {
            justifyContent: 'space-between'
        },
        [theme.breakpoints.up("lg")]: {},
        display: 'flex'
    },
    SearchComp: {
        [theme.breakpoints.up("xs")]: {},
        [theme.breakpoints.up("sm")]: {},
        [theme.breakpoints.up("md")]: {
            backgroundColor: theme.palette.white.main,
            display: 'flex',
            flexFlow: 'column',
            height: 'fit-content',
            justifyContent: 'space-evenly',
            minHeight: '110px',
            position: 'fixed',
            width: 'inherit',
            zIndex: '2'
        },
        [theme.breakpoints.up("lg")]: {},
        borderBottom: `2px solid ${theme.palette.grey.main}`,
        // alignItems: 'center',
        display: 'flex',
        flexFlow: 'column'
    },
    filterButton : {
        color : theme.palette.grey
    },
    searchCompTitle: {
        [theme.breakpoints.up("xs")]: {},
        [theme.breakpoints.up("sm")]: {},
        [theme.breakpoints.up("md")]: {
            alignSelf: 'flex-start'
        },
        [theme.breakpoints.up("lg")]: {},
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    searchForm: {
        height: '',
        width: '60%'
    },
    searchInput: {
        [theme.breakpoints.up("xs")]: {},
        [theme.breakpoints.up("sm")]: {},
        [theme.breakpoints.up("md")]: {
            height: '',
            width: '100%'
        },
        [theme.breakpoints.up("lg")]: {},
        "&&:after": {
            borderBottom: "none"
        },
        "&&&:before": {
            borderBottom: "none"
        },
        border: `1px solid ${theme.palette.grey.main}`,
        borderRadius: '0px',
        marginBottom: '2%',
        marginTop: '2%',
        padding: '2%',
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



export default SearchCompStyles