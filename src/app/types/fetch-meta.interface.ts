export interface AsyncMeta {
  isLoading: boolean,
  hasLoaded: boolean,
  hasErrored: boolean
}

export interface CrudMeta {
  read?: AsyncMeta
}

export type FetchActionTypes = [string, string, string]
