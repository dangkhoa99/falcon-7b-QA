import { pingModel, robertaMRC } from '@/common/apis'
import { MRCFormValue } from '@/common/interfaces'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { FC, useCallback, useEffect, useState } from 'react'
import { ExampleSelect, ProgressBar, TypeWriter } from './common/components'

export const MRCForm: FC<{}> = () => {
  const [waitModel, setWaitModel] = useState(0)
  const [error, setError] = useState<string | undefined>(undefined)
  const [formValue, setFormValue] = useState<MRCFormValue>({
    context: '',
    question: '',
  })

  const [answer, setAnswer] = useState<{ text: string; isLoading: boolean }>({
    text: '',
    isLoading: false,
  })

  const handleSubmit = () => {
    if (waitModel !== 0) {
      setError('Model is not loaded yet')
      return
    }

    if (!formValue.context || !formValue.question) {
      setError('Context and Question is required')
      return
    }

    setAnswer((prev) => ({ ...prev, isLoading: true }))

    robertaMRC(formValue)
      .then((res) => setAnswer({ text: res.answer, isLoading: false }))
      .catch((err) => {
        console.error(`[ERROR]`, err)
        if (err.response.status !== 503) return
        setWaitModel(err.response.data.estimated_time)
      })
      .finally(() => setAnswer((prev) => ({ ...prev, isLoading: false })))
  }

  const onFormValueChange = useCallback((key: string, payload: any) => {
    setError(undefined)

    switch (key) {
      case 'example':
        setFormValue({ context: payload.context, question: payload.question })
        break
      default:
        setFormValue((prev) => ({ ...prev, [key]: payload }))
        break
    }
  }, [])

  useEffect(() => {
    // Ping model => If model is not loaded, get estimated time
    pingModel(`dangkhoa99/roberta-base-finetuned-squad-v2`).catch((err) => {
      console.error(`[ERROR][PING]`, err)
      if (err.response.status !== 503) return
      setWaitModel(err.response.data.estimated_time)
    })

    return () => {}
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
      }}>
      <Grid container alignItems='center' spacing={2}>
        <Grid item xs={12} sm={12} xl={12}>
          <Typography
            variant='h3'
            fontWeight={900}
            sx={{ textTransform: 'uppercase' }}>
            Machine Reading Comprehension
          </Typography>
        </Grid>

        {waitModel !== 0 ? (
          <>
            <Grid item xs={6} sm={6} xl={6}>
              <ProgressBar time={waitModel} setTime={setWaitModel} />
            </Grid>

            <Grid item xs={6} sm={6} xl={6}>
              <Typography variant='h6' fontWeight={500} textAlign='end'>
                {`Estimated time: ${waitModel}s`}
              </Typography>
            </Grid>
          </>
        ) : (
          <Grid item xs={12} sm={12} xl={12}>
            <Typography variant='h6' fontWeight={500} textAlign='start'>
              Model is Loaded
            </Typography>
          </Grid>
        )}

        <Grid item xs={0} sm={8} xl={8} />

        <Grid item xs={12} sm={4} xl={4}>
          <ExampleSelect onFormValueChange={onFormValueChange} />
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
            onChange={(e) => onFormValueChange('question', e.target.value)}
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
            onChange={(e) => onFormValueChange('context', e.target.value)}
            placeholder='My name is John. I am 20 years old. I am a student.'
          />
        </Grid>

        <Grid item xs={12} sm={12} xl={12}>
          <Button
            disabled={answer.isLoading || waitModel !== 0}
            fullWidth
            disableElevation
            size='medium'
            variant='contained'
            onClick={handleSubmit}>
            {answer.isLoading ? (
              <CircularProgress size={24} />
            ) : (
              <Typography variant='body1' fontWeight={900}>
                Submit
              </Typography>
            )}
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} xl={12}>
          <TypeWriter text={answer.text} />
        </Grid>
      </Grid>
    </Box>
  )
}
