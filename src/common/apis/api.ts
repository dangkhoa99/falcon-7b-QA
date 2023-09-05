import axios from 'axios'
import { API_FALCON_7B_URL, BASE_URL } from '../constants'
import {
  Falcon7BResponseSuccess,
  MRCFormValue,
  MRCResponseSuccess,
} from '../interfaces'

export const robertaMRC = async (
  formValue: MRCFormValue,
): Promise<MRCResponseSuccess> => {
  const response = await axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`,
    },
    url: `${BASE_URL}/dangkhoa99/roberta-base-finetuned-squad-v2`,
    data: { inputs: formValue },
  })
  const { data } = response
  return data
}

export const falcon7B = async (
  formValue: MRCFormValue,
): Promise<Falcon7BResponseSuccess> => {
  const response = await axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`,
    },
    url: API_FALCON_7B_URL,
    data: { inputs: formValue },
  })
  const { data } = response
  return data
}
