import SignIn from '../../views/SignIn'
import SignUp from '../../views/SignUp'

const authRoutes = [
  {
    path: '/login',
    component: SignIn
  },
  {
    path: '/signup',
    component: SignUp
  }
]

export default authRoutes
