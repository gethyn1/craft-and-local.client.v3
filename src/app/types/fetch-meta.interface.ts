export interface FetchMeta {
  read: {
    isLoading: Boolean,
    hasLoaded: Boolean,
    hasErrored: boolean
  }
}

export type FetchActionTypes = [string, string, string]
