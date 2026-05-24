import type { HTMLAttributes, ReactNode } from 'react';

type StatusTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';

type StatusVariant = 'soft' | 'solid' | 'outline';

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: StatusTone;
  variant?: StatusVariant;
}

function joinClasses(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

function toneStyles(tone: StatusTone, variant: StatusVariant): string {
  const palette = {
    primary: {
      soft: 'border-[color:color-mix(in_srgb,var(--app-primary)_22%,var(--app-border))] bg-[var(--app-primary-soft)] text-[var(--app-primary)]',
      solid: 'border-[var(--app-primary)] bg-[var(--app-primary)] text-[var(--app-primary-contrast)]',
      outline: 'border-[color:color-mix(in_srgb,var(--app-primary)_30%,var(--app-border))] bg-transparent text-[var(--app-primary)]',
    },
    success: {
      soft: 'border-[color:color-mix(in_srgb,var(--app-success)_22%,var(--app-border))] bg-[var(--app-success-soft)] text-[var(--app-success)]',
      solid: 'border-[var(--app-success)] bg-[var(--app-success)] text-white',
      outline: 'border-[color:color-mix(in_srgb,var(--app-success)_30%,var(--app-border))] bg-transparent text-[var(--app-success)]',
    },
    warning: {
      soft: 'border-[color:color-mix(in_srgb,var(--app-warning)_22%,var(--app-border))] bg-[var(--app-warning-soft)] text-[var(--app-warning)]',
      solid: 'border-[var(--app-warning)] bg-[var(--app-warning)] text-white',
      outline: 'border-[color:color-mix(in_srgb,var(--app-warning)_30%,var(--app-border))] bg-transparent text-[var(--app-warning)]',
    },
    danger: {
      soft: 'border-[color:color-mix(in_srgb,var(--app-error)_22%,var(--app-border))] bg-[var(--app-error-soft)] text-[var(--app-error)]',
      solid: 'border-[var(--app-error)] bg-[var(--app-error)] text-white',
      outline: 'border-[color:color-mix(in_srgb,var(--app-error)_30%,var(--app-border))] bg-transparent text-[var(--app-error)]',
    },
    neutral: {
      soft: 'border-[var(--app-border)] bg-[var(--app-surface-muted)] text-[var(--app-text-secondary)]',
      solid: 'border-[var(--app-border)] bg-[var(--app-text-primary)] text-[var(--app-background)]',
      outline: 'border-[var(--app-border)] bg-transparent text-[var(--app-text-secondary)]',
    },
  } as const;

  return palette[tone][variant];
}

export function StatusBadge({
  children,
  tone = 'neutral',
  variant = 'soft',
  className,
  ...rest
}: StatusBadgeProps) {
  return (
    <span
      className={joinClasses(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold leading-none tracking-wide',
        toneStyles(tone, variant),
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export default StatusBadge;