import { useEffect, useState, useCallback } from "react"
import NoteCard from "../../components/Cards/NoteCard"
import Navbar from "../../components/Navbar/Navbar"
import AddEditNotes from "./AddEditNotes"
import ReactModal from "react-modal"
import { Flashlight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../utils/axiosInstance"
import ToastMessage from "../../components/ToastMessage/ToastMessage"
import EmptyCard from "../../components/EmptyCard/EmptyCard"

export default function Home() {
  const navigate = useNavigate()

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null
  })

  const [allNotes, setAllNotes] = useState([])
  const [userInfo, setUserInfo] = useState(null)

  const [isSearch, setIsSearch] = useState(false)

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

  const deleteNote = async (data) => {
    const noteId = data._id
    try {
      const response = await axiosInstance.delete(`/delete-note/${noteId}`)

      if (response.data && !response.data.error) {
        showToastMessage("Note Deleted Successfully!", 'delete')
        getAllNotes()
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error("An unexpected error occoured. Please try again!")
      }
    }
  }

  const onSearchNote = async (query) => {
    try {
      const response = await axiosInstance.get("/search-notes", {
        params: { query }
      })
      if (response.data && response.data.notes) {
        setIsSearch(true)
        setAllNotes(response.data.notes)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleClearSearch = () => {
    setIsSearch(false)
    getAllNotes()
  }

  const updatedIsPinned = async (noteData) => {
    const noteId = noteData._id
    try {
      const response = await axiosInstance.put(`/update-note-pinned/${noteId}`, {
        isPinned: !noteData.isPinned
      })
      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully!")
        getAllNotes()
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    getAllNotes()
    getUserInfo()
    return () => { }
  }, [getUserInfo])

  return (
    <div className="">
      <Navbar userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch} />

      <div className="max-w-5xl mx-auto">
        {allNotes != 0 ? (
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
                onDelete={() => deleteNote(item)}
                onPinNote={() => updatedIsPinned(item)}
              />
            ))}
          </div>
        ) : (
          <EmptyCard
            imgSrc={isSearch ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24 text-neutral-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24 text-neutral-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            )}
            message={isSearch ? (
              <span className="text-center">Oops! Notes Not Found!</span>
            ) : (
              <span className="text-center">No Notes Are Created Yet. <br /> Start Creating Your First Note by Clicking the 'Add' Button.</span>
            )}
          />
        )}
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