import type { HTMLAttributes, ReactNode } from 'react';

type StatTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';

export interface StatPillProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  helperText?: ReactNode;
  tone?: StatTone;
  compact?: boolean;
}

function joinClasses(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

function toneStyles(tone: StatTone): string {
  switch (tone) {
    case 'success':
      return 'border-[color:color-mix(in_srgb,var(--app-success)_22%,var(--app-border))] bg-[var(--app-success-soft)] text-[var(--app-success)]';
    case 'warning':
      return 'border-[color:color-mix(in_srgb,var(--app-warning)_22%,var(--app-border))] bg-[var(--app-warning-soft)] text-[var(--app-warning)]';
    case 'danger':
      return 'border-[color:color-mix(in_srgb,var(--app-error)_22%,var(--app-border))] bg-[var(--app-error-soft)] text-[var(--app-error)]';
    case 'neutral':
      return 'border-[var(--app-border)] bg-[var(--app-surface-muted)] text-[var(--app-text-secondary)]';
    default:
      return 'border-[color:color-mix(in_srgb,var(--app-primary)_22%,var(--app-border))] bg-[var(--app-primary-soft)] text-[var(--app-primary)]';
  }
}

export function StatPill({
  label,
  value,
  helperText,
  tone = 'primary',
  compact = false,
  className,
  ...rest
}: StatPillProps) {
  return (
    <div
      className={joinClasses(
        'inline-flex min-w-0 items-center gap-3 rounded-2xl border px-4 py-3 shadow-[var(--app-shadow-sm)]',
        compact && 'px-3 py-2',
        toneStyles(tone),
        className,
      )}
      {...rest}
    >
      <div className="min-w-0">
        <div className="text-xs font-medium uppercase tracking-[0.14em] opacity-80">{label}</div>
        {helperText ? (
          <div className="mt-1 text-[11px] font-medium opacity-70">{helperText}</div>
        ) : null}
      </div>

      <div className="ml-auto text-right text-lg font-semibold tracking-tight">{value}</div>
    </div>
  );
}

export default StatPill;