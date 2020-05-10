import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

import { AppDrawer } from '../Drawer/Drawer';
import { useStyles } from './styles';


export const AppHeader = () => {
  const classes = useStyles();

  const [anchorMoreBtn, setAnchorMoreBtn] = useState(null);
  const [anchorDrawer, setAnchorDrawer] = useState(null);

  const isOpenMorePopover = Boolean(anchorMoreBtn);
  const onOpenMoreBtnHandler = (event) => {
    if (!isOpenMorePopover) {
      setAnchorMoreBtn(event.currentTarget);
    } else {
      setAnchorMoreBtn(null);
    }
  };

  const isOpenDrawer = Boolean(anchorDrawer);
  const onToggleDrawerHandler = (event) => {
    if (!isOpenDrawer) {
      setAnchorDrawer(event.currentTarget);
    } else {
      setAnchorDrawer(null);
    }
  };

  return (
      <AppBar className={classes.btnMenu}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" onClick={onToggleDrawerHandler}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Material UI Приложение
          </Typography>
          <IconButton edge="end" color="inherit" onClick={onOpenMoreBtnHandler}>
            <MoreIcon />
          </IconButton>

          <Menu open={isOpenMorePopover} anchorEl={anchorMoreBtn} onClose={onOpenMoreBtnHandler}>
            <MenuItem>
              <Typography>
                One
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography>
                Two
              </Typography>
            </MenuItem>
          </Menu>

          <AppDrawer onToggleDrawerHandler={onToggleDrawerHandler} isOpenDrawer={isOpenDrawer} />
        </Toolbar>
      </AppBar>
  );
};
