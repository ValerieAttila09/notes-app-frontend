import ProfileInfo from "../Cards/ProfileInfo"
import { useNavigate } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"

export default function Navbar(){

const navigate = useNavigate()

  const onLogout = () => {
    navigate("/login")
  }

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl outfit-medium text-neutral-900 py-1">
        Notes
      </h2>

      <SearchBar />
      
      <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}