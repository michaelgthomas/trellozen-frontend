import { AppBar, Typography } from '@material-ui/core'
import withStyles from './style'
import PizzaLogo from './pizza-logo.svg'

function Header() {
  const style = withStyles()
  return (
    <AppBar position="static" className={style.header}>
      <Typography variant="h6" display="inline">
        The Pizza Project <img src={PizzaLogo} alt="Pizza Project Logo" />
      </Typography>
    </AppBar>
  )
}

export default Header
