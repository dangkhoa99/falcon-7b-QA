import { FC } from 'react'
import { MRCForm } from './MRCForm'
import { Container } from '@mui/material'

export const App: FC<{}> = () => {
  return (
    <Container
      fixed
      disableGutters
      sx={{ p: 2, height: '100%', overflow: 'auto' }}>
      <MRCForm />
    </Container>
  )
}

export default App
