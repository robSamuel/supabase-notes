import { Note } from "@/types/notes";

export const transformNote = (note: Note) => {
  return {
    ...note,
    createdAt: note.createdAt ? new Date(note.createdAt).toLocaleDateString() : '',
    updatedAt: note.updatedAt ? new Date(note.updatedAt).toLocaleDateString() : '',
  };
};

