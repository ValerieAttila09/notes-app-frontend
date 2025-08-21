export default function SearchBar({ value, onChange, handleSearch, onClearSearch }) {



  return (
    <div className="w-80 flex items-center px-4 bg-neutral-100 rounded-md">
      <input type="text" placeholder="Search Notes" className="w-full text-xs bg-transparent py-[11px] outline-none" value={value} onChange={onChange} name="" id="" />

      {value && (
        <button
          onClick={onClearSearch}
          className="bg-transparent cursor-pointer group transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-400 group-hover:text-neutral-700 transition-all">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      <button
        onClick={handleSearch}
        className="bg-transparent cursor-pointer group transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-neutral-400 group-hover:text-neutral-700 transition-all">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>

    </div>
  )
}