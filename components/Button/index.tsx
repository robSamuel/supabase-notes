import { ButtonProps } from '@/types/components/button';

const Button = ({
  label,
  onClick,
  disabled,
  intent = 'primary',
  customClass = '',
  icon = <></>
}: ButtonProps) => {
  const intentClass = {
    primary: 'bg-green-500 hover:bg-green-700',
    secondary: 'bg-blue-500 hover:bg-blue-700',
    danger: 'bg-red-500 hover:bg-red-700',
    contained: 'bg-transparent border-gray-700 border-2'
  }

  return (
    <button
      className={`${intentClass[intent]} text-white px-4 py-2 rounded ${disabled ? 'opacity-50 cursor-not-allowed ' : ''}${customClass}`}
      onClick={onClick}
    >
      <span className='flex items-center'>
        {label}
        {icon}
      </span>
    </button>
  );
};

export default Button;
