'use client'
import { useEffect, useState, useCallback } from 'react';
import { getNotes } from '@/actions/notes/action-notes';
import Table from '@/components/Table';
import { Note } from '@/types/notes';
import { transformNote } from '@/utils/data';
import Button from '@/components/Button';

const NotesList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const retrieveNotes = useCallback(async() => {
    const { data } = await getNotes();
    const notesList = data.map((note: Note) => transformNote(note))

    setNotes(notesList);
  }, []);

  useEffect(() => {
    retrieveNotes()
  }, [retrieveNotes]);

  const onEdit = (id: string) => {
    console.log('onEdit', id);
  }

  const onDelete = (id: string) => {
    console.log('onDelete', id);
  }
  
  return (
    <div className="flex flex-col w-full p-[50px]">
      <div className="flex justify-between items-center mb-[30px]">
        <h1 className="text-2xl font-bold">Notes</h1>
        <div>
          <Button customClass="mr-[10px]" label="Add" onClick={() => {console.log('add a note')}} />
          <Button label="Reload" onClick={retrieveNotes} />
        </div>
      </div>
      <Table notes={notes} onEdit={onEdit} onDelete={onDelete} />
    </div>
  )
}

export default NotesList;
