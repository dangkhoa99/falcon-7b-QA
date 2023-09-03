import axios from 'axios'
import { BASE_URL } from '../constants'
import { MRCFormValue, MRCResponseSuccess } from '../interfaces'

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
