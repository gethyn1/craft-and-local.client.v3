import RESPONSE from './response.json'

const geocoding = () => ({
  forwardGeocode: () => ({
    send: () => Promise.resolve(RESPONSE)
  })
})

export default geocoding
