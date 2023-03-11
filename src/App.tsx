import React from 'react';
import Router from './pages/Router';

// create theme
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#28286c',
        },
        secondary: {
             main: '#8dacb4',
        },
    }
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router/>
            </div>
        </ThemeProvider>
    );
}

export default App;
