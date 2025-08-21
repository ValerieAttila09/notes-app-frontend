import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
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

      <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-500 hover:shadow-lg hover:bg-indigo-600 transition-all absolute right-10 bottom-10 " onClick={() => { }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

    </div>
  )
}