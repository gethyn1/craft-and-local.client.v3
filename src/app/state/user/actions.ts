import * as types from './types'

export const getUserCoordinates = () => (dispatch: Function) => {
  dispatch({ type: types.GET_USER_COORDINATES_REQUESTED })

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      dispatch({
        type: types.GET_USER_COORDINATES_SUCCEEDED,
        payload: { latitude, longitude },
      })
    })
  } else {
    dispatch({ type: types.GET_USER_COORDINATES_FAILED })
  }
}
