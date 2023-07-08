import { MRCExamples } from '../interfaces'

export const BASE_URL = 'https://api-inference.huggingface.co/models'
export const BASE_STATUS_URL = 'https://api-inference.huggingface.co/status'

export const EXAMPLES: MRCExamples[] = [
  {
    id: 1,
    code: 'Example 1',
    context:
      'Pinging a model is a way check if the model is loaded and ready to be used.',
    question: 'What is the purpose of pinging a model?',
  },
  {
    id: 2,
    code: 'Example 2',
    context:
      "The national flag of Vietnam is a symbol of the country's history and culture. The red background represents the blood that was shed during the country's wars for independence, while the yellow star represents the five main classes of Vietnamese society. The flag is a reminder of the country's rich history and the sacrifices that have been made to achieve independence.",
    question: 'What is the national flag of Vietnam?',
  },
  {
    id: 3,
    code: 'Example 3',
    context:
      'Ho Chi Minh was born Nguyen Sinh Cung on May 19, 1890, in a village in central Vietnam (then part of French Indochina) in Nghe province to Hoang Thi Loan, his mother, and Nguyen Sinh Sac. Ho attended the National Academy in Hue before being expelled for protesting against emperor Bao Dai and French influence in Indochina. In 1911, he found work as a cook on a French steamer and spent the next several years at sea, traveling to Africa, the United States and Britain, among other locations.',
    question: 'Why was Ho Chi Minh expelled from the National Academy in Hue?',
  },
]
