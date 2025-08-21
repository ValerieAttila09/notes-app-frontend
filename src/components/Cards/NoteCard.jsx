export default function NoteCard({ title, date, content, isPinned, tags, onEdit, onDelete, onPinNote }) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h6 className="text-sm outfit-medium">{title}</h6>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>



      </div>
      <p className="">{content?.slice(0, 60)}</p>
    </div>
  )
}