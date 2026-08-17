export type CategoryId =
  | 'network'
  | 'email'
  | 'accounts'
  | 'printers'
  | 'files'
  | 'hardware'
  | 'software'
  | 'security'
  | 'mobile'
  | 'meetings'

export type Difficulty = 'easy' | 'moderate' | 'escalate'

export type Step = {
  title: string
  detail: string
}

export type Article = {
  slug: string
  title: string
  category: CategoryId
  tags: string[]
  difficulty: Difficulty
  minutes: number
  summary: string
  symptoms: string[]
  steps: Step[]
  tip?: string
  escalate: string
}

export type Category = {
  id: CategoryId
  name: string
  blurb: string
  countLabel: string
}
