import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function TagInput({ tags, setTags }) {

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()])
      setInputValue("")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag()
    }
  }

  const handleRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className=''>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-1 px-2 py-1 rounded-md bg-neutral-50">
              <span><span className="text-neutral-400">#</span> {tag}</span>
              <button onClick={() => {
                handleRemove(tag)
              }}>
                <XIcon size={16} className="ms-2 text-neutral-600" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          className="text-sm bg-transparent border border-[#d7d7d7] px-3 py-2 rounded-md outline-none"
          placeholder="Add tags"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className="group w-8 h-8 flex items-center justify-center rounded-md border border-indigo-700 hover:bg-indigo-600 transition-all"
          onClick={() => addNewTag()}
        >
          <PlusIcon size={16} className="text-indigo-700 group-hover:text-white" />
        </button>
      </div>
    </div>
  )
}