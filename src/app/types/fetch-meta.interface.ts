export interface AsyncMeta {
  isLoading: Boolean,
  hasLoaded: Boolean,
  hasErrored: boolean
}

export interface CrudMeta {
  read?: AsyncMeta
}

export type FetchActionTypes = [string, string, string]
