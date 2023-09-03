import { FC } from 'react'
import ChatForm from './ChatForm'
import { Grid, Typography } from '@mui/material'

const Chat: FC<{}> = () => {
  return (
    <Grid
      container
      rowSpacing={4}
      sx={{ width: 1, height: 1, overflow: 'hidden' }}>
      <Grid item xs={12}>
        <Typography variant='h4' fontWeight={900} textAlign='center'>
          Falcon-7B fine-tuned on SQuAD 2.0
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <ChatForm />
      </Grid>
    </Grid>
  )
}

export default Chat
