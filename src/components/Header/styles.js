import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  title: {
    display: "none",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
}))
