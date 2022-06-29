import React from 'react'
import TableComponent from 'components/partials/components/Table/TableComponent'
import { Box, Paper, Typography } from '@mui/material'
import PageHeader from 'components/common/PageHeader'
import BreadCrumb from 'components/common/PageBreadCrumb/BreadCrumb'

const Table: React.FC = () => {

  const breadCrumbItems = [
    <Typography key={1} fontSize={'12px'}>
      Components
    </Typography>,
    <Typography key={2} fontSize={'12px'}>
      Table
    </Typography>
  ]

  return (
    <div className='table-page'>
      <Box p={2}>
        <BreadCrumb listItems={breadCrumbItems} />
        <Paper>
          <PageHeader title='Table Page' />
          <TableComponent />
        </Paper>
      </Box>
    </div>
  )
}

export default Table