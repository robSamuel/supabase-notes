'use client'
import { useEffect, useState, useCallback } from 'react';
import { FaUndo } from "react-icons/fa";
import Table from '@/components/Table';
import Button from '@/components/Button';
import NotesAddModal from '../NotesAddModal';
import { getNotes } from '@/actions/notes/action-notes';
import { Note } from '@/types/notes';
import { transformNote } from '@/utils/data';

const NotesList = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);

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
    <>
      <div className="flex flex-col w-full p-[50px]">
        <div className="flex justify-between items-center mb-[30px]">
          <h1 className="text-2xl font-bold">Notes</h1>
          <div className='flex'>
            <Button customClass="mr-[10px]" label="Add" onClick={toggleModal} />
            <Button
              onClick={retrieveNotes}
              intent='contained'
              icon={<FaUndo />}
            />
          </div>
        </div>
        <Table
          notes={notes}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
      {isModalOpen && (
        <NotesAddModal isOpen={isModalOpen} onClose={toggleModal} />
      )}
    </>
  )
}

export default NotesList;
