import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  footer: {
    marginTop: "15px",
    backgroundColor: "black",
    color: "white",
  },
  title: {
    display: "none",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}))
