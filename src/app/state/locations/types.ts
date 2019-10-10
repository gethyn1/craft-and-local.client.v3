import { FetchActionTypes } from '../../types/fetch-meta.interface'

const namespace = 'locations'

export const READ_LOCATIONS_REQUESTED = `${namespace}/READ_LOCATIONS_REQUESTED`
export const READ_LOCATIONS_SUCCEEDED = `${namespace}/READ_LOCATIONS_SUCCEEDED`
export const READ_LOCATIONS_FAILED = `${namespace}/READ_LOCATIONS_FAILED`

export const READ: FetchActionTypes = [READ_LOCATIONS_REQUESTED, READ_LOCATIONS_SUCCEEDED, READ_LOCATIONS_FAILED]
