import { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { XIcon } from "lucide-react";

export default function AddEditNotes({ onClose, noteData, type }) {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState([])

  const [error, setError] = useState(null)

  const addNewNote = async () => {
    
  }
  const editNote = async () => {
    
  }

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title!")
      return
    }
    if (!content) {
      setError("Please enter the content!")
      return
    }

    setError("")
  }

  if (type == 'edit'){
    editNote()
  } else {
    addNewNote()
  }

  return (
    <div className="relative">

      <button
        onClick={onClose}
        className="p-1 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-neutral-100 transition-all"
      >
        <XIcon size={18} className="text-neutral-600" />
      </button>

      <div className="flex flex-col gap-2">
        <label htmlFor="" className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl text-neutral-900 outline-none"
          placeholder="Go To Gym at 5"
          name=""
          id=""
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="" className="input-label">Content</label>
        <textarea
          className="text-sm text-neutral-900 outline-none bg-neutral-50 p-2 rounded-md"
          placeholder="Content"
          name=""
          id=""
          value={content}
          onChange={({ target }) => setContent(target.value)}
          rows={4}></textarea>
      </div>

      <div className="mt-3">
        <label htmlFor="" className="input-label">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && (
        <p className="text-red-500 outfit-regular mt-5 p-3">{error}</p>
      )}

      <button className="w-full bg-indigo-500 text-white outfit-medium mt-5 p-3" onClick={handleAddNote}>Add</button>
    </div>
  )
}