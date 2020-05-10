import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { DatePicker } from "@material-ui/pickers";
import Snackbar from '@material-ui/core/Snackbar';

import { AppHeader } from './components/Header/Header';
import { AppButtons } from './components/Buttons/Buttons';
import { AppList } from './components/List/List';


export default function App() {
    const [itemsData, setData] = useState([
            { id: 1, name: 'Элемент 1', description: 'Сложное описание 1', checked: false },
            { id: 2, name: 'Элемент 2', description: 'Сложное описание 2', checked: false },
            { id: 3, name: 'Элемент 3', description: 'Сложное описание 3', checked: false },
            { id: 4, name: 'Элемент 4', description: 'Сложное описание 4', checked: false },
        ]);
    const [isModalOpen, onOpenModal] = useState(false);
    const [selectedDate, setDateCalendar] = useState(new Date());
    const [isOpenSnackbar, onOpenSnackbar] = useState(false);

    const onCheckHandler = (id) => {
        const itemDataIndex = itemsData.findIndex(item => item.id === id);
        const newItemsData = [...itemsData];
        const itemData = itemDataIndex !== undefined && newItemsData[itemDataIndex];

        if (itemData && itemData.checked) {
            itemData.checked = false;
            newItemsData[itemDataIndex] = itemData;
            setData(newItemsData);
        } else {
            itemData.checked = true;
            newItemsData[itemDataIndex] = itemData;
            setData(newItemsData);
        }
    };

    const onDeleteCheckedItems = () => {
      const newItemsData = itemsData.filter(item => !item.checked);
      setData(newItemsData);
    };

    const onAddElement = (item) => {
        const sortItems = itemsData.concat().sort((a, b) => b.id - a.id);
        const lastId = (sortItems && sortItems[0] && sortItems[0].id) || 0;
        item.id = lastId + 1;
        const newItemsData = itemsData.concat();
        newItemsData.push(item);
        setData(newItemsData);
    };

  return (
    <div>
        <AppHeader />
        <div className="container">
            <AppButtons
                itemsChecked={itemsData.filter(item => item.checked)}
                onDeleteCheckedItems={onDeleteCheckedItems}
                onAddElement={onAddElement}
                onOpenModal={() => onOpenModal(true)}
            />
            <AppList items={itemsData} onCheckItem={onCheckHandler} />
        </div>

        <Dialog
            open={isModalOpen}
            onClose={() => onOpenModal(false)}
        >
            <DialogTitle>Выберите дату!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Я крутое модальное окно!
                </DialogContentText>
                <DialogContentText>
                    <DatePicker
                        label="Выберите дату!"
                        format="dd.MM.yyyy"
                        value={selectedDate}
                        onChange={(date) => { setDateCalendar(date); onOpenSnackbar(true) }}
                        animateYearScrolling
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={() => onOpenModal(false)}>Окей!</Button>
            </DialogActions>
        </Dialog>

        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            key={'bottom,center'}
            open={isOpenSnackbar}
            onClose={() => onOpenSnackbar(false)}
            message={selectedDate.toString()}
            autoHideDuration={3000}
        />
    </div>
  );
}
