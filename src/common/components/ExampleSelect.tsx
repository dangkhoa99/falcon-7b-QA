import { FC, useMemo, useState } from 'react'
import { EXAMPLES } from '../constants'
import { Autocomplete, TextField } from '@mui/material'

export const ExampleSelect: FC<{
  onFormValueChange: (key: string, payload: any) => void
}> = ({ onFormValueChange }) => {
  const [example, setExample] = useState<string>('')

  const currExample = useMemo(
    () => EXAMPLES.find((data) => data.code === example) || null,
    [example],
  )
  return (
    <Autocomplete
      disableClearable={!!currExample}
      value={currExample}
      options={EXAMPLES}
      onChange={(_, newValue) => {
        if (!newValue) return
        setExample(newValue.code)
        onFormValueChange('example', newValue)
      }}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      getOptionLabel={(option) => option?.code}
      renderInput={(params) => (
        <TextField {...params} size='small' label='Examples' />
      )}
    />
  )
}
