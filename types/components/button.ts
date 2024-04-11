export type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  intent?: 'primary' | 'secondary' | 'danger';
  customClass?: string;
};

