import { Box, Grid } from '@mui/material'
import FileUpload from 'components/common/FormItem/FileUpload'
import InputField from 'components/common/FormItem/InputField'
import RadioBox from 'components/common/FormItem/RadioBox'
import SelectBox from 'components/common/FormItem/SelectBox'
import React from 'react'

const FormItem: React.FC = () => {

  const radioBoxItems = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    },
    {
      label: 'Others',
      value: 'others'
    }
  ]

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField
            label="First Name"
            onChange={(e) => {console.log(e.target.value)}}
            name="firstName"
          />
        </Grid>
        <Grid item xs={6}>
          <InputField 
            label="Last Name"
            onChange={(e) => {console.log(e.target.value)}}
            name="lastName"
          />
        </Grid>
        <Grid item xs={6}>
          <InputField 
            label="Phone number"
            type='number'
            onChange={(e) => {console.log(e.target.value)}}
            name="phone"
            max={10}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField 
            label="Email"
            type='email'
            onChange={(e) => {console.log(e.target.value)}}
            name="email"
          />
        </Grid>
        <Grid item xs={6}>
          <FileUpload 
            label="Profile Picture"
            name="profile_picture"
            multiple={false}
            fileType="image"
          />
        </Grid>
        <Grid item xs={6}>
          <SelectBox 
            label="Select Box"
            onChange={(e) => {console.log(e.target.value)}}
            name="select"
            items={[
              {value: 1, label: 'One'},
              {value: 2, label: 'Two'}
            ]}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioBox 
            label="Gender"
            name="gender"
            items={radioBoxItems}
            onChange={(e) => {console.log(e.target.value)}}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormItem