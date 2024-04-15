import { ReactNode } from 'react';

export type ButtonProps = {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  intent?: 'primary' | 'secondary' | 'danger' | 'contained';
  customClass?: string;
  icon?: ReactNode
};

