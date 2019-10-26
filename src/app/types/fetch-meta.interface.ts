export interface FetchMeta {
  isLoading: Boolean,
  hasLoaded: Boolean,
  hasErrored: boolean
}

export interface CrudMeta {
  read?: FetchMeta
}

export type FetchActionTypes = [string, string, string]
