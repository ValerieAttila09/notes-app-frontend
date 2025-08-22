import { useState } from "react";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import AddEditNotes from "./AddEditNotes";
import ReactModal from "react-modal";
import { Flashlight } from "lucide-react";

export default function Home() {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null
  })

  return (
    <div className="">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title={"Meeting on 7th April"}
            date={"07 April 2026"}
            content={"Meeting on 7th April Meeting on 7th April"}
            tags={"#Meeting"}
            onEdit={() => { }}
            onDelete={() => { }}
            onPinNote={() => { }}
            isPinned={true}
          />
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
          onClose={() => {
            setOpenAddEditModal({
              isShown: false,
              type: "add",
              data: null
            })
          }}
        />
      </ReactModal>

    </div>
  )
}