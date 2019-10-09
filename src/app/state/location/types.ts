import { FetchActionTypes } from '../../types/fetch-meta.interface'

const namespace: string = 'claim'

export const READ_CLAIM_REQUESTED: string = `${namespace}/READ_CLAIM_REQUESTED`
export const READ_CLAIM_SUCCEEDED: string = `${namespace}/READ_CLAIM_SUCCEEDED`
export const READ_CLAIM_FAILED: string = `${namespace}/READ_CLAIM_FAILED`

export const READ: FetchActionTypes = [READ_CLAIM_REQUESTED, READ_CLAIM_SUCCEEDED, READ_CLAIM_FAILED]
