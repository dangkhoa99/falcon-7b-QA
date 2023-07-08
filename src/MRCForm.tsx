import { FC, useEffect, useMemo, useState } from 'react'
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { BASE_URL, EXAMPLES } from '@/common/constants'
import { MRCFormValue } from '@/common/interfaces'
import { pingModel, robertaMRC } from '@/common/apis'
import { ProgressBar, TypeWriter } from './common/components'

export const MRCForm: FC<{}> = () => {
  const [waitModel, setWaitModel] = useState(0)
  const [example, setExample] = useState<string>('')
  const [formValue, setFormValue] = useState<MRCFormValue>({
    context: '',
    question: '',
  })

  const [answer, setAnswer] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const currExample = useMemo(
    () => EXAMPLES.find((data) => data.code === example) || null,
    [example],
  )

  const handleSubmit = () => {
    console.log('submit', formValue)

    if (!formValue.context || !formValue.question) {
      setError('Context and Question is required')
      return
    }

    setIsLoading(true)

    robertaMRC(formValue)
      .then((res) => {
        console.log(`[POST]: >>`, res)
        setAnswer(res.answer)
      })
      .catch((err) => {
        // Error 503 => error.response.data => { error: 'model is loading' , 'estimated_time': 20 }
        console.error(`[ERROR]: >>`, err)
      })

    setIsLoading(false)
  }

  useEffect(() => {
    pingModel(`${BASE_URL}/dangkhoa99/roberta-base-finetuned-squad-v2`).catch(
      (err) => {
        console.error(`[ERROR]: >>`, err)
        if (err.response.status !== 503) return
        setWaitModel(err.response.data.estimated_time)
      },
    )

    return () => {}
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
      }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} xl={12}>
          <Typography
            variant='h3'
            fontWeight={900}
            sx={{ textTransform: 'uppercase' }}>
            Machine Reading Comprehension
          </Typography>
        </Grid>

        <Grid item xs={6} sm={6} xl={6}>
          {waitModel !== 0 ? (
            <ProgressBar time={1000} setTime={setWaitModel} />
          ) : (
            <Typography variant='h6' fontWeight={500} textAlign='start'>
              Model is Loaded
            </Typography>
          )}
        </Grid>

        <Grid item xs={6} sm={6} xl={6}>
          <Typography variant='h6' fontWeight={500} textAlign='end'>
            {waitModel !== 0 ? `Estimated time: ${waitModel}s` : ''}
          </Typography>
        </Grid>

        <Grid item xs={0} sm={8} xl={8} />

        <Grid item xs={12} sm={4} xl={4}>
          <Autocomplete
            disableClearable={!!currExample}
            value={currExample}
            options={EXAMPLES}
            onChange={(_, newValue) => {
              if (!newValue) return

              setExample(newValue.code)
              setError(undefined)

              setFormValue({
                context: newValue.context,
                question: newValue.question,
              })
            }}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            getOptionLabel={(option) => option?.code}
            renderInput={(params) => (
              <TextField {...params} size='small' label='Examples' />
            )}
          />
        </Grid>

        {error && (
          <Grid item xs={12} sm={12} xl={12}>
            <Alert severity='error'>{error}</Alert>
          </Grid>
        )}

        <Grid item xs={12} sm={12} xl={12}>
          <TextField
            required
            fullWidth
            variant='outlined'
            label='Question'
            value={formValue.question}
            onChange={(e) => {
              setError(undefined)
              setFormValue((prev) => ({ ...prev, question: e.target.value }))
            }}
            placeholder='How old is John?'
          />
        </Grid>

        <Grid item xs={12} sm={12} xl={12}>
          <TextField
            required
            fullWidth
            variant='outlined'
            multiline
            rows={10}
            label='Context'
            value={formValue.context}
            onChange={(e) => {
              setError(undefined)
              setFormValue((prev) => ({ ...prev, context: e.target.value }))
            }}
            placeholder='My name is John. I am 20 years old. I am a student.'
          />
        </Grid>

        <Grid item xs={12} sm={12} xl={12}>
          <Button
            disabled={isLoading}
            fullWidth
            disableElevation
            size='large'
            variant='contained'
            onClick={handleSubmit}
            sx={{ fontSize: 16, fontWeight: 900 }}>
            Submit
          </Button>
        </Grid>

        {isLoading && (
          <Grid item xs={12} sm={12} xl={12}>
            <CircularProgress />
          </Grid>
        )}

        <Grid item xs={12} sm={12} xl={12}>
          <TypeWriter text={answer} />
        </Grid>
      </Grid>
    </Box>
  )
}
