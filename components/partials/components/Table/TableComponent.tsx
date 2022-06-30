import React from 'react'
import ThemeTable from 'components/common/Table';
import { Box } from '@mui/system';
import { TableCell, TableRow } from '@mui/material';

type tableColTd = {
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
}

function createData(
  { name, calories, fat, carbs, protein }: tableColTd
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData({name:'Frozen yoghurt', calories:159, fat:6.0, carbs:24, protein: 4.0}),
  createData({name:'Ice cream sandwich', calories:237, fat:9.0, carbs:37, protein: 4.3}),
  createData({name:'Eclair', calories:262, fat:16.0, carbs:24, protein: 6.0}),
  createData({name:'Cupcake', calories:305, fat:3.7, carbs:67, protein: 4.3}),
  createData({name:'Gingerbread', calories:356, fat:16.0, carbs:49, protein: 3.9})
];

const tableHeaderTitles = ["Name","Calories","Fat","Carbs","Protein"];

const TableComponent = () => {

  const tableRows = rows.map((row: tableColTd, index) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>
        {row.name}
      </TableCell>
      <TableCell>
        {row.calories}
      </TableCell>
      <TableCell>
        {row.fat}
      </TableCell>
      <TableCell>
        {row.carbs}
      </TableCell>
      <TableCell>
        {row.protein}
      </TableCell>
    </TableRow>
  ))

  return (
    <Box p={2}>
      <ThemeTable tableHeaders={tableHeaderTitles} rows={tableRows} />
    </Box>
  )
}

export default TableComponent