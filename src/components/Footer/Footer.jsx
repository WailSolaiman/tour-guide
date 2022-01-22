import { Toolbar, Typography } from "@material-ui/core"

import useStyles from "../Footer/styles.js"

const Footer = () => {
  const classes = useStyles()

  return (
    <footer position="relative" className={classes.footer}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="subtitle1" className={classes.title}>
          Created by Wail Solaiman 2022 - All rights reserved.
        </Typography>
      </Toolbar>
    </footer>
  )
}

export default Footer
