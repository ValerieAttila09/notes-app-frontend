import { Edit, PinIcon, Trash2 } from "lucide-react";
import moment from 'moment'

export default function NoteCard({ title, date, content, isPinned, tags, onEdit, onDelete, onPinNote }) {
  return (
    <div className="border border-[#d7d7d7] rounded-md p-4 bg-white hover:shadow-lg transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div className="">
          <h6 className="text-sm outfit-medium">{title}</h6>
          <span className="text-xs text-neutral-500">{moment(date).format("Do MMM YYYY")}</span>
        </div>

        <PinIcon size={18} onClick={onPinNote} className={`${isPinned ? "text-indigo-500" : "text-neutral-400"}`} />

      </div>
      <p className="text-xs text-neutral-600 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between gap-2 mt-2">
        <div className="text-xs text-neutral-500 flex flex-wrap items-center gap-1">{tags.map((item, index) => (
          <span key={index}># {item}</span>
        ))}</div>

        <div className="flex items-center gap-2">
          <button className="group transition-all" onClick={onEdit}>
            <Edit size={16} className="text-neutral-600 group-hover:text-yellow-500 transition-all" />
          </button>
          <button className="group transition-all" onClick={onDelete}>
            <Trash2 size={16} className="icon-btn text-neutral-600 group-hover:text-red-500 transition-all" />
          </button>
        </div>
      </div>
    </div>
  )
}