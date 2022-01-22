import { AppBar, Toolbar, Typography } from "@material-ui/core"

import useStyles from "./styles.js"

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h3" className={classes.title}>
          Tour Guide
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
