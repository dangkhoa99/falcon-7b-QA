import { MRCExamples } from '../interfaces'

export const BASE_URL = 'https://api-inference.huggingface.co/models'
export const BASE_STATUS_URL = 'https://api-inference.huggingface.co/status'
export const API_FALCON_7B_URL =
  'https://yft8y962f262st2r.us-east-1.aws.endpoints.huggingface.cloud'

export const EXAMPLES: MRCExamples[] = [
  {
    id: 1,
    code: 'Example 1',
    context: `The Amazon rainforest (Portuguese: Floresta Amazônica or Amazônia; Spanish: Selva Amazónica, Amazonía or usually Amazonia; French: Forêt amazonienne; Dutch: Amazoneregenwoud), also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf forest that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 square kilometres (2,700,000 sq mi), of which 5,500,000 square kilometres (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Venezuela, Ecuador, Bolivia, Guyana, Suriname and French Guiana. States or departments in four nations contain "Amazonas" in their names. The Amazon represents over half of the planet's remaining rainforests, and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees divided into 16,000 species.`,
    question: `Which name is also used to describe the Amazon rainforest in English?`,
  },
  {
    id: 2,
    code: 'Example 2',
    context: `A static equilibrium between two forces is the most usual way of measuring forces, using simple devices such as weighing scales and spring balances. For example, an object suspended on a vertical spring scale experiences the force of gravity acting on the object balanced by a force applied by the "spring reaction force", which equals the object's weight. Using such tools, some quantitative force laws were discovered: that the force of gravity is proportional to volume for objects of constant density (widely exploited for millennia to define standard weights); Archimedes' principle for buoyancy; Archimedes' analysis of the lever; Boyle's law for gas pressure; and Hooke's law for springs. These were all formulated and experimentally verified before Isaac Newton expounded his Three Laws of Motion.`,
    question: `Who expounded the Three Laws of Motion?`,
  },
  {
    id: 3,
    code: 'Example 3',
    context: `If a problem X is in C and hard for C, then X is said to be complete for C. This means that X is the hardest problem in C. (Since many problems could be equally hard, one might say that X is one of the hardest problems in C.) Thus the class of NP-complete problems contains the most difficult problems in NP, in the sense that they are the ones most likely not to be in P. Because the problem P = NP is not solved, being able to reduce a known NP-complete problem, Π2, to another problem, Π1, would indicate that there is no known polynomial-time solution for Π1. This is because a polynomial-time solution to Π1 would yield a polynomial-time solution to Π2. Similarly, because all NP problems can be reduced to the set, finding an NP-complete problem that can be solved in polynomial time would mean that P = NP.`,
    question: `The hardest problems in NP can be analogously written as what class of problems?`,
  },
  {
    id: 4,
    code: 'Example 4',
    context: `A function problem is a computational problem where a single output (of a total function) is expected for every input, but the output is more complex than that of a decision problem, that is, it isn't just yes or no. Notable examples include the traveling salesman problem and the integer factorization problem.`,
    question: `What are other irrelevant examples of a function problem?`,
  },
  {
    id: 5,
    code: 'Example 5',
    context: `Several public-key cryptography algorithms, such as RSA and the Diffie–Hellman key exchange, are based on large prime numbers (for example, 512-bit primes are frequently used for RSA and 1024-bit primes are typical for Diffie–Hellman.). RSA relies on the assumption that it is much easier (i.e., more efficient) to perform the multiplication of two (large) numbers x and y than to calculate x and y (assumed coprime) if only the product xy is known. The Diffie–Hellman key exchange relies on the fact that there are efficient algorithms for modular exponentiation, while the reverse operation the discrete logarithm is thought to be a hard problem.`,
    question: `What is another type of private key cryptography algorithm?`,
  },
  {
    id: 6,
    code: 'Example 6',
    context: `Some Huguenots settled in Bedfordshire, one of the main centres of the British lace industry at the time. Although 19th century sources have asserted that some of these refugees were lacemakers and contributed to the East Midlands lace industry, this is contentious. The only reference to immigrant lacemakers in this period is of twenty-five widows who settled in Dover, and there is no contemporary documentation to support there being Huguenot lacemakers in Bedfordshire. The implication that the style of lace known as 'Bucks Point' demonstrates a Huguenot influence, being a "combination of Mechlin patterns on Lille ground", is fallacious: what is now known as Mechlin lace did not develop until first half of the eighteenth century and lace with Mechlin patterns and Lille ground did not appear until the end of the 18th century, when it was widely copied throughout Europe.`,
    question: `What industry was centered in Bedfordshire?`,
  },
  {
    id: 7,
    code: 'Example 7',
    context: `Since the 1920s, motion pictures, petroleum and aircraft manufacturing have been major industries. In one of the richest agricultural regions in the U.S., cattle and citrus were major industries until farmlands were turned into suburbs. Although military spending cutbacks have had an impact, aerospace continues to be a major factor.`,
    question: `Motion pictures, petroleum and aircraft manufacturing have been major industries since which decade?`,
  },
  {
    id: 8,
    code: 'Example 8',
    context: `In England, in the absence of census figures, historians propose a range of preincident population figures from as high as 7 million to as low as 4 million in 1300, and a postincident population figure as low as 2 million. By the end of 1350, the Black Death subsided, but it never really died out in England. Over the next few hundred years, further outbreaks occurred in 1361–62, 1369, 1379–83, 1389–93, and throughout the first half of the 15th century. An outbreak in 1471 took as much as 10–15% of the population, while the death rate of the plague of 1479–80 could have been as high as 20%. The most general outbreaks in Tudor and Stuart England seem to have begun in 1498, 1535, 1543, 1563, 1589, 1603, 1625, and 1636, and ended with the Great Plague of London in 1665.`,
    question: `When did the black death technically subside?`,
  },
  {
    id: 9,
    code: 'Example 9',
    context: `As of the census of 2000, there were 427,652 people, 140,079 households, and 97,915 families residing in the city. The population density was 4,097.9 people per square mile (1,582.2/km²). There were 149,025 housing units at an average density of 1,427.9 square miles (3,698 km2). The racial makeup of the city was 50.2% White, 8.4% Black or African American, 1.6% Native American, 11.2% Asian (about a third of which is Hmong), 0.1% Pacific Islander, 23.4% from other races, and 5.2% from two or more races. Hispanic or Latino of any race were 39.9% of the population.`,
    question: `What was the percentage of Black or African-Americans living in the city?`,
  },
  {
    id: 10,
    code: 'Example 10',
    context: `Following the Nice Treaty, there was an attempt to reform the constitutional law of the European Union and make it more transparent; this would have also produced a single constitutional document. However, as a result of the referendum in France and the referendum in the Netherlands, the 2004 Treaty establishing a Constitution for Europe never came into force. Instead, the Lisbon Treaty was enacted. Its substance was very similar to the proposed constitutional treaty, but it was formally an amending treaty, and – though it significantly altered the existing treaties – it did not completely replace them.`,
    question: `Which caused the reform to never come into force?`,
  },
  {
    id: 11,
    code: 'Custom',
    context: ``,
    question: ``,
  },
]
