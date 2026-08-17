import type { Category, CategoryId } from '../types'

export const categories: Category[] = [
  {
    id: 'network',
    name: 'Network & VPN',
    blurb: 'Get online, stay on the VPN, and reach internal systems.',
    countLabel: '12 guides',
  },
  {
    id: 'email',
    name: 'Email & Calendar',
    blurb: 'Outlook, mail flow, signatures, and meeting invites.',
    countLabel: '12 guides',
  },
  {
    id: 'accounts',
    name: 'Passwords & Accounts',
    blurb: 'Sign-in, MFA, lockouts, and Windows Hello.',
    countLabel: '10 guides',
  },
  {
    id: 'printers',
    name: 'Printers & Scanners',
    blurb: 'Offline printers, stuck jobs, jams, and scanning.',
    countLabel: '8 guides',
  },
  {
    id: 'files',
    name: 'Files & Storage',
    blurb: 'Recover files, sync OneDrive, and share large documents.',
    countLabel: '10 guides',
  },
  {
    id: 'hardware',
    name: 'Hardware',
    blurb: 'Keyboards, monitors, docks, batteries, and peripherals.',
    countLabel: '12 guides',
  },
  {
    id: 'software',
    name: 'Software & Apps',
    blurb: 'Installs, crashes, updates, and default programs.',
    countLabel: '12 guides',
  },
  {
    id: 'security',
    name: 'Security',
    blurb: 'Phishing, lost devices, malware, and safe sharing.',
    countLabel: '8 guides',
  },
  {
    id: 'mobile',
    name: 'Mobile & Remote',
    blurb: 'Phones, home offices, and working away from the desk.',
    countLabel: '8 guides',
  },
  {
    id: 'meetings',
    name: 'Meetings & Chat',
    blurb: 'Camera, mic, screen share, and collaboration tools.',
    countLabel: '8 guides',
  },
]

export const categoryById = Object.fromEntries(
  categories.map((category) => [category.id, category]),
) as Record<CategoryId, Category>
