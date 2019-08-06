import Overview from '../../views/Overview'
import Recipients from '../../views/Recipients'

const dashboardRoutes = [
  {
    path: '/dashboard/overview',
    component: Overview
  },
  {
    path: '/dashboard/recipients',
    component: Recipients
  },
]

export default dashboardRoutes
