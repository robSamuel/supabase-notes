import { FaEdit, FaTrashAlt  } from "react-icons/fa";
import Button from '../Button';
import { TableProps } from '@/types/notes';

const cellClassName = 'border-gray-700 border';

const Table = ({ notes, onEdit, onDelete }: TableProps) => {
  const renderRows = () => {
    return notes.map(note => (
      <tr key={note.id}>
        <td className={`w-[25px] text-left ${cellClassName}`}>
          {note.id}
        </td>
        <td className={`w-auto text-left ${cellClassName}`}>
          {note.text}
        </td>
        <td className={`w-[120px] text-center ${cellClassName}`}>
          {note.createdAt}
        </td>
        <td className={`w-[120px] text-center ${cellClassName}`}>
          {note.updatedAt}
        </td>
        <td className={`w-[150px] flex justify-evenly ${cellClassName}`}>
          <Button
            onClick={() => onEdit(note.id)}
            icon={<FaEdit className='ml-1' />}
            intent="secondary"
          />
          <Button
            onClick={() => onDelete(note.id)}
            icon={<FaTrashAlt />}
            intent="danger"
          />
        </td>
      </tr>
    ));
  };
  return (
    <table>
      <thead>
        <tr>
          <th className={`w-[25px] text-left ${cellClassName}`}>Id</th>
          <th className={`w-auto text-left ${cellClassName}`}>Text</th>
          <th className={`w-[120px] text-center ${cellClassName}`}>Created At</th>
          <th className={`w-[120px] text-center ${cellClassName}`}>Updated At</th>
          <th className={`w-[150px] text-center ${cellClassName}`}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
};

export default Table;