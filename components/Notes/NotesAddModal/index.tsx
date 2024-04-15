import { useState } from "react";
import { ModalProps } from "@/types/components/modal";
import Modal from '@/components/Modal';

const NotesAddModal = ({ isOpen, onClose }: ModalProps) => {
  const [note, setNote] = useState('');

  const onChangeNote = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(evt.target.value)
  }
  const onAccept = () => {};

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onAccept={onAccept}
      width={350}
    >
      <div className="flex flex-col">
        <span className="text-white font-semibold mb-2">Adding a Note</span>
        <textarea
          className="rounded-lg bg-transparent border-gray-700 border-2 p-2 resize-none"
          value={note}
          onChange={onChangeNote}
          autoFocus
          placeholder="Write your note!"
          cols={3}
        />
      </div>
    </Modal>
  );
};

export default NotesAddModal;
