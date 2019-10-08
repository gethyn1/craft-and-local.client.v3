import React, { useEffect } from 'react'
import { AppLayout } from '../../layouts'

const Entity = ({ location, hasLoaded }) =>
  hasLoaded ? (
    <h3><strong>Title</strong> {location.title}</h3>
  ) : null

const Location = ({ getLocation, locationId, location, meta }) => {
  useEffect(() => {
    getLocation(locationId)
  }, [getLocation, locationId])

  return (
    <AppLayout>
      <h1>Location</h1>
      {meta.read.hasErrored && <p>There was an error loading the locaiton</p>}
      <Entity location={location} hasLoaded={meta.read.hasLoaded} />
    </AppLayout>
  )
}

export {
  Location
}
