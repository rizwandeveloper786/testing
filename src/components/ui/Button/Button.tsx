'use client';

    import { cn } from '@/lib/utils/utils';

    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      variant?: 'primary' | 'secondary' | 'outline';
      size?: 'sm' | 'md' | 'lg';
    }

    export default function Button({ className, variant = 'primary', size = 'md', children, ...props }: ButtonProps) {
      const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
      const variantStyles = {
        primary: 'bg-shifavedaGreen text-white hover:bg-green-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        outline: 'border border-shifavedaGreen text-shifavedaGreen hover:bg-green-100',
      };
      const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      };

      return (
        <button
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
          {...props}
        >
          {children}
        </button>
      );
    }