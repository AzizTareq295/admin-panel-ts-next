import { Box, Grid } from '@mui/material'
import InputField from 'components/common/FormItem/InputField'
import React from 'react'

const FormItem: React.FC = () => {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField />
        </Grid>
        <Grid item xs={6}>
          <InputField />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormItem