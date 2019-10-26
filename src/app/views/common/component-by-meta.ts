import { FetchMeta } from '../../types/fetch-meta.interface'

type ComponentByMetaProps = {
  meta: FetchMeta,
  isLoading: React.ReactNode,
  hasLoaded: React.ReactNode,
  hasErrored: React.ReactNode
}

// TODO unit test
const ComponentByMeta = ({ meta, isLoading, hasLoaded, hasErrored }: ComponentByMetaProps) => {
  const stateMap = { isLoading, hasLoaded, hasErrored }
  const state = Object.keys(meta).reduce((acc, key) => meta[key] ? key : acc, 'isLoading')
  return stateMap[state]
}

export {
  ComponentByMeta
}
