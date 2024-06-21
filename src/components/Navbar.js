import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1}}>
        Dynamic Dashboard
      </Typography>
      <Button color="inherit" component={Link} to="/">Table</Button>
      <Button color="inherit" component={Link} to="/chart">Chart</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
