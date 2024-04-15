import { ReactNode } from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
  children?: ReactNode
  width?: number
};
