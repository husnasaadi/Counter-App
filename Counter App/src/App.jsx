import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Counter App/Counter/CounterSlice';
import { Button, Container, Typography, Box } from '@mui/material'; // Importing Material-UI components

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Box 
        sx={{ 
          p: 3, 
          border: '2px solid #003366', 
          borderRadius: '10px', 
          backgroundColor: '#f9f9f9', 
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Counter App
        </Typography>

        <Typography variant="h1" style={{ color: '#003366' }} gutterBottom>
          {count}
        </Typography>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => dispatch(increment())} 
          sx={{ margin: 1, padding: '10px 20px', fontSize: '16px' }}
        >
          Increment
        </Button>
        
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => dispatch(decrement())} 
          sx={{ margin: 1, padding: '10px 20px', fontSize: '16px' }}
        >
          Decrement
        </Button>

        <Typography variant="body2" style={{ marginTop: '20px', color: '#666' }}>
          The value will not go below 0.
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
