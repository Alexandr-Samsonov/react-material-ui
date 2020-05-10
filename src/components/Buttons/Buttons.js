import React, {useState} from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';

import AppForm from '../Form/Form';
import { useStyles } from './styles';


export const AppButtons = ({ itemsChecked, onDeleteCheckedItems, onAddElement, onOpenModal }) => {
    const classes = useStyles();

    const [anchorElPopover, setAnchorPopover] = useState(null);

    const isOpenPopover = Boolean(anchorElPopover);
    const onOpenPopover = (event) => {
        if (!isOpenPopover) {
            setAnchorPopover(event.currentTarget);
        } else {
            setAnchorPopover(null);
        }
    };

    return (
        <div className={classes.root}>
            <Button
                className={classes.btn}
                color="primary"
                variant="contained"
                onClick={onOpenPopover}
            >
                Добавить элемент
            </Button>
            <Button
                className={clsx(classes.btn, classes.btnDelete)}
                variant="contained"
                disabled={itemsChecked.length === 0}
                onClick={onDeleteCheckedItems}
            >
                Удалить выбранные элементы
            </Button>
            <Button
                className={clsx(classes.btn, classes.btnGoYa)}
                variant="contained"
                href="//ya.ru"
                target="_blank"
                startIcon={<FingerprintIcon />}
            >
                Перейти на YA
            </Button>
            <IconButton className={classes.btnAdd} onClick={() => onOpenModal()}>
                <AddIcon />
            </IconButton>

            <Popover
                classes={{
                    paper: classes.popover
                }}
                open={isOpenPopover}
                anchorEl={anchorElPopover}
                onClose={onOpenPopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <AppForm onAddElement={(itemData) => {
                    if (itemData.name) { onOpenPopover() }
                    onAddElement(itemData)
                }} />
            </Popover>
        </div>
    );
};
