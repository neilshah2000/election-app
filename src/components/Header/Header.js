import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";


// styles
import useStyles from "./styles";

// context
import {
  useLayoutState,
  useLayoutDispatch,
} from "../../context/LayoutContext";

export default function Header(props) {
  var classes = useStyles();



  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
          React Material Admin
        </Typography>
        <div className={classes.grow} />
        </Toolbar>
    </AppBar>
  );
}
