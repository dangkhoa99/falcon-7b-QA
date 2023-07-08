import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export const ProgressBar: FC<{
  time: number
  setTime: Dispatch<SetStateAction<number>>
}> = ({ time, setTime }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          setTime(0)
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, time)

    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={progress} />
    </Box>
  )
}
