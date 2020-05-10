import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import SvgIcon from '@material-ui/core/SvgIcon';
import ContactsIcon from '@material-ui/icons/Contacts';
import HelpIcon from '@material-ui/icons/Help';
import CallIcon from '@material-ui/icons/Call';

import { useStyles } from './styles';


export const AppDrawer = ({ onToggleDrawerHandler, isOpenDrawer }) => {
    const classes = useStyles();

    return (
        <Drawer anchor="left" open={isOpenDrawer} onClose={onToggleDrawerHandler}>
            <MenuItem>
                <ListItemIcon>
                    <SvgIcon className={classes.mainIcon}>
                        <HomeIcon />
                    </SvgIcon>
                </ListItemIcon>
                <Typography variant="subtitle1">
                    Главная
                </Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <SvgIcon className={classes.contactsIcon}>
                        <ContactsIcon />
                    </SvgIcon>
                </ListItemIcon>
                <Typography  variant="subtitle1">
                    Контакты
                </Typography>
            </MenuItem>

            <MenuItem>
                <Typography  variant="subtitle1">
                    О нас
                </Typography>
                <ListItemIcon className={classes.itemIconEnd}>
                    <SvgIcon className={classes.helpIcon}>
                        <HelpIcon />
                    </SvgIcon>
                </ListItemIcon>
            </MenuItem>
            <MenuItem>
                <Typography  variant="subtitle1">
                    Написать нам
                </Typography>
                <ListItemIcon className={classes.itemIconEnd}>
                    <SvgIcon className={classes.callIcon}>
                        <CallIcon />
                    </SvgIcon>
                </ListItemIcon>
            </MenuItem>
        </Drawer>
    );
};
