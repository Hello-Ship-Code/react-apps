import clsx from 'clsx';

export type ButtonNavProps = {
  text: string;
  className?: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  size: 'small' | 'medium' | 'large';
  variant?: 'primary-btn' | 'secondary-btn' | 'danger-btn' | 'outline-btn';
};

export const ButtonNav: React.FC<ButtonNavProps> = ({
  text,
  className,
  onClick,
  type = 'button',
  size = 'medium',
  variant = 'primary-btn',
}) => {
  return (
    <button
      className={clsx('baseClasses', variant, size, className)}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};