import React  from "react";
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";


// styles
import useStyles from "./styles";

export default function Header(props) {
  var classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
          Neil Shah - ADM CS4
        </Typography>
        <div className={classes.grow} />
        </Toolbar>
    </AppBar>
  );
}
