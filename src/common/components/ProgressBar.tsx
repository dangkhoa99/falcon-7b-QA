import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export const ProgressBar: FC<{
  time: number
  setTime: Dispatch<SetStateAction<number>>
}> = ({ time, setTime }) => {
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    setProgress((prev) => {
      if (prev !== 100) return prev + 1

      setTime(0)
      return prev
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      updateProgress()
    }, time * 10)

    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={progress} />
    </Box>
  )
}
