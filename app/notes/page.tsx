'use client'
import { useEffect, useState, useCallback } from 'react';
import { getNotes } from '@/actions/notes/action-notes';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const retrieveNotes = useCallback(async() => {
    const { data } = await getNotes();

    setNotes(data);
  }, []);

  useEffect(() => {
    retrieveNotes()
  }, [retrieveNotes]);
  

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}