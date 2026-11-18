import './Button.css';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export function createButton({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn';
  btn.textContent = label;
  btn.dataset.variant = variant;
  if (size !== 'md') btn.dataset.size = size;
  if (loading) btn.dataset.loading = 'true';
  btn.disabled = disabled;
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
}
