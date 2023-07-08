import { MRCExamples } from '../interfaces'

export const BASE_URL = 'https://api-inference.huggingface.co/models'

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
]
