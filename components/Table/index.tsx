import Button from '../Button';
import { TableProps } from '@/types/notes';

const Table = ({ notes, onEdit, onDelete }: TableProps) => {
  const renderRows = () => {
    return notes.map(note => (
      <tr key={note.id}>
        <td className="w-[25px] text-left">{note.id}</td>
        <td className="w-[250px] text-left">{note.text}</td>
        {/* <td>{note.createdBy}</td> */}
        <td className="w-[120px] text-center">{note.createdAt}</td>
        {/* <td>{note.updatedBy}</td> */}
        <td className="w-[120px] text-center">{note.updatedAt}</td>
        <td className="flex justify-end">
          <Button label="Edit" onClick={() => onEdit(note.id)} />
          <Button label="Delete" onClick={() => onDelete(note.id)} />
        </td>
      </tr>
    ));
  };
  return (
    <table>
      <thead>
        <tr>
          <th className="w-[25px] text-left">Id</th>
          <th className="w-[250px] text-left">Text</th>
          {/* <th className="w-[25px] text-left">Created By</th> */}
          <th className="w-[120px] text-center">Created At</th>
          {/* <th className="w-[25px]">Updated By</th> */}
          <th className="w-[120px] text-center">Updated At</th>
          <th className="w-[25px] text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
};

export default Table;