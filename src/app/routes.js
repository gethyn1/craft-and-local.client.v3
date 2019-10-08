import { pages } from './views'

const routes = [
  {
    path: '/locations',
    exact: true,
    component: pages.Locations
  },
  {
    path: '/locations/:id',
    component: pages.Location
  }
]

export {
  routes
}
