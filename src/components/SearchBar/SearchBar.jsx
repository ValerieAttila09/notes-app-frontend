export default function SearchBar({ value, onChange, handleChange, onClearSearch }) {



  return (
    <div className="">
      <input type="text" placeholder="Search Notes" className="w-full text-xs bg-transparent py-[11px] outline-none" value={value} onChange={onChange} name="" id="" />
    </div>
  )
}