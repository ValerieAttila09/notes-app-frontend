import { useEffect, useState, useCallback } from "react"
import NoteCard from "../../components/Cards/NoteCard"
import Navbar from "../../components/Navbar/Navbar"
import AddEditNotes from "./AddEditNotes"
import ReactModal from "react-modal"
import { Flashlight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../utils/axiosInstance"
import ToastMessage from "../../components/ToastMessage/ToastMessage"

export default function Home() {
  const navigate = useNavigate()

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null
  })

  const [allNotes, setAllNotes] = useState([])
  const [userInfo, setUserInfo] = useState(null)

  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add"
  })

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({
      isShown: true,
      data: noteDetails,
      type: "edit"
    })
  }

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message: message,
      type
    })
  }
  
  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: ""
    })
  }

  const getUserInfo = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/get-user")
      if (response.data && response.data.user) {
        setUserInfo(response.data.user)
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear()
        navigate('/login')
      }
    }
  }, [navigate])

  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get('/get-all-notes')
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes)
      }
    } catch (error) {
      console.error(`An unexpected error occoured. Please try again!\nError : ${error}`)
    }
  }

  useEffect(() => {
    getAllNotes()
    getUserInfo()
    return () => { }
  }, [getUserInfo])

  return (
    <div className="">
      <Navbar userInfo={userInfo} />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          {allNotes.map((item) => (
            <NoteCard
              key={item._id}
              title={item.title}
              date={item.createdOn}
              content={item.content}
              tags={item.tags}
              isPinned={item.isPinned}
              onEdit={() => handleEdit(item)}
              onDelete={() => { }}
              onPinNote={() => { }}
            />
          ))}
        </div>
      </div>

      <button
        className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-500 hover:shadow-lg hover:bg-indigo-600 transition-all absolute right-10 bottom-10 "
        onClick={() => {
          setOpenAddEditModal({
            isShown: true,
            type: "add",
            data: null
          })
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      <ReactModal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => { }}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)"
          }
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-y-scroll"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({
              isShown: false,
              type: "add",
              data: null
            })
          }}
          getAllNotes={getAllNotes}
          showToastMessage={showToastMessage}
        />
      </ReactModal>

      <ToastMessage
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />

    </div>
  )
}