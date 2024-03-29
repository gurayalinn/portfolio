import type { Company } from '@types'

export interface Job {
  jobTitle: string
  company: Company
  description: string
  fromDate: string
  toDate: string | null
  skills: string[]
}
