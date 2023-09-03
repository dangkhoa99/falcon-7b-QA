import { robertaMRC } from '@/common/apis'
import { ExampleSelect, TypeWriter } from '@/common/components'
import { MRCFormValue } from '@/common/interfaces'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { FC, useCallback, useState } from 'react'
import Highlighter from 'react-highlight-words'

const ChatForm: FC<{}> = () => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.only('xs'))
  const [isReadonly, setIsReadonly] = useState(true)
  const [showHighlight, setShowHighlight] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const [formValue, setFormValue] = useState<MRCFormValue>({
    context: '',
    question: '',
  })
  const [answer, setAnswer] = useState<{ text: string; isLoading: boolean }>({
    text: '',
    isLoading: false,
  })

  const onFormValueChange = useCallback((key: string, value: any) => {
    setError(undefined)

    switch (key) {
      case 'example':
        setFormValue({ context: value.context, question: value.question })
        setAnswer({ text: '', isLoading: false })

        break
      default:
        setFormValue((prev) => ({ ...prev, [key]: value }))
        break
    }
  }, [])

  const handleSubmit = useCallback(() => {
    if (!formValue.context || !formValue.question) {
      setError('Context and Question is required')
      return
    }

    setAnswer({ text: '', isLoading: true })

    robertaMRC(formValue)
      .then((res) => setAnswer({ text: res.answer, isLoading: false }))
      .catch((err) => {
        console.error(`[ERROR]`, err)
        if (err.response.status !== 503) return
      })
      .finally(() => setAnswer((prev) => ({ ...prev, isLoading: false })))
  }, [formValue])

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} container rowSpacing={{ xs: 3, sm: 0 }}>
        {answer.text && (
          <Grid
            item
            xs={12}
            sm={4}
            xl={4}
            sx={{ textAlign: 'start', order: isMobile ? 1 : 'unset' }}>
            <Button
              variant={showHighlight ? 'outlined' : 'contained'}
              size='small'
              sx={{ fontWeight: 900, minWidth: isMobile ? 1 : 150 }}
              onClick={() => setShowHighlight((prev) => !prev)}>
              {showHighlight ? 'Hide' : 'Show'} Highlight
            </Button>
          </Grid>
        )}

        <Grid item xs={0} sm={answer.text ? 4 : 8} xl={answer.text ? 4 : 8} />

        <Grid item xs={12} sm={4} xl={4}>
          <ExampleSelect
            onFormValueChange={onFormValueChange}
            setIsReadonly={setIsReadonly}
          />
        </Grid>
      </Grid>

      {error && (
        <Grid item xs={12}>
          <Alert variant='outlined' severity='error'>
            {error}
          </Alert>
        </Grid>
      )}

      {showHighlight ? (
        <Grid item xs={12} sm={6}>
          <Box sx={{ px: 3.5, py: 4.125, lineHeight: 1.4375 }}>
            <Highlighter
              highlightClassName='YourHighlightClass'
              searchWords={[answer.text]}
              autoEscape={true}
              textToHighlight={formValue.context}
            />
          </Box>
        </Grid>
      ) : (
        <Grid item xs={12} sm={6} xl={6}>
          <TextField
            fullWidth
            disabled={answer.isLoading}
            required
            multiline
            minRows={isMobile ? 5 : 20}
            maxRows={isMobile ? 10 : 20}
            size='medium'
            label='Context'
            value={formValue.context}
            onChange={(e) => onFormValueChange('context', e.target.value)}
            spellCheck={false}
            InputProps={{ readOnly: isReadonly }}
          />
        </Grid>
      )}

      <Grid
        item
        xs={12}
        sm={6}
        xl={6}
        container
        rowSpacing={4}
        alignContent='start'>
        <Grid item xs={12}>
          <TextField
            fullWidth
            disabled={answer.isLoading}
            required
            multiline
            minRows={5}
            size='medium'
            label='Question'
            value={formValue.question}
            onChange={(e) => onFormValueChange('question', e.target.value)}
            spellCheck={false}
            InputProps={{ readOnly: isReadonly }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            disabled={answer.isLoading}
            fullWidth
            size='medium'
            variant='contained'
            onClick={handleSubmit}>
            {answer.isLoading ? (
              <CircularProgress size={24} />
            ) : (
              <Typography variant='h6' fontWeight={900} sx={{ fontSize: 16 }}>
                Predict
              </Typography>
            )}
          </Button>
        </Grid>

        <Grid item xs={12}>
          <TypeWriter text={answer.text} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ChatForm
