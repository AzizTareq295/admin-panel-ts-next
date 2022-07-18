import React from 'react'
import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  inputField: {
    width: '100%',
  },
})

type InputFieldProps = {
  label: string,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  error?: string,
  helperText?: string,
  type?: string,
  disabled?: boolean,
  required?: boolean,
  multiline?: boolean,
  size?: string,
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  onBlur,
  onKeyPress,
  error,
  helperText,
  type = 'text',
  disabled = false,
  required = false,
  multiline = false,
  size = 'small',
}) => {

  const classes = useStyles();

  return (
    <TextField 
      className={`${classes.inputField} h i`}
      label="Outlined" 
      variant="outlined" 
      size='small'
    />
  )
}

export default InputField