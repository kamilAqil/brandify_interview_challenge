import logo from './logo.svg';
import './App.css';

//third party
import {Grid} from '@material-ui/core'
import classNames from 'classnames'

// styles
import MainContainerStyles from './Page_Styles/MainContainerStyle.js'

// store locator
import StoreLocator from './Store_Locator/StoreLocator.js'



function App() {


  let s = MainContainerStyles()

  return (
    <Grid
      id='pageContainer'
      className={classNames(`${s.wireFrameBorderOne} ${s.pageContainer}`)}
    >
      <StoreLocator/>
    </Grid>
  );
}

export default App;
