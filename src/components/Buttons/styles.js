import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        marginRight: '15px',
    },
    btnDelete: {
        color: '#ffffff',
        backgroundColor: 'red',
        '&:hover': {
            color: '#000000',
        }
    },
    btnGoYa: {
        backgroundColor: 'lightgrey',
    },
    btnAdd: {
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        backgroundColor: 'lightblue',
        '&:hover': {
            backgroundColor: 'blue',
            color: '#ffffff',
        }
    },
    popover: {
        width: '300px',
        padding: '25px',
    }
}));
