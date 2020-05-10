import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';


export const useStyles = makeStyles(() => ({
    btnMenu: {
        backgroundColor: indigo[700],
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));
