import React from 'react'
import PageHeader from 'components/common/PageHeader'
import BreadCrumb from 'components/common/PageBreadCrumb/BreadCrumb'
import { Box, Paper, Typography } from '@mui/material'
import FormItem from 'components/partials/components/Form/FormItem'

const FormPage: React.FC = () => {

  const breadCrumbItems = [
    <Typography key={1} fontSize={'12px'}>
      Components
    </Typography>,
    <Typography key={2} fontSize={'12px'}>
      Form
    </Typography>
  ]

  return (
    <div className='table-page'>
      <Box p={2}>
        <BreadCrumb listItems={breadCrumbItems} />
        <Paper>
          <PageHeader title='Form Page' />
          <FormItem />
        </Paper>
      </Box>
    </div>
  )
}

export default FormPage