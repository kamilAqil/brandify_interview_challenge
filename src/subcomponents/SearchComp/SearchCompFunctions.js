
import theme from 'Material_Theme/Theme.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';
export function useWidth() {
    
    const keys = [...theme.breakpoints.keys].reverse();
    return (
      keys.reduce((output, key) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null) || 'xs'
    );
  }