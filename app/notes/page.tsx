import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

const Notes = async () => {
  const res = await fetchNotes("a", 1);
  console.log(res);

  return <NotesClient />;
};

export default Notes;
