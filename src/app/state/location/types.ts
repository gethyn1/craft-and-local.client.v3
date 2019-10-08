const namespace = 'claim'

export const READ_CLAIM_REQUESTED = `${namespace}/READ_CLAIM_REQUESTED`
export const READ_CLAIM_SUCCEEDED = `${namespace}/READ_CLAIM_SUCCEEDED`
export const READ_CLAIM_FAILED = `${namespace}/READ_CLAIM_FAILED`

export const READ = [READ_CLAIM_REQUESTED, READ_CLAIM_SUCCEEDED, READ_CLAIM_FAILED]
