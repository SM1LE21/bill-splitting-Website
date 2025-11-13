import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface DownloadButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export default function DownloadButton({
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
  children = 'Download for Android'
}: DownloadButtonProps) {
  const baseClasses = 'inline-flex items-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };
  
  return (
    <Link
      href="/downloads"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {showIcon && (
        <ArrowDownTrayIcon className={`${iconSizes[size]} ${children ? 'mr-2' : ''}`} />
      )}
      {children}
    </Link>
  );
} 