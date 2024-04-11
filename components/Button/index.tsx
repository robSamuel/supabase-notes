import { ButtonProps } from '@/types/components/button';

const Button = ({ label, onClick, disabled, intent = 'primary', customClass = '' }: ButtonProps) => {
  return (
    <button
      className={`bg-${intent} text-white px-4 py-2 rounded-md ${disabled ? 'opacity-50 cursor-not-allowed ' : ''}${customClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
