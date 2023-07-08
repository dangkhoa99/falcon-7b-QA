import axios from 'axios'
import {
  MRCFormValue,
  MRCResponseSuccess,
  ResponseStatusSuccess,
} from '../interfaces'
import { BASE_STATUS_URL, BASE_URL, EXAMPLES } from '../constants'

export const pingModel = async (url: string): Promise<MRCResponseSuccess> => {
  const response = await axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`,
    },
    url: `${BASE_URL}/${url}`,
    data: {
      inputs: {
        context: EXAMPLES[0].context,
        question: EXAMPLES[0].question,
      },
    },
  })
  const { data } = response
  return data
}

export const getStatusModel = async (
  url: string,
): Promise<ResponseStatusSuccess> => {
  const response = await axios({
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    url: `${BASE_STATUS_URL}/${url}`,
  })
  const { data } = response
  return data
}

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
