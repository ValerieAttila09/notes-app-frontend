import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>

      <div className="container mx-auto">
        <NoteCard/>
      </div>
    </div>
  )
}