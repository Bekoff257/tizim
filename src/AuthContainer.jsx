import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
function AuthContainer() {
    const dispatch = useDispatch()
  return (
    <Outlet/>
  )
}

export default AuthContainer