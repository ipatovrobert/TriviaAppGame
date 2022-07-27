import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Question from './components/Question';
import Results from './components/Results';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const theme = createTheme();
  return (
    <Box>
      <ErrorBoundary>
        <CssBaseline />
        <Grid
          container
          direction="column"
          alignItems="center"
          pt={theme.spacing(2)}
        >
          <Paper sx={{ height: 667, width: 375 }} elevation={3}>
            <BrowserRouter>
              <Routes>
                <Route index element={<Welcome />} />
                <Route path="/question/:id" element={<Question />} />
                <Route path="/results" element={<Results />} />
              </Routes>
            </BrowserRouter>
          </Paper>
        </Grid>
      </ErrorBoundary>
    </Box>
  );
}

export default App;
