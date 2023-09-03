import { TextField } from '@mui/material'
import { FC, useEffect, useState } from 'react'

export const TypeWriter: FC<{ text: string }> = ({ text }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!text) {
      return
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 5)

      return () => clearTimeout(timeout)
    }

    return () => {}
  }, [currentIndex, text])

  useEffect(() => {
    setCurrentText('')
    setCurrentIndex(0)

    return () => {}
  }, [text])

  return (
    <TextField
      fullWidth
      multiline
      label='Answer'
      value={currentText}
      inputProps={{ readOnly: true }}
      InputLabelProps={{ shrink: true }}
      spellCheck={false}
    />
  )
}
