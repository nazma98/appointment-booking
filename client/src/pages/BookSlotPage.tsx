import moment from 'moment';

import { Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { useSlots } from '@/api/queries';
import { Flare } from '@mui/icons-material';

export const BookSlotPage = () => {
  const { selectedDate, setSelectedDate, slots } = useSlots();

  return (
    <Box>
      <Typography variant='h5' textAlign='center'>
        Book an Appointment
      </Typography>
      <Box>
        <Box display='flex' flexDirection='column' justifyContent='space-around' alignItems='center'>
          <Typography variant='h6'>Choose a date and time :</Typography>
          <DatePicker
            value={moment(selectedDate)}
            onChange={(value) => setSelectedDate(value ? value.toDate() : null)}
          />
        </Box>
        <Box gap={6}>
          <Typography textAlign='center'>Available slots</Typography>
          <Box textAlign='center'>
            {slots.map((slot) => (
              <Box key={slot._id}>
                <Typography
                  variant='body1'
                  sx={{
                    display: 'inline',
                    color: 'white',
                    backgroundColor: 'blue',
                    borderRadius: '4px',
                    paddingX: '20px',
                  }}
                >
                  {slot.name}
                </Typography>
                <Typography>{slot.startTime}</Typography>
                <Typography>{slot.duration} minutes</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
