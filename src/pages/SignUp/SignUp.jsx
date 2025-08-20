import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import PasswordInput from "../../components/Input/PasswordInput"
import { Link } from "react-router-dom"
import { validateEmail } from "../../utils/helper"

export default function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (!name) {
      setError("Please enter your name")
    }
    if (!validateEmail(email)) {
      setError("Please enter your email")
    }
    if (!password) {
      setError("Please enter your password")
    }
  }

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border border-[#d7d7d7] rounded-md bg-white px-7 py-10">
          <form className='flex flex-col gap-3' onSubmit={handleSignUp}>
            <h4 className="text-4xl outfit-regular mb-2 text-neutral-900">Login</h4>

            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-[#ebebeb] p-2 transition-all" />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-[#ebebeb] p-2 transition-all" />
            </div>
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className='text-red-500 outfit-regular pb-1'>{error}</p>}

            <div className="mt-4 w-full">
              <button className="w-full rounded-md text-center border border-[#ebebeb] bg-indigo-600 text-white py-2 outfit-regular hover:bg-indigo-500 hover:shadow hover:border-[#d7d7d7] transition-all" type="submit">Create Account</button>
            </div>

            <p className="text-sm text-center mt-4">
              Already have an account? <Link to={"/login"} className='outfit-regular text-indigo-600 hover:underline transition-all'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}