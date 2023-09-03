import { FC } from 'react'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { Theme } from '@/themes'
import Chat from '@/pages/Chat'

export const App: FC<{}> = () => {
  return (
    <ThemeProvider theme={Theme.LIGHT}>
      <CssBaseline />

      <div className='App'>
        <Container
          disableGutters
          sx={{ p: 3, width: 1, height: 1, overflow: 'hidden' }}>
          <Chat />
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
