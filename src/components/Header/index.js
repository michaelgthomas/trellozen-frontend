import { AppBar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PizzaLogo from './pizza-logo.svg'

const styles = {
    root: {
      background: '#343951',
      color: "white",
      height: 48,
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

const Header = ({classes}) => {
    return (
        <AppBar position="static" className={classes.root}>
    <Typography variant="h6" display="inline">
      The Pizza Project <img src={PizzaLogo} alt="Pizza Project Logo" />
    </Typography>
    
</AppBar>
    )
}

export default withStyles(styles)(Header)