import { Outlet, useNavigate } from 'react-router';
import { Box, Button, Stack, Typography } from '@mui/material';

import { LocalizationProvider } from '@/providers';
import { Flare } from '@mui/icons-material';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <LocalizationProvider>
      <Stack spacing={4}>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          alignItems='center'
          paddingX={20}
        >
          <Box display='flex' flexDirection='column' gap={6} margin={6}>
            <Typography variant='h3'>Welcome to Book Appointment!</Typography>
            <Typography variant='h6'>
              Effortlessly manage your time with our simple appointment booking
              system.
              <br /> Browse available slots, select your preferred time, and
              book in just a few clicks.
              <br />
              Stay organized, stay on time—your schedule made simple!
            </Typography>
          </Box>
          <Button
            variant='contained'
            color='primary'
            onClick={() => navigate('/book-slot')}
          >
            Book a Slot
          </Button>
        </Box>
        <Box 
        paddingX={20}
        >
          <Outlet />
        </Box>
      </Stack>
    </LocalizationProvider>
  );
};
