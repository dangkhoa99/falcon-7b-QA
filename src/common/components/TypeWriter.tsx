import { TextField } from '@mui/material'
import { FC, useEffect, useState } from 'react'

export const TypeWriter: FC<{ text: string }> = ({ text }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  // Typing logic goes here
  useEffect(() => {
    if (!text) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 5)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <TextField
      fullWidth
      variant='outlined'
      multiline
      rows={10}
      label='Answer'
      value={currentText}
      inputProps={{ readOnly: true }}
    />
  )
}
