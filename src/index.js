import React from 'react';
import ReactDOM from 'react-dom';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import './index.css';
import App from './App';
import { theme } from './theme';


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <App />
        </MuiPickersUtilsProvider>
    </ThemeProvider>,
  document.getElementById('root')
);
