import { FetchActionTypes } from '../../types'

const namespace = 'categories'

export const READ_CATEGORIES_REQUESTED = `${namespace}/READ_CATEGORIES_REQUESTED`
export const READ_CATEGORIES_SUCCEEDED = `${namespace}/READ_CATEGORIES_SUCCEEDED`
export const READ_CATEGORIES_FAILED = `${namespace}/READ_CATEGORIES_FAILED`

export const READ: FetchActionTypes = [READ_CATEGORIES_REQUESTED, READ_CATEGORIES_SUCCEEDED, READ_CATEGORIES_FAILED]
