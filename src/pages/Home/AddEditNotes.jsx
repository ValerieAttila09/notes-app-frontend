import { useState } from "react";
import TagInput from "../../components/Input/TagInput";

export default function AddEditNotes() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState([])

  return (
    <div className="">
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
         rows={10}></textarea>
      </div>

      <div className="mt-3">
        <label htmlFor="" className="input-label">Tags</label>
        <TagInput tags={tags} setTags={setTags}/>
      </div>

      <button className="w-full bg-indigo-500 text-white outfit-medium mt-5 p-3" onClick={() => { }}>Add</button>
    </div>
  )
}