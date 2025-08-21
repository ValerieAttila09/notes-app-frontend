import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>

      <div className="container mx-auto">
        <NoteCard 
        title={"Meeting on 7th April"} 
        date={"07 April 2026"} 
        content={"Meeting on 7th April Meeting on 7th April"}
        tags={"#Meeting"}
        onEdit={() => {}}
        onDelete={() => {}}
        onPinNote={() => {}}
        />
      </div>
    </div>
  )
}