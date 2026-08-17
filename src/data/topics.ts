import type { CategoryId } from '../types'
import { articles } from './articles'

export type Topic = {
  id: string
  name: string
  blurb: string
  category: CategoryId
  slugs: string[]
}

export const topics: Topic[] = [
  {
    id: 'connect-to-the-network',
    name: 'Connect to the network',
    blurb: 'VPN, office Wi-Fi, guest access, Ethernet, and how to find your IP address.',
    category: 'network',
    slugs: [
      'connect-to-vpn',
      'connect-to-office-wifi',
      'guest-wifi-for-visitors',
      'use-ethernet-instead-of-wifi',
      'find-my-ip-address',
      'split-tunneling',
    ],
  },
  {
    id: 'fix-network-problems',
    name: 'Fix network problems',
    blurb: 'VPN drops, Wi-Fi with no internet, missing shared drives, and slow connections.',
    category: 'network',
    slugs: [
      'vpn-connected-no-internal-access',
      'vpn-keeps-disconnecting',
      'wifi-connected-no-internet',
      'cannot-access-shared-drive',
      'slow-internet',
      'cannot-join-meeting-network',
    ],
  },
  {
    id: 'send-and-set-up-email',
    name: 'Send and set up email',
    blurb: 'New Outlook profiles, stuck Outbox items, signatures, shared mailboxes, and out-of-office.',
    category: 'email',
    slugs: [
      'setup-outlook-new-computer',
      'emails-not-sending',
      'email-stuck-in-outbox',
      'create-email-signature',
      'add-shared-mailbox',
      'out-of-office-reply',
    ],
  },
  {
    id: 'inbox-and-calendar',
    name: 'Inbox and calendar',
    blurb: 'Missing mail, deleted messages, calendar invites, phishing, and a slow Outlook.',
    category: 'email',
    slugs: [
      'emails-not-receiving',
      'recover-deleted-email',
      'calendar-invites-not-showing',
      'share-a-calendar',
      'report-phishing-email',
      'outlook-slow-or-freezing',
    ],
  },
  {
    id: 'passwords-and-lockouts',
    name: 'Passwords and lockouts',
    blurb: 'Reset, expire, change, and unlock a work account after a password problem.',
    category: 'accounts',
    slugs: [
      'reset-my-password',
      'account-locked-out',
      'password-expired',
      'change-password-before-expiry',
      'cannot-sign-in-after-password-change',
    ],
  },
  {
    id: 'mfa-and-sign-in',
    name: 'MFA and sign-in',
    blurb: 'Authenticator apps, new phones, PINs, lock screens, and shared-account requests.',
    category: 'accounts',
    slugs: [
      'mfa-authenticator-not-working',
      'setup-mfa-new-phone',
      'forgot-windows-hello-pin',
      'unlock-screensaver',
      'shared-or-service-account-access',
    ],
  },
  {
    id: 'printer-not-printing',
    name: 'Printer not printing',
    blurb: 'Offline printers, adding a queue, stuck jobs, and prints that go to the wrong floor.',
    category: 'printers',
    slugs: [
      'printer-not-working',
      'add-network-printer',
      'print-job-stuck-in-queue',
      'prints-to-wrong-printer',
    ],
  },
  {
    id: 'print-quality-and-scanning',
    name: 'Print quality and scanning',
    blurb: 'Blank pages, jams, streaks, and scanning to email or OneDrive.',
    category: 'printers',
    slugs: [
      'printer-blank-pages',
      'printer-paper-jam',
      'poor-print-quality',
      'scan-document-to-email-or-onedrive',
    ],
  },
  {
    id: 'recover-and-sync-files',
    name: 'Recover and sync files',
    blurb: 'Deleted files, missing OneDrive documents, version history, and sync errors.',
    category: 'files',
    slugs: [
      'recover-deleted-files',
      'file-disappeared-from-onedrive',
      'restore-previous-file-version',
      'onedrive-not-syncing',
      'files-online-only',
    ],
  },
  {
    id: 'share-and-access-files',
    name: 'Share and access files',
    blurb: 'Low disk space, home access, locked files, large shares, and mapped drives.',
    category: 'files',
    slugs: [
      'disk-full-low-storage',
      'access-files-from-home',
      'cannot-open-file-permissions',
      'share-a-large-file',
      'map-a-network-drive',
    ],
  },
  {
    id: 'keyboards-mice-and-audio',
    name: 'Keyboards, mice, and audio',
    blurb: 'Dead keys, stuck keys, trackpads, headsets, webcams, and unrecognized USB devices.',
    category: 'hardware',
    slugs: [
      'keyboard-not-working',
      'keys-stuck-or-repeating',
      'mouse-or-trackpad-not-working',
      'headphones-not-detected',
      'webcam-not-working',
      'usb-device-not-recognized',
    ],
  },
  {
    id: 'screens-docks-and-power',
    name: 'Screens, docks, and power',
    blurb: 'External monitors, flicker, docks, overheating, batteries, and a laptop that will not start.',
    category: 'hardware',
    slugs: [
      'external-monitor-not-detected',
      'monitor-flickering-or-no-signal',
      'laptop-wont-turn-on',
      'laptop-overheating',
      'battery-draining-quickly',
      'docking-station-not-connecting',
    ],
  },
  {
    id: 'install-and-update-apps',
    name: 'Install and update apps',
    blurb: 'Approved software, updates, defaults, launch failures, and stuck Windows Update.',
    category: 'software',
    slugs: [
      'application-wont-launch',
      'install-approved-software',
      'software-needs-update',
      'request-unlisted-software',
      'set-default-browser-or-app',
      'windows-update-stuck',
    ],
  },
  {
    id: 'crashes-and-browser-issues',
    name: 'Crashes and browser issues',
    blurb: 'Office crashes, slow browsers, cache, PDFs, old plugins, and unexpected restarts.',
    category: 'software',
    slugs: [
      'excel-or-word-crashing',
      'browser-slow-or-crashing',
      'clear-cache-and-cookies',
      'pdf-wont-open',
      'java-or-plugin-errors',
      'blue-screen-or-unexpected-restart',
    ],
  },
  {
    id: 'phishing-and-malware',
    name: 'Phishing and malware',
    blurb: 'Suspicious links, possible viruses, locking the PC, and reporting a lost device.',
    category: 'security',
    slugs: [
      'possible-virus-or-malware',
      'clicked-suspicious-link',
      'lock-my-computer',
      'report-lost-or-stolen-device',
    ],
  },
  {
    id: 'protect-work-data',
    name: 'Protect work data',
    blurb: 'Blocked USB sticks, firewall denials, encrypting a file, and password requests.',
    category: 'security',
    slugs: [
      'usb-drive-blocked',
      'website-blocked-by-firewall',
      'encrypt-a-sensitive-file',
      'someone-asked-for-my-password',
    ],
  },
  {
    id: 'phones-and-mfa-codes',
    name: 'Phones and MFA codes',
    blurb: 'Work email on a phone, BYOD, missing MFA texts, and wiping a lost phone.',
    category: 'mobile',
    slugs: [
      'setup-email-on-phone',
      'byod-personal-phone',
      'phone-not-receiving-mfa-codes',
      'wipe-lost-phone',
    ],
  },
  {
    id: 'remote-work-setup',
    name: 'Remote work setup',
    blurb: 'Home VPN, remote access requests, dual monitors, and chat on a phone.',
    category: 'mobile',
    slugs: [
      'cannot-connect-vpn-from-home',
      'request-remote-access',
      'dual-monitor-setup-at-home',
      'teams-on-mobile',
    ],
  },
  {
    id: 'join-meetings',
    name: 'Join meetings',
    blurb: 'Camera, mic, lobby issues, echo, and missing chat notifications.',
    category: 'meetings',
    slugs: [
      'camera-or-mic-not-working-in-meetings',
      'cannot-join-a-meeting',
      'echo-or-feedback-in-meeting',
      'chat-notifications-not-working',
    ],
  },
  {
    id: 'present-and-collaborate',
    name: 'Present and collaborate',
    blurb: 'Screen share, the wrong display, recording, and creating a Teams or SharePoint space.',
    category: 'meetings',
    slugs: [
      'share-my-screen',
      'screen-share-wrong-screen',
      'record-a-meeting',
      'create-teams-or-sharepoint-site',
    ],
  },
]

const assigned = topics.flatMap((topic) => topic.slugs)
const missing = articles.filter((article) => !assigned.includes(article.slug)).map((article) => article.slug)
const extra = assigned.filter((slug) => !articles.some((article) => article.slug === slug))
const dupes = assigned.filter((slug, index) => assigned.indexOf(slug) !== index)

if (missing.length || extra.length || dupes.length || topics.length !== 20) {
  throw new Error(
    `Topic map is invalid: ${topics.length} topics, missing ${missing.join(', ') || 'none'}, extra ${extra.join(', ') || 'none'}, dupes ${dupes.join(', ') || 'none'}`,
  )
}

export const topicById = Object.fromEntries(topics.map((topic) => [topic.id, topic])) as Record<string, Topic>

export const topicByArticleSlug = Object.fromEntries(
  topics.flatMap((topic) => topic.slugs.map((slug) => [slug, topic])),
) as Record<string, Topic>

export function topicsInCategory(category: CategoryId): Topic[] {
  return topics.filter((topic) => topic.category === category)
}

export function articleHref(slug: string): string {
  const topic = topicByArticleSlug[slug]
  return topic ? `/guide/${topic.id}#${slug}` : '/browse'
}

export function topicArticles(topic: Topic) {
  return topic.slugs.map((slug) => articles.find((article) => article.slug === slug)!).filter(Boolean)
}
