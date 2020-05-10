import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            containedPrimary: {
                backgroundColor: 'green',
                '&:hover': {
                    backgroundColor: 'black',
                },
                '&:disabled': {
                    backgroundColor: 'pink',
                }
            },
        }
    },
});
