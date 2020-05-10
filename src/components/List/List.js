import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from "@material-ui/core/Divider";
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


export const AppList = ({ items, onCheckItem }) => {
    return (
        <List>
            {items && items.map((item) => (
                <>
                    <ListItem key={item.id} button onClick={() => onCheckItem(item.id)}>
                        <ListItemIcon>
                            <Checkbox
                                color="primary"
                                edge="start"
                                checked={item.checked}
                                icon={<FavoriteBorder />}
                                checkedIcon={<Favorite />}
                            />
                        </ListItemIcon>
                        <ListItemText primary={item.name} secondary={item.description} />
                    </ListItem>
                    <Divider />
                </>
            ))}
        </List>
    );
};
