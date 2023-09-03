import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { EXAMPLES } from '../constants'
import { Autocomplete, TextField } from '@mui/material'

export const ExampleSelect: FC<{
  onFormValueChange: (key: string, value: any) => void
  setIsReadonly: Dispatch<SetStateAction<boolean>>
}> = ({ onFormValueChange, setIsReadonly }) => {
  const [example, setExample] = useState(1)

  const currExample = useMemo(
    () => EXAMPLES.find((data) => data.id === example) || null,
    [example],
  )

  useEffect(() => {
    onFormValueChange('example', currExample)

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Autocomplete
      disableClearable={!!currExample}
      value={currExample}
      options={EXAMPLES}
      onChange={(_, newValue) => {
        if (!newValue) {
          return
        }
        setExample(newValue.id)
        onFormValueChange('example', newValue)
        setIsReadonly(newValue.code !== 'Custom')
      }}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      getOptionLabel={(option) => option?.code}
      renderInput={(params) => (
        <TextField {...params} size='small' label='Examples' />
      )}
      ListboxProps={{ style: { maxHeight: 200 } }}
    />
  )
}
