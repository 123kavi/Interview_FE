import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <header>
      <nav>
      <IconButton
  color="inherit"
  aria-label="open drawer"
  edge="start"
  onClick={toggleDrawer(true)}
  sx={{ mr: 2, fontSize: '2.0rem' }}
>

  <span>☰</span>
</IconButton>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <List>
            <ListItem button key="Home" component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="Massage List" component={Link} to="/massage-list" onClick={toggleDrawer(false)}>
              <ListItemText primary="Massage List" />
            </ListItem>
          </List>
        </Drawer>
       
      </nav>
    </header>
  );
};

export default Header;
