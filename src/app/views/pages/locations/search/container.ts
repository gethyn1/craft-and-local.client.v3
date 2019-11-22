import { connect } from 'react-redux'
import { Search } from './search'
import { AppState, search } from '../../../../state'
import { ForwardGeocodeResult } from '../../../../types'

const { selectors } = search

type MappedState = {
  results: ForwardGeocodeResult[]
}

const results = [
  {
    id: "locality.4085642895852400",
    text: "Bristol",
    region: "Bristol, City Of Bristol, England, United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-2.5974, 51.4535]
    }
  }, {
    id: "locality.16655852414781910",
    text: "Briston",
    region: "Melton Constable, Norfolk, England, United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [1.0617, 52.8504]
    }
  }, {
    id: "locality.6450654934907140",
    text: "Brisley",
    region: "Dereham, Norfolk, England, United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [0.8874, 52.7559]
    }
  }, {
    id: "locality.10891425679300680",
    text: "Brize Norton",
    region: "Carterton, Oxfordshire, England, United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.6074, 52.7971]
    }
  }, {
    id: "locality.13766292683852980",
    text: "Brizlincote",
    region: "Burton-On-Trent, Staffordshire, England, United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.6074, 52.7971]
    }
  }
]

const mapStateToProps = (state: AppState): MappedState => ({
  results: selectors.getForwardGeocodeResults(state)
  // results
})

const mapDispatchToProps = (dispatch: Function) => ({
  onKeyUp: (query: string): void => dispatch(search.actions.forwardGeocode(query)),
  onSelectResult: (result: ForwardGeocodeResult): void => {
    const [longitude, latitude] = result.geometry.coordinates
    dispatch(search.actions.setSearchCoordinates({ latitude, longitude }))
  },
  onSearchBoxBlur: (): void => dispatch(search.actions.resetForwardGeocodeResults())
})

const container = connect(mapStateToProps, mapDispatchToProps)(Search)

export {
  container
}
