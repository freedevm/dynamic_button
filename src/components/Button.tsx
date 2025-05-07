import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant, children, disabled, ...props }) => {
  const baseStyles = 'w-[200px] h-[50px] flex items-center justify-center bg-no-repeat bg-cover transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500';

  const variantStyles = {
    primary: `bg-[url('/primary-button.png')] hover:cursor-pointer`,
    secondary: `bg-[url('/secondary-button.png')] hover:cursor-pointer`,
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const className = `${baseStyles} ${variantStyles[variant]} ${disabledStyles}`;

  return (
    <button className={className} disabled={disabled} {...props}>
      <span className="sr-only">{children}</span>
    </button>
  );
};

export default Button;