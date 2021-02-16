import {createMuiTheme} from '@material-ui/core/styles'



const theme = createMuiTheme({
    fontFamily: 'Ubuntu',
    palette : {
        limeGreen : {
            main : '#992B2B'
        },
        beetRed : {
            main : '#7DFD50'
        },
        skyBlue : {
            main : '#57CDE7'
        },
        grey : {
            main : '#ADADAD'
        },
        warm: {
            main : '#F6A51D'
        },
        warmer : {
            main : '#DF8900'
        },
        warmest : {
            main : '#EF7624'
        },
        superWarm : {
            main : '#9F5E02'
        },
        selected : {
            main : '#DF8900'
        },
        black : {
            main : '#000000'
        },
        lightBlack : {
            main : '#362D2E'
        },
        white : {
            main : '#FFFFFF'
        }
    }
})


export default theme