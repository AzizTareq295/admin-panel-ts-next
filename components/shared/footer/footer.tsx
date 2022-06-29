import React from 'react'
import Typography from '@mui/material/Typography'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <Typography align='center' mb={0} paragraph={true} sx={
        {
          fontSize: '12px',
          color: 'text.secondary',
        }
      }>{new Date().getFullYear()} &copy; Admin Panel</Typography>
    </footer>
  )
}

export default Footer