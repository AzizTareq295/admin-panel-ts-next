import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHeader from './TableHeader';

const tableContainerStyle = {
  border: '1px solid #e0e0e0'
}

type TableProps = {
  data: any[],
  columns: string[],
}


const ThemeTable: React.FC<TableProps> = ({data, columns}) => {
  return (
    <TableContainer sx={tableContainerStyle}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader columns={columns}/>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {item.name}
              </TableCell>
              <TableCell>{item.calories}</TableCell>
              <TableCell>{item.fat}</TableCell>
              <TableCell>{item.carbs}</TableCell>
              <TableCell>{item.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ThemeTable