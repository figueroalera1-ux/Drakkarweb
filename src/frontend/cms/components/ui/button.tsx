import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-slate-950 text-white hover:bg-slate-800',
  secondary: 'border border-slate-300 bg-white text-slate-950 hover:bg-slate-100',
  ghost: 'text-slate-700 hover:bg-slate-100',
};

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  return <button className={`rounded-lg px-4 py-2 text-sm font-medium transition ${variants[variant]} ${className}`} {...props} />;
}
