import { FC, useState } from 'react'
import './App.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

const App: FC<{}> = () => {
  const [formValue, setFormValue] = useState<{
    context: string
    question: string
  }>({
    context: '',
    question: '',
  })

  const [answer, setAnswer] = useState<string>('')

  const handleSubmit = () => {
    console.log('submit', formValue)

    setAnswer('')
  }

  return (
    <div className='App'>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} xl={12}>
            <Typography variant='h4' fontWeight={900}>
              Machine Reading Comprehension
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} xl={6}>
            <TextField
              fullWidth
              variant='outlined'
              multiline
              minRows={5}
              label='Context'
              value={formValue.context}
              onChange={(e) =>
                setFormValue({ ...formValue, context: e.target.value })
              }
              placeholder='My name is John. I am 20 years old. I am a student.'
            />
          </Grid>

          <Grid item xs={12} sm={6} xl={6}>
            <TextField
              fullWidth
              variant='outlined'
              multiline
              minRows={5}
              label='Question'
              value={formValue.question}
              onChange={(e) =>
                setFormValue({ ...formValue, question: e.target.value })
              }
              placeholder='How old is John?'
            />
          </Grid>

          <Grid item xs={12} sm={12} xl={12}>
            <Button
              fullWidth
              disableElevation
              size='large'
              variant='contained'
              onClick={handleSubmit}
              sx={{ fontSize: '16px', fontWeight: 900 }}>
              Submit
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} xl={12}>
            <TextField
              fullWidth
              variant='outlined'
              multiline
              minRows={5}
              label='Answer'
              value={answer}
              inputProps={{ readOnly: true }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default App
