import { makeStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import lime from '@material-ui/core/colors/lime';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';
import deepOrange from '@material-ui/core/colors/deepOrange';
import cyan from '@material-ui/core/colors/cyan';


export const useStyles = makeStyles(() => ({
    mainIcon: {
        color: pink[500],
        '&:hover': {
            color: purple[600],
        }
    },
    contactsIcon: {
        color: lime[400],
        '&:hover': {
            color: teal[400],
        }
    },
    helpIcon: {
        color: deepOrange[500],
        '&:hover': {
            color: cyan[500],
        }
    },
    callIcon: {
        color: cyan[500],
        '&:hover': {
            color: deepOrange[500],
        }
    },
    itemIconEnd: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexGrow: 1,
    },
}));
