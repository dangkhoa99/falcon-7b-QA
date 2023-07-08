export interface MRCFormValue {
  context: string
  question: string
}

export interface MRCExamples extends MRCFormValue {
  id: number
  code: string
}

export interface MRCResponseError {
  error: string
  estimated_time: number
}

export interface MRCResponseSuccess {
  answer: string
  score: number
  start: number
  end: number
}

export interface ResponseStatusSuccess {
  loaded: boolean
  compute_type: string
  framework: string
}
