import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { weekDays, timeSlots, daySlots } from '@/data';
import { Box, Button } from '@mui/material';

type SlotTableProps = {};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  textAlign: 'center',
  border: '1px solid rgba(224, 224, 224, 1)',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function SlotTable({}: SlotTableProps) {
  return (
    <Box sx={{ mt: 3 }}>
      <TableContainer  sx={{ minWidth: 700, maxHeight:550 }} component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell component="th" scope="row" sx={{ width: 180 }}>
                Time
              </StyledTableCell>
              {weekDays.map((day) => (
                <StyledTableCell>{day}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSlots.map((slot) => (
              <StyledTableRow key={slot}>
                <StyledTableCell>{slot}</StyledTableCell>
                {daySlots.map((daySlot) => (
                  <StyledTableCell
                    key={daySlot}
                    sx={{
                      position: 'relative',
                      '&:hover .hover-button': { display: 'inline-flex' },
                    }}
                  >
                    <Button
                      className="hover-button"
                      variant="text"
                      color="primary"
                      sx={{
                        display: 'none',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: 'auto',
                        padding: 2,
                        fontSize: '0.75rem',
                        textTransform: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      + Reserve{' '}
                    </Button>
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', flexDirection:'row-reverse', gap: 2 }}>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
