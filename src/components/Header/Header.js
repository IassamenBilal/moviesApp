import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <img src="/images/logo.png" alt="logo" className="logo" />
          <Typography
            align="center"
            variant="h4"
            component="div"
            className="header-title"
          >
            Movies App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
