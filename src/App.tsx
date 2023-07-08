import { FC } from 'react'
import { MRC } from './MRC'
import { Container } from '@mui/material'

export const App: FC<{}> = () => {
  return (
    <Container
      fixed
      disableGutters
      sx={{ p: 2, height: '100%', overflow: 'auto' }}>
      <MRC />
    </Container>
  )
}

export default App
