import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home/>}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/signup" exact element={<SignUp/>}></Route>
    </Routes>
  </Router>
)

export default function App() {
  return (
    <div>
      {routes}
    </div>
  )
}