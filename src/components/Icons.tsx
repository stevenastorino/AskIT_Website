import type { ReactNode } from 'react'
import type { CategoryId } from '../types'

type IconProps = { className?: string }

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function IconNetwork({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 8a4 4 0 0 1 8 0" />
      <path d="M5 11a7 7 0 0 1 14 0" />
      <path d="M2 14a10 10 0 0 1 20 0" />
      <circle cx="12" cy="18" r="1.2" fill="currentColor" stroke="none" />
    </Svg>
  )
}

export function IconEmail({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  )
}

export function IconAccounts({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" />
    </Svg>
  )
}

export function IconPrinters({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 8V4h10v4" />
      <rect x="4" y="8" width="16" height="8" rx="1.5" />
      <path d="M7 16h10v4H7z" />
      <path d="M16 11h.01" />
    </Svg>
  )
}

export function IconFiles({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 4h7l5 5v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      <path d="M14 4v5h5" />
    </Svg>
  )
}

export function IconHardware({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="11" rx="1.5" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </Svg>
  )
}

export function IconSoftware({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="m8 10 2.2 2L8 14" />
      <path d="M12.5 14H16" />
    </Svg>
  )
}

export function IconSecurity({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.4 7 8.5 4.2-1.1 7-4.3 7-8.5V6l-7-3z" />
    </Svg>
  )
}

export function IconMobile({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="8" y="3" width="8" height="18" rx="2" />
      <path d="M11 18h2" />
    </Svg>
  )
}

export function IconMeetings({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="m15 10 6-3v10l-6-3z" />
    </Svg>
  )
}

export function IconSearch({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </Svg>
  )
}

export function IconArrow({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  )
}

const categoryIcons: Record<CategoryId, (props: IconProps) => ReactNode> = {
  network: IconNetwork,
  email: IconEmail,
  accounts: IconAccounts,
  printers: IconPrinters,
  files: IconFiles,
  hardware: IconHardware,
  software: IconSoftware,
  security: IconSecurity,
  mobile: IconMobile,
  meetings: IconMeetings,
}

export function CategoryIcon({ id, className }: { id: CategoryId; className?: string }) {
  const Icon = categoryIcons[id]
  return <Icon className={className} />
}
