import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Paper } from '@mui/material';
import useDataTable from '../hooks/useDataTable';

const DataTable = () => {
  const { order, orderBy, handleSortRequest, sortedData } = useDataTable();
  
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {['ID', 'Title', 'User ID'].map((col) => (
              <TableCell key={col}>
                <TableSortLabel
                  active={orderBy === col.toLowerCase().replace(' ', '')}
                  direction={orderBy === col.toLowerCase().replace(' ', '') ? order : 'asc'}
                  onClick={() => handleSortRequest(col.toLowerCase().replace(' ', ''))}
                >
                  {col}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default DataTable;
