import AuthContainer from '../AuthContainer'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Private() {
    const { token } = useSelector(state => state.login)
  return token ? (
    <AuthContainer/>
  ): (
    <Navigate to="/"/>
  )

}

export default Private