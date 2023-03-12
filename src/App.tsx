import React from 'react';
import Router from './pages/Router';
import {Helmet} from 'react-helmet';

// create theme
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

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
    const queryClient = new QueryClient();
    return (
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <div className="App">
                        <Router/>
                    </div>
                </ThemeProvider>
            </QueryClientProvider>
    );
}

export default App;
