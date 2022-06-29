import React from 'react'
import ThemeTable from 'components/common/Table';
import { Box } from '@mui/system';


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const columnLists = [
  "Name", "Calories", "Fat", "Carbs", "Protein"
]

const TableComponent = () => {
  return (
    <Box p={2}>
      <ThemeTable columns={columnLists} data={rows} />
    </Box>
  )
}

export default TableComponent