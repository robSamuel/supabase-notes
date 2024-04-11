export type Note = {
  id: string
  text: string
  createdBy: string
  createdAt: string
  updatedBy: string
  updatedAt: string
  isDeleted: boolean
};

export type TableProps = {
  notes: Note[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
};