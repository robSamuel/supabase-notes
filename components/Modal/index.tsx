import Button from "../Button";
import { ModalProps } from "@/types/components/modal";

const Modal = ({
  isOpen,
  onClose,
  onAccept = () => {},
  children,
  width = 300
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className={`w-[${width}px] bg-slate-800 p-4 rounded-lg shadow-lg`}>
        {children}
        <div className="flex justify-end">
          <Button label="Accept" onClick={onAccept} intent="primary" customClass="mt-4" />
          <Button label="Close" onClick={onClose} intent="danger" customClass="mt-4 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Modal