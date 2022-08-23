import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  inputField: {
    width: '100%',

    '& label': {
      fontSize: '14px',
    }
  },
})

type selectItemTypes = {
  label: string,
  value: number,
}

type propTypes = {
  label: string,
  name: string,
  value?: string,
  onChange?: (event: SelectChangeEvent<string>) => void,
  items: Array<selectItemTypes>,
  size?: "small" | "medium",
}

const SelectBox: React.FC<propTypes> = ({
  label,
  name,
  value,
  onChange,
  items,
  size = "small",
}) => {

  const classes = useStyles()

  return (
    <FormControl size={size} className={classes.inputField}>
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {
          items.map((item, index)=> (
            <MenuItem key={`selectbox-item-${index}-item-${item.label}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default SelectBox