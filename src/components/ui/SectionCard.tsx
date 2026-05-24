import type { HTMLAttributes, ReactNode } from 'react';
import { Paper } from '@mui/material';

type SectionCardVariant = 'default' | 'muted' | 'strong';

export interface SectionCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  variant?: SectionCardVariant;
  dense?: boolean;
}

function joinClasses(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

function variantStyles(variant: SectionCardVariant): string {
  switch (variant) {
    case 'muted':
      return 'bg-[var(--app-surface-muted)]';
    case 'strong':
      return 'bg-[var(--app-surface-strong)]';
    default:
      return 'bg-[var(--app-surface)]';
  }
}

export function SectionCard({
  title,
  subtitle,
  actions,
  children,
  className,
  variant = 'default',
  dense = false,
  ...rest
}: SectionCardProps) {
  const hasHeader = Boolean(title || subtitle || actions);

  return (
    <Paper
      component="section"
      elevation={0}
      className={joinClasses(
        'rounded-2xl border border-[var(--app-border)] shadow-[var(--app-shadow-md)]',
        variantStyles(variant),
        className,
      )}
      {...rest}
    >
      {hasHeader ? (
        <div
          className={joinClasses(
            'flex flex-col gap-3 border-b border-[var(--app-border)] px-5 py-4 sm:flex-row sm:items-start sm:justify-between',
            dense && 'px-4 py-3',
          )}
        >
          <div className="min-w-0">
            {title ? (
              <h2 className="text-base font-semibold tracking-tight text-[var(--app-text-primary)]">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-1 text-sm text-[var(--app-text-secondary)]">{subtitle}</p>
            ) : null}
          </div>

          {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
        </div>
      ) : null}

      <div className={joinClasses('px-5 py-5', dense && 'px-4 py-4')}>
        {children}
      </div>
    </Paper>
  );
}

export default SectionCard;