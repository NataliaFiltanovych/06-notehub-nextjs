import { fetchNoteById } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;

  const noteItem = await fetchNoteById(id);
  return <div>Page</div>;
};

export default NoteDetails;
