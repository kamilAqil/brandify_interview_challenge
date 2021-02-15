import { makeStyles, createStyles } from '@material-ui/core/styles';
import theme from 'Material_Theme/Theme.js'


let filterCompStyles = makeStyles((theme)=>createStyles({
    checkBoxFill : {
        // fill : `${theme.palette.warm.main} !important`,
        color : `${theme.palette.grey.main} !important`,
        
    }
}))


export default filterCompStyles