import { cn } from '@/lib/utils'
import { Euro } from 'lucide-react';

export default function ProductPrice({
  value,
  className
}: {
  value: number,
  className: string
}) {
  const stringValue = value.toFixed(2);
  const [entera, decimales] = stringValue.split('.');

  return (
    <p className={cn('flex items-center gap-0.5 text-2xl', className)}>
      <Euro size={16} />
      {entera}
      <span className='text-xs align-super'>.{decimales}</span>
    </p>
  )
}
