import { Routes, Route } from "react-router-dom"
import Main from "./components/main/Main"
import Auth from "./components/auth/Auth"
import Private from "./private/Private"

function ComponentRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Private/>}>
          <Route path="/main" element={<Main/>}/>
        </Route>
    </Routes>
  )
}

export default ComponentRoutes