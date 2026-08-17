import type { Article } from '../types'

export const networkEmailAccountArticles: Article[] = [
  {
    slug: 'connect-to-vpn',
    title: 'How to connect to the company VPN',
    category: 'network',
    tags: ['vpn', 'remote', 'globalprotect', 'cisco', 'home'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Connect to the corporate VPN so you can reach internal apps, file shares, and intranet sites from home or while traveling.',
    symptoms: [
      'Internal websites will not load',
      'Shared drives are missing',
      'A banner says you are off the corporate network',
    ],
    steps: [
      {
        title: 'Confirm the VPN app is installed',
        detail:
          'Look for your company VPN client (often GlobalProtect, Cisco Secure Client, or Pulse). On Windows, open the Start menu and search “VPN”. If it is missing, install it from the company software catalog or ask IT to push it.',
      },
      {
        title: 'Join a trusted network first',
        detail:
          'Connect to home Wi-Fi or a phone hotspot. Hotel and airport networks sometimes block VPN ports. If the client cannot reach the portal, try a hotspot.',
      },
      {
        title: 'Sign in and approve MFA',
        detail:
          'Open the VPN client, confirm the company portal address, and sign in with your work account. Approve the prompt on your authenticator app or hardware key.',
      },
      {
        title: 'Wait for a connected status',
        detail:
          'The client should show Connected or a shield icon. Then try an internal site or mapped drive. If you just changed your password, sign out of the VPN client and sign in again.',
      },
    ],
    tip: 'Add the VPN app to your machine’s startup list if you work remotely most days. Disconnect when you are finished on a public or metered network.',
    escalate:
      'If the client is missing, the portal will not resolve, or MFA fails after two tries, contact IT with a screenshot of the exact error.',
  },
  {
    slug: 'vpn-connected-no-internal-access',
    title: 'VPN is connected but I cannot reach internal sites',
    category: 'network',
    tags: ['vpn', 'intranet', 'dns', 'shared drive'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'The VPN tunnel is up, but browsers and file shares still behave as if you are off-network.',
    symptoms: [
      'VPN shows Connected',
      'Intranet pages time out',
      'Network drives stay disconnected',
    ],
    steps: [
      {
        title: 'Confirm you are on the work VPN, not a personal one',
        detail:
          'Some laptops have more than one VPN. Disconnect personal or browser VPNs and leave only the company client connected.',
      },
      {
        title: 'Refresh DNS',
        detail:
          'On Windows, open Command Prompt and run ipconfig /flushdns. Close the browser completely and reopen the internal site using the official bookmark, not a saved IP.',
      },
      {
        title: 'Reconnect the tunnel',
        detail:
          'Disconnect the VPN, wait 20 seconds, then connect again. If your company uses more than one gateway, try the one closest to your region.',
      },
      {
        title: 'Test a known-good internal site',
        detail:
          'Try the intranet home page and a mapped drive. If the intranet works but a single app fails, that app may be down or restricted to office IPs.',
      },
    ],
    tip: 'Split tunneling can send some traffic around the VPN. If only a few sites fail, that is often the cause.',
    escalate:
      'Send IT the VPN gateway name, your public IP, and whether intranet, email, or file shares fail.',
  },
  {
    slug: 'vpn-keeps-disconnecting',
    title: 'The VPN keeps disconnecting',
    category: 'network',
    tags: ['vpn', 'unstable', 'wifi', 'sleep'],
    difficulty: 'moderate',
    minutes: 12,
    summary:
      'The VPN drops after a few minutes, after the lid closes, or when you move between rooms.',
    symptoms: [
      'Client flips between Connected and Disconnected',
      'Drops after the laptop sleeps',
      'Works on a hotspot but not on home Wi-Fi',
    ],
    steps: [
      {
        title: 'Rule out sleep and power saving',
        detail:
          'Set the laptop to never sleep while plugged in during a long session. After waking from sleep, disconnect and reconnect the VPN instead of leaving a stale tunnel.',
      },
      {
        title: 'Test a different network',
        detail:
          'Try a phone hotspot. If the VPN stays up, the home router may be dropping long-lived connections. Reboot the router and disable “VPN passthrough” experiments or extra security suites on the router.',
      },
      {
        title: 'Pause extra security software briefly',
        detail:
          'Personal firewalls and “web shields” can reset VPN traffic. Pause them for a test, then add the company VPN to the allow list.',
      },
      {
        title: 'Update the VPN client',
        detail:
          'Install the latest company-approved client from the software catalog. Old clients often fail after a gateway change.',
      },
    ],
    escalate:
      'If it still drops on a hotspot and on office Wi-Fi, open a ticket with the client version and a timestamp of the last drop.',
  },
  {
    slug: 'connect-to-office-wifi',
    title: 'How to connect to office Wi-Fi',
    category: 'network',
    tags: ['wifi', 'office', 'ssid', 'certificate'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Join the corporate wireless network with your work account so you are on the trusted LAN.',
    symptoms: [
      'The office SSID is visible but will not join',
      'You are asked for a password you do not have',
      'The laptop stays on a guest network',
    ],
    steps: [
      {
        title: 'Choose the corporate network, not guest',
        detail:
          'Select the official staff SSID. Guest networks are for visitors and usually cannot reach printers or file shares.',
      },
      {
        title: 'Sign in with your work account',
        detail:
          'When prompted, use your full work email or domain\\username and your current password. Accept the network certificate if your company uses 802.1X.',
      },
      {
        title: 'Forget a bad profile and retry',
        detail:
          'If it fails, forget the network in Wi-Fi settings, restart the wireless adapter, and join again. After a password change, Windows often keeps the old Wi-Fi password.',
      },
      {
        title: 'Confirm you received an office IP',
        detail:
          'Once connected, you should reach the intranet without VPN. If you only have internet and no internal sites, you may still be on guest.',
      },
    ],
    tip: 'Company-managed laptops should join automatically. If yours never does, the wireless profile may be missing from the device.',
    escalate:
      'If the SSID never appears, or certificate errors persist, include your building and floor so IT can check the access point.',
  },
  {
    slug: 'wifi-connected-no-internet',
    title: 'Wi-Fi is connected but there is no internet',
    category: 'network',
    tags: ['wifi', 'internet', 'dns', 'proxy'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'The laptop shows a strong wireless signal, but browsers and apps cannot reach the web.',
    symptoms: [
      'Pages spin and time out',
      'A globe or warning icon appears on the network icon',
      'Only some apps work',
    ],
    steps: [
      {
        title: 'Toggle the adapter',
        detail:
          'Turn Wi-Fi off and on. If that fails, use Airplane mode for 10 seconds, then reconnect. This clears a stuck DHCP lease.',
      },
      {
        title: 'Forget the network and rejoin',
        detail:
          'Forget the SSID, reconnect, and accept any captive portal. Hotel and cafe networks often require a browser login before internet starts.',
      },
      {
        title: 'Try another site and another device',
        detail:
          'Open a simple site and compare with your phone on the same Wi-Fi. If the phone also fails, reboot the router or move closer to the access point.',
      },
      {
        title: 'Flush DNS and release the address',
        detail:
          'On Windows run ipconfig /release, then ipconfig /renew, then ipconfig /flushdns. On a company laptop, also check that you are not stuck on a manual proxy.',
      },
    ],
    escalate:
      'If only your laptop fails on a working network, send IT the output of ipconfig /all and the SSID name.',
  },
  {
    slug: 'guest-wifi-for-visitors',
    title: 'How to get visitors onto guest Wi-Fi',
    category: 'network',
    tags: ['guest', 'visitor', 'wifi', 'contractor'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Give contractors and guests internet access without putting them on the staff network.',
    symptoms: [
      'A visitor cannot reach email on their own laptop',
      'You are asked to share the staff Wi-Fi password',
      'A contractor needs internet for a short meeting',
    ],
    steps: [
      {
        title: 'Use the published guest SSID',
        detail:
          'Point visitors to the guest network name posted in reception or on the meeting-room card. Never share the staff Wi-Fi password or a personal hotspot for guest use in the office.',
      },
      {
        title: 'Complete the guest portal',
        detail:
          'Most guest networks open a browser page for a name, email, and accept-terms step. If the page does not appear, have them visit a plain HTTP site to trigger it.',
      },
      {
        title: 'Request a sponsored account if required',
        detail:
          'Some sites need an employee sponsor. Use the guest-access form or reception process. Sponsored access usually expires the same day.',
      },
      {
        title: 'Set expectations',
        detail:
          'Guest Wi-Fi will not reach printers, file shares, or internal apps. Visitors who need those should use a company-managed loaner or a contractor account.',
      },
    ],
    escalate:
      'If the guest portal is down or a vendor needs temporary staff-network access, IT must provision it. Do not create workarounds.',
  },
  {
    slug: 'cannot-access-shared-drive',
    title: 'I cannot access a shared network drive',
    category: 'network',
    tags: ['shared drive', 'smb', 'permissions', 'mapping'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'A department drive is missing, asks for a password, or returns “access denied.”',
    symptoms: [
      'The drive letter is gone',
      'Windows asks for network credentials',
      'You can see the folder but cannot open files',
    ],
    steps: [
      {
        title: 'Confirm you are on the corporate network',
        detail:
          'In the office, join staff Wi-Fi or Ethernet. From home, connect to the VPN first. Shared drives are almost never available on guest Wi-Fi.',
      },
      {
        title: 'Reconnect the mapping',
        detail:
          'In File Explorer, try the official path (\\\\fileserver\\share). If it opens, remap it as a drive letter so it returns at sign-in.',
      },
      {
        title: 'Use your current work password',
        detail:
          'If prompted, enter domain\\username and the password you use for Windows. After a password change, old saved credentials in Windows Credential Manager often block the share.',
      },
      {
        title: 'Check with a teammate',
        detail:
          'If they can open it and you cannot, you likely need group access. If nobody can open it, the server or share may be down.',
      },
    ],
    tip: 'Prefer OneDrive or SharePoint for new work. Many file servers are being retired.',
    escalate:
      'Ask your manager to confirm you should have access, then ticket IT with the exact share path and the error text.',
  },
  {
    slug: 'find-my-ip-address',
    title: 'How to find my IP address',
    category: 'network',
    tags: ['ip', 'troubleshooting', 'support'],
    difficulty: 'easy',
    minutes: 3,
    summary:
      'Find the address IT often asks for when diagnosing network, printer, or VPN issues.',
    symptoms: [
      'A ticket form asks for your IP',
      'You need to confirm you are on the office network',
      'A printer setup wizard wants a host address',
    ],
    steps: [
      {
        title: 'Find the address on Windows',
        detail:
          'Open Settings → Network & internet → the active connection → Properties. Note the IPv4 address. Or run ipconfig in Command Prompt and read “IPv4 Address.”',
      },
      {
        title: 'Find it on a Mac',
        detail:
          'Open System Settings → Network → Wi-Fi or Ethernet → Details. The IP address is listed on the TCP/IP tab.',
      },
      {
        title: 'Know which IP IT wants',
        detail:
          'For office troubleshooting, send the laptop’s IPv4 address. For “the website is blocked from home,” IT may also want your public IP from a search for “what is my IP” while off VPN.',
      },
    ],
    tip: 'Addresses that start with 10., 172.16–31, or 192.168. are private. That is normal on office and home networks.',
    escalate:
      'If IT asked for an IP and you cannot find a connection, say whether Wi-Fi, Ethernet, or VPN is in use.',
  },
  {
    slug: 'slow-internet',
    title: 'Internet or internal apps feel unusually slow',
    category: 'network',
    tags: ['slow', 'bandwidth', 'wifi', 'vpn'],
    difficulty: 'moderate',
    minutes: 12,
    summary:
      'Pages crawl, file copies stall, or video calls pixelate when the network used to be fine.',
    symptoms: [
      'Sites load for a long time',
      'OneDrive or file copies stall',
      'Calls degrade only on your machine',
    ],
    steps: [
      {
        title: 'Separate Wi-Fi from the destination',
        detail:
          'Try a wired connection or a hotspot. If speed returns, the issue is local Wi-Fi. Move closer to the access point and forget crowded 2.4 GHz if 5 GHz is available.',
      },
      {
        title: 'Pause heavy sync and downloads',
        detail:
          'Pause OneDrive, Windows Update, and large browser downloads. A single large sync can make everything else feel broken.',
      },
      {
        title: 'Test with and without VPN',
        detail:
          'If you are in the office, disconnect VPN. If you are at home, compare a public site on and off VPN. A slow VPN gateway is a common remote-work cause.',
      },
      {
        title: 'Restart the stack',
        detail:
          'Reboot the laptop, then the home router if you are remote. In the office, try another desk to see if one access point is overloaded.',
      },
    ],
    escalate:
      'Include whether the slowness is only on VPN, only on Wi-Fi, and an example site or file that is slow.',
  },
  {
    slug: 'use-ethernet-instead-of-wifi',
    title: 'How to use a wired Ethernet connection',
    category: 'network',
    tags: ['ethernet', 'dock', 'wired', 'stability'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Switch from Wi-Fi to a cable when you need a more stable connection for calls or large files.',
    symptoms: [
      'Wi-Fi drops during meetings',
      'A dock is plugged in but the laptop stays on wireless',
      'IT asked you to test a wired connection',
    ],
    steps: [
      {
        title: 'Plug into a known-good office jack or dock',
        detail:
          'Use the company dock or a wall jack that other people use. Consumer switches and random floor ports are often disabled.',
      },
      {
        title: 'Confirm the adapter comes up',
        detail:
          'On Windows, Ethernet should appear under Network & internet. If it says “Unidentified network” or nothing happens, reseat the USB-C dock cable and try another port.',
      },
      {
        title: 'Turn Wi-Fi off for the test',
        detail:
          'Disable Wi-Fi so Windows cannot silently fall back. Then open an internal site and join a short test call.',
      },
      {
        title: 'Leave Wi-Fi off at your desk if you stay wired',
        detail:
          'Laptops that keep both on sometimes flip between them mid-call. At a fixed desk, wired-only is more reliable.',
      },
    ],
    escalate:
      'If the dock never gets a link light, include the dock model and whether other USB devices on that dock work.',
  },
  {
    slug: 'split-tunneling',
    title: 'What split tunneling is and when to use it',
    category: 'network',
    tags: ['vpn', 'split tunnel', 'performance'],
    difficulty: 'easy',
    minutes: 4,
    summary:
      'Understand why some internet traffic bypasses the VPN and when that helps or hurts.',
    symptoms: [
      'Streaming or personal sites are slow on VPN',
      'An internal app fails while public sites work',
      'IT mentioned split tunneling in a ticket',
    ],
    steps: [
      {
        title: 'Know the two modes',
        detail:
          'Full tunnel sends all traffic through the company network. Split tunnel sends only internal destinations through the VPN and lets general web traffic go out your home internet.',
      },
      {
        title: 'Use the company default',
        detail:
          'Do not change tunnel mode unless IT publishes a setting. Security and access rules assume the standard client configuration.',
      },
      {
        title: 'When split tunnel helps',
        detail:
          'It often improves home video calls and large personal downloads because that traffic no longer travels through the data center.',
      },
      {
        title: 'When it causes confusion',
        detail:
          'A site that is “kind of internal” may not be on the split-tunnel list, so it fails until IT adds it. That is a configuration request, not something to fix locally.',
      },
    ],
    escalate:
      'If a required work site fails only while VPN is connected, send the URL so IT can add it to the tunnel list.',
  },
  {
    slug: 'cannot-join-meeting-network',
    title: 'I cannot join a meeting because of the network',
    category: 'network',
    tags: ['meetings', 'firewall', 'vpn', 'wifi'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'Teams, Zoom, or Webex stays on “connecting” or drops you before the lobby.',
    symptoms: [
      'The meeting window never opens',
      'You hear no one and they cannot hear you',
      'It works on a phone hotspot but not on office or home Wi-Fi',
    ],
    steps: [
      {
        title: 'Try the desktop app, then the browser',
        detail:
          'If the app hangs, join from the browser link in the invite. If the browser hangs, use the desktop app. This isolates a broken client.',
      },
      {
        title: 'Change the network path',
        detail:
          'In the office, switch between Wi-Fi and Ethernet. At home, try with VPN off if the meeting is hosted in the cloud. Some VPN paths block real-time media.',
      },
      {
        title: 'Allow the meeting through local security tools',
        detail:
          'Personal VPNs, ad blockers, and extra firewalls commonly break meeting media. Pause them for the call.',
      },
      {
        title: 'Join from your phone as a fallback',
        detail:
          'Use the mobile app or the dial-in number so you do not miss the meeting while you keep troubleshooting.',
      },
    ],
    escalate:
      'If only company-managed PCs fail, include the meeting platform, whether VPN was on, and the error code from the app.',
  },
  {
    slug: 'setup-outlook-new-computer',
    title: 'How to set up Outlook on a new computer',
    category: 'email',
    tags: ['outlook', 'email', 'new hire', 'profile'],
    difficulty: 'easy',
    minutes: 10,
    summary:
      'Add your work mailbox so mail, calendar, and contacts appear on a newly issued laptop.',
    symptoms: [
      'Outlook asks you to add an account',
      'The inbox is empty on a new device',
      'Only the old computer still has mail',
    ],
    steps: [
      {
        title: 'Open Outlook and add your work account',
        detail:
          'Launch Outlook. When the account wizard appears, enter your work email. Sign in with your company password and complete MFA. Do not add a personal Gmail or Hotmail as the primary profile.',
      },
      {
        title: 'Let the mailbox download',
        detail:
          'The first sync can take several minutes. Status text in the bottom bar should move from “Disconnected” to “Connected to Microsoft Exchange” or Microsoft 365.',
      },
      {
        title: 'Add any shared mailboxes you need',
        detail:
          'If you also use a team inbox, add it after the primary mailbox is online. Shared mailboxes often appear automatically once IT has granted access.',
      },
      {
        title: 'Set your signature and time zone',
        detail:
          'Recreate your signature from the company template and confirm File → Options → Calendar time zone matches your location.',
      },
    ],
    tip: 'Mail lives in the cloud. You do not need to “move” mail from the old PC unless you kept files only in a local PST.',
    escalate:
      'If Outlook cannot find your mailbox or loops on MFA, include whether this is a brand-new account or a replacement laptop.',
  },
  {
    slug: 'emails-not-sending',
    title: 'Emails are not sending',
    category: 'email',
    tags: ['outlook', 'outbox', 'smtp', 'send'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'Messages sit in the Outbox, bounce, or never reach the recipient.',
    symptoms: [
      'Mail stays in Outbox',
      'You receive a non-delivery report',
      'The Send button does nothing',
    ],
    steps: [
      {
        title: 'Check the Outbox and your connection',
        detail:
          'Look in Outbox. If items are stuck, confirm Outlook shows Connected. Work offline mode is a common cause. Toggle it off from the Send/Receive tab.',
      },
      {
        title: 'Open a stuck message and resend',
        detail:
          'Open the item, confirm there is at least one valid To address, then Send again. Oversized attachments above the company limit will bounce until you use a link instead.',
      },
      {
        title: 'Read any bounce message',
        detail:
          'A non-delivery report usually says mailbox full, address not found, or blocked by policy. Fix the address or remove a blocked attachment type such as .exe.',
      },
      {
        title: 'Restart Outlook in a clean window',
        detail:
          'Quit Outlook fully from the system tray and reopen. If mail still will not send, try Outlook on the web to see whether the problem is only the desktop app.',
      },
    ],
    escalate:
      'Forward the bounce message to IT and say whether Outlook on the web can send.',
  },
  {
    slug: 'emails-not-receiving',
    title: 'I am not receiving emails',
    category: 'email',
    tags: ['outlook', 'inbox', 'rules', 'junk'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'People say they wrote to you, but nothing new appears in your inbox.',
    symptoms: [
      'Inbox looks stale',
      'Only some senders get through',
      'A teammate’s message to you bounced',
    ],
    steps: [
      {
        title: 'Search the whole mailbox',
        detail:
          'Search for the sender or subject across All Mailboxes, including Junk, Deleted, and Focused/Other. Rules and Focused Inbox hide a surprising amount of mail.',
      },
      {
        title: 'Check rules, forwarding, and Focused Inbox',
        detail:
          'Open Manage Rules & Alerts and look for a rule that moves or forwards everything. Turn off Focused Inbox temporarily. Disable unexpected forwarding.',
      },
      {
        title: 'Confirm your address with the sender',
        detail:
          'Ask them to send a one-line test to your exact work address and to check for a bounce. A typo or an old alias is common after a name change.',
      },
      {
        title: 'Compare desktop Outlook with the web',
        detail:
          'If web mail has the message and the desktop app does not, the local profile is stuck. If neither has it, the message never arrived.',
      },
    ],
    escalate:
      'If a bounce mentions quarantine or policy, do not ignore it. Send IT the bounce text and the sender’s address.',
  },
  {
    slug: 'recover-deleted-email',
    title: 'How to recover a deleted email',
    category: 'email',
    tags: ['outlook', 'deleted', 'recover', 'retention'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Bring back a message you deleted by accident, including items that left Deleted Items.',
    symptoms: [
      'A message is gone from the inbox',
      'Deleted Items is empty',
      'You need a message someone else deleted from a shared mailbox',
    ],
    steps: [
      {
        title: 'Check Deleted Items first',
        detail:
          'Open Deleted Items and sort by date. Drag the message back to the inbox. Search Deleted Items if the folder is large.',
      },
      {
        title: 'Recover items already emptied',
        detail:
          'In Outlook on the web, open Deleted Items → Recover items deleted from this folder. Select the message and Recover. This works for a limited retention window.',
      },
      {
        title: 'Look in archive or online archive',
        detail:
          'Older mail may have moved to Archive or In-Place Archive rather than being deleted. Search there before assuming it is gone.',
      },
      {
        title: 'Check a shared mailbox separately',
        detail:
          'Recover from the shared mailbox’s own Deleted Items. Recovering from your personal mailbox will not bring back team-inbox mail.',
      },
    ],
    tip: 'The recover folder is time-limited. Act the same day if the message matters.',
    escalate:
      'If Recover items shows nothing and the message is still required, IT may be able to restore from backup depending on retention policy.',
  },
  {
    slug: 'out-of-office-reply',
    title: 'How to set an out-of-office automatic reply',
    category: 'email',
    tags: ['outlook', 'ooo', 'automatic replies', 'vacation'],
    difficulty: 'easy',
    minutes: 4,
    summary:
      'Turn on an automatic reply so people know you are away and who to contact instead.',
    symptoms: [
      'You are going on leave',
      'People say they did not know you were out',
      'A reply is still sending after you returned',
    ],
    steps: [
      {
        title: 'Open Automatic Replies',
        detail:
          'In Outlook, go to File → Automatic Replies, or in Outlook on the web use Settings → Mail → Automatic replies.',
      },
      {
        title: 'Set the date range and message',
        detail:
          'Turn replies on, set start and end dates, and write a short message: when you return, what you will not monitor, and a backup contact. Use the company tone of voice.',
      },
      {
        title: 'Decide who receives it',
        detail:
          'Send one message inside the organization and a shorter one outside if you work with vendors or customers. Do not include personal cell numbers unless that is your team’s practice.',
      },
      {
        title: 'Turn it off when you return',
        detail:
          'If you set end dates, it should stop on its own. Confirm it is off on your first morning back.',
      },
    ],
    escalate:
      'If the option is missing, your mailbox type may not support it. Ask IT to enable Automatic Replies.',
  },
  {
    slug: 'calendar-invites-not-showing',
    title: 'Calendar invites are not showing on my calendar',
    category: 'email',
    tags: ['calendar', 'invites', 'outlook', 'timezone'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'You received a meeting email, but the appointment never appears on your calendar.',
    symptoms: [
      'Invite is in the inbox but not on the calendar',
      'The time looks wrong',
      'A recurring meeting vanished',
    ],
    steps: [
      {
        title: 'Accept the invite from the meeting message',
        detail:
          'Open the invite and choose Accept or Tentative. Some mailboxes do not auto-add invitations until you respond.',
      },
      {
        title: 'Check the right calendar',
        detail:
          'Make sure your default calendar is selected and overlay calendars are not hiding it. Shared calendars can look like “your” day at a glance.',
      },
      {
        title: 'Confirm time zone and working hours',
        detail:
          'A wrong time zone shifts meetings by several hours so they look missing. Set the calendar time zone to your current location.',
      },
      {
        title: 'Look for cancelled or updated copies',
        detail:
          'Search the mailbox for the meeting subject. An update or cancel from the organizer can remove the item. Ask the organizer to resend.',
      },
    ],
    escalate:
      'If accepted meetings never appear in Outlook on the web either, the mailbox calendar may need a repair.',
  },
  {
    slug: 'share-a-calendar',
    title: 'How to share my calendar',
    category: 'email',
    tags: ['calendar', 'sharing', 'permissions', 'delegate'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Give a colleague or assistant permission to see or edit your calendar.',
    symptoms: [
      'A teammate cannot see your availability',
      'An assistant needs to book for you',
      'You shared a calendar and they still see only free/busy',
    ],
    steps: [
      {
        title: 'Open Calendar permissions',
        detail:
          'In Outlook, right-click your calendar → Sharing and permissions, or use Share in Outlook on the web.',
      },
      {
        title: 'Choose the right permission level',
        detail:
          'Can view when I’m busy is enough for most coworkers. Can view all details shows subjects. Can edit is for assistants. Owner is rarely needed.',
      },
      {
        title: 'Add the person and send the sharing invite',
        detail:
          'They must accept the sharing email. If they already had an old permission, remove it and share again.',
      },
      {
        title: 'Open it on their side',
        detail:
          'They should add your calendar from the sharing mail or Open calendar. If they only need to schedule with you, viewing free/busy in Scheduling Assistant is often enough.',
      },
    ],
    tip: 'Do not share your calendar with people outside the company unless policy allows it.',
    escalate:
      'If sharing fails with a permissions error, IT may need to enable calendar sharing on the mailbox.',
  },
  {
    slug: 'email-stuck-in-outbox',
    title: 'A message is stuck in the Outbox',
    category: 'email',
    tags: ['outbox', 'outlook', 'stuck', 'attachment'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'One message will not leave the Outbox and may be blocking mail behind it.',
    symptoms: [
      'Outbox shows (1) or more',
      'New mail will not send',
      'Outlook says Working offline',
    ],
    steps: [
      {
        title: 'Turn off Work Offline',
        detail:
          'On the Send/Receive tab, make sure Work Offline is not enabled. Then click Send All.',
      },
      {
        title: 'Open the stuck item',
        detail:
          'Open the message. If the attachment is very large, remove it, upload the file to OneDrive, and send a link instead.',
      },
      {
        title: 'Delete and recreate if it is corrupted',
        detail:
          'Copy the text, delete the stuck Outbox item, and compose a new message. Corrupted drafts can block the queue.',
      },
      {
        title: 'Restart Outlook',
        detail:
          'Quit from the tray icon so the process actually ends, then reopen and send again.',
      },
    ],
    escalate:
      'If the Outbox item cannot be deleted, the Outlook profile may need to be recreated.',
  },
  {
    slug: 'add-shared-mailbox',
    title: 'How to add a shared mailbox',
    category: 'email',
    tags: ['shared mailbox', 'team inbox', 'outlook'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Open a team or department mailbox you have been granted access to.',
    symptoms: [
      'You were added to a team inbox but cannot see it',
      'Mail to the shared address never appears',
      'You can see it on the web but not in the desktop app',
    ],
    steps: [
      {
        title: 'Confirm access is already granted',
        detail:
          'Shared mailboxes do not appear until IT or the mailbox owner adds you. Wait a few minutes after the access email, then restart Outlook.',
      },
      {
        title: 'Let it auto-map, then add it manually if needed',
        detail:
          'Many shared mailboxes appear automatically in the left folder list. If not, in Outlook on the web use Open another mailbox, or in desktop Outlook add it from Account settings → Change → More Settings → Advanced → Add.',
      },
      {
        title: 'Send a test from the shared address',
        detail:
          'When composing, choose From and select the shared mailbox. If From is missing, you have read access only.',
      },
      {
        title: 'Keep personal and shared mail separate',
        detail:
          'Create rules on the shared mailbox, not your inbox, so team mail does not vanish into your personal folders.',
      },
    ],
    escalate:
      'If Open another mailbox says you do not have permission, ask the owner to confirm your access and then ticket IT.',
  },
  {
    slug: 'report-phishing-email',
    title: 'I received a suspicious or phishing email',
    category: 'email',
    tags: ['phishing', 'security', 'report', 'malware'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Handle a message that asks for passwords, payments, or urgent action without putting the company at risk.',
    symptoms: [
      'Unexpected password reset or invoice',
      'A link looks almost like a company site',
      'The sender name does not match the address',
    ],
    steps: [
      {
        title: 'Do not click, open, or reply',
        detail:
          'Do not open attachments, do not enter your password, and do not call any phone number in the message. Hover only if you need to describe the link to IT.',
      },
      {
        title: 'Report it with the company button',
        detail:
          'Use the Report Phishing or Report Message button in Outlook. That sends the original message to security with headers intact.',
      },
      {
        title: 'If you already clicked, stop and write down what happened',
        detail:
          'Disconnect from VPN if you entered a password, change your password from a device you trust, and note the time, the site, and whether you typed credentials or opened a file.',
      },
      {
        title: 'Warn the people it named, not the whole company',
        detail:
          'Tell your manager and IT. Do not forward the phishing mail to a large distribution list.',
      },
    ],
    tip: 'IT will never ask for your password by email. Finance will not ask you to buy gift cards.',
    escalate:
      'If you entered credentials or enabled a macro, call the IT security contact immediately. This is higher priority than a normal ticket.',
  },
  {
    slug: 'create-email-signature',
    title: 'How to create a company email signature',
    category: 'email',
    tags: ['signature', 'outlook', 'branding'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Add a standard signature so your name, title, and contact details appear on new mail.',
    symptoms: [
      'New messages have no signature',
      'Your signature looks different in replies',
      'You need the current brand template',
    ],
    steps: [
      {
        title: 'Get the official template',
        detail:
          'Use the signature block from the intranet or brand site. Do not invent logos, motivational quotes, or extra confidentiality banners.',
      },
      {
        title: 'Create it in Outlook',
        detail:
          'Go to File → Options → Mail → Signatures, or Settings → Mail → Compose and reply on the web. Paste the template and fill in your details.',
      },
      {
        title: 'Set defaults for new mail and replies',
        detail:
          'Apply the signature to new messages. Many teams use a shorter version for replies so threads stay readable.',
      },
      {
        title: 'Create it in both places if you use both clients',
        detail:
          'Desktop Outlook and Outlook on the web store signatures separately unless your company pushes them centrally.',
      },
    ],
    escalate:
      'If signatures are centrally managed and yours is wrong, ask IT or Communications to update the directory fields that feed it.',
  },
  {
    slug: 'outlook-slow-or-freezing',
    title: 'Outlook is slow or freezing',
    category: 'email',
    tags: ['outlook', 'performance', 'ost', 'add-ins'],
    difficulty: 'moderate',
    minutes: 12,
    summary:
      'Outlook hangs on send, takes minutes to open, or shows Not Responding.',
    symptoms: [
      'Splash screen lasts a long time',
      'Scrolling the inbox stutters',
      'Not Responding appears in the title bar',
    ],
    steps: [
      {
        title: 'Close extra mail windows and large attachments',
        detail:
          'Quit Outlook, reopen one window, and avoid opening huge PSTs. Disable the Reading Pane briefly to see if that helps.',
      },
      {
        title: 'Start with add-ins off',
        detail:
          'Hold Ctrl while starting Outlook and choose Safe Mode, or disable non-Microsoft add-ins from File → Options → Add-ins. CRM and PDF add-ins are frequent culprits.',
      },
      {
        title: 'Trim what is stored locally',
        detail:
          'In Account settings, shorten the mail to keep offline slider if your OST is huge. Archive or delete oversized Sent items.',
      },
      {
        title: 'Repair Office',
        detail:
          'Use Apps → Installed apps → Microsoft 365 → Modify → Quick Repair. If the profile is corrupt, IT may recreate it.',
      },
    ],
    escalate:
      'If Safe Mode is fine and normal mode is not, list the add-ins you use. If both are slow, include mailbox size.',
  },
  {
    slug: 'reset-my-password',
    title: 'How to reset my work password',
    category: 'accounts',
    tags: ['password', 'sspr', 'reset', 'entra'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Set a new password when you forgot the current one or it no longer works.',
    symptoms: [
      'Sign-in says password is incorrect',
      'You cannot remember the current password',
      'IT asked you to reset after an incident',
    ],
    steps: [
      {
        title: 'Use the self-service reset page',
        detail:
          'From the company sign-in screen, choose Forgot password. On a signed-in PC you can also use Ctrl+Alt+Del → Change a password if you still know the current one.',
      },
      {
        title: 'Prove it is you',
        detail:
          'Complete MFA with your authenticator app, phone, or security key. If you have no methods left, you cannot finish self-service reset.',
      },
      {
        title: 'Create a password that meets policy',
        detail:
          'Follow the length and complexity rules on the page. Do not reuse a recent password or a personal password.',
      },
      {
        title: 'Update every device that still has the old password',
        detail:
          'Reconnect Wi-Fi, VPN, Outlook, and your phone. Old saved passwords will lock the account if they keep retrying.',
      },
    ],
    tip: 'After a reset, sign out and back in on the laptop before you open VPN or email.',
    escalate:
      'If you have no MFA methods, call the service desk. They will verify your identity before unlocking reset.',
  },
  {
    slug: 'account-locked-out',
    title: 'My account is locked',
    category: 'accounts',
    tags: ['lockout', 'password', 'cached credentials'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'Windows or a website says the account is locked after too many failed sign-ins.',
    symptoms: [
      'Message says account is locked',
      'You just changed your password',
      'The phone or an old PC keeps asking for a password',
    ],
    steps: [
      {
        title: 'Stop the retries',
        detail:
          'A lockout continues until every device stops using the old password. Update or sign out of your phone email app, home PC, tablet, and any mapped drives.',
      },
      {
        title: 'Wait for the automatic unlock',
        detail:
          'Many companies unlock after 15–30 minutes if the bad attempts stop. Do not keep guessing while you wait.',
      },
      {
        title: 'Clear saved Windows passwords',
        detail:
          'Open Credential Manager and remove old work entries. Forget the office Wi-Fi network if it was using the previous password.',
      },
      {
        title: 'Sign in once on a known-good device',
        detail:
          'Use Outlook on the web from a browser after the lockout window. Then update the laptop and VPN.',
      },
    ],
    escalate:
      'If you never changed your password and lockouts keep returning, IT should look for a stale service or someone else attempting your account.',
  },
  {
    slug: 'mfa-authenticator-not-working',
    title: 'My authenticator app is not working',
    category: 'accounts',
    tags: ['mfa', 'authenticator', 'totp', 'phone'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'The MFA prompt never arrives, the code is rejected, or the app shows the wrong account.',
    symptoms: [
      'Sign-in waits on Approve sign-in',
      'Codes are marked invalid',
      'You got a new phone and the app is empty',
    ],
    steps: [
      {
        title: 'Check time and notifications',
        detail:
          'Turn on automatic date and time. Enable notifications for the authenticator. Open the app and wait for the prompt instead of relying only on a banner.',
      },
      {
        title: 'Use a code if the push fails',
        detail:
          'On the sign-in page choose Use a verification code and type the number shown for your work account. Codes change every 30 seconds; type the current one.',
      },
      {
        title: 'Confirm you are approving the right request',
        detail:
          'If you did not just try to sign in, deny the prompt. Unexpected MFA prompts can mean someone has your password.',
      },
      {
        title: 'Use a backup method',
        detail:
          'Try SMS, a phone call, or a security key if those are enrolled. If the phone was replaced, you need IT to add a new method.',
      },
    ],
    escalate:
      'If no methods work, call the service desk from a recorded line or in person. They will reset MFA after identity checks.',
  },
  {
    slug: 'setup-mfa-new-phone',
    title: 'How to set up MFA on a new phone',
    category: 'accounts',
    tags: ['mfa', 'new phone', 'authenticator'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'Move Microsoft Authenticator or the company MFA app to a replacement phone without locking yourself out.',
    symptoms: [
      'You are upgrading phones',
      'The old phone is broken or wiped',
      'IT required a stronger sign-in method',
    ],
    steps: [
      {
        title: 'Add the new method before you retire the old phone',
        detail:
          'While you can still approve MFA, open your security-info page and add the new phone. Scan the QR code in the authenticator app.',
      },
      {
        title: 'Complete a test sign-in',
        detail:
          'Sign out of a browser session and sign in again using the new phone. Keep the old method until that works.',
      },
      {
        title: 'If the old phone is already gone',
        detail:
          'Do not keep guessing. Contact IT for a temporary access pass or MFA reset. You cannot complete this alone if no backup method exists.',
      },
      {
        title: 'Remove the old device',
        detail:
          'After the new phone works, delete the old authenticator entry so prompts stop going to a device you no longer have.',
      },
    ],
    tip: 'Print or store backup codes only if your company issues them, and never in email.',
    escalate:
      'Lost phone plus no backup method is a same-day service-desk call, especially if the phone still has company mail.',
  },
  {
    slug: 'password-expired',
    title: 'My password expired',
    category: 'accounts',
    tags: ['password', 'expired', 'policy'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Windows or a website will not let you in until you choose a new password.',
    symptoms: [
      'Message says password expired',
      'You can reach the sign-in page but not the desktop',
      'VPN rejects a password that worked yesterday',
    ],
    steps: [
      {
        title: 'Change it at the prompt',
        detail:
          'If Windows shows the expiry screen, set a new password there. If you only see it on a website, use the company password-change page.',
      },
      {
        title: 'Unlock the laptop if you are already logged off',
        detail:
          'On a domain laptop, connect to office network or VPN with another device if needed, then change the password. Some laptops cannot change an expired password while fully offline.',
      },
      {
        title: 'Update saved passwords immediately',
        detail:
          'Refresh Outlook, VPN, Wi-Fi, and your phone. Stale passwords will lock the new one.',
      },
    ],
    escalate:
      'If there is no change prompt and every site rejects you, the account may be disabled rather than expired.',
  },
  {
    slug: 'change-password-before-expiry',
    title: 'How to change my password before it expires',
    category: 'accounts',
    tags: ['password', 'change', 'policy'],
    difficulty: 'easy',
    minutes: 4,
    summary:
      'Change a still-working password so you are not surprised on a deadline or travel day.',
    symptoms: [
      'You received an expiry warning',
      'You want a new password on your schedule',
      'A manager asked the team to rotate passwords',
    ],
    steps: [
      {
        title: 'Change it from a signed-in Windows session',
        detail:
          'Press Ctrl+Alt+Del → Change a password. Enter the current password and a new one that meets policy.',
      },
      {
        title: 'Or use the web security page',
        detail:
          'Open the company account portal → Password. This also works from a Mac or personal computer.',
      },
      {
        title: 'Sign out of other sessions on purpose',
        detail:
          'After changing, reopen VPN and mail so they store the new password. Restart the laptop once if Windows still uses the old cached logon.',
      },
    ],
    tip: 'Do not change your password minutes before a presentation. Give yourself time to update the phone and VPN.',
    escalate:
      'If the portal says you cannot change the password yet, a minimum-age policy may be in effect.',
  },
  {
    slug: 'forgot-windows-hello-pin',
    title: 'I forgot my Windows Hello PIN',
    category: 'accounts',
    tags: ['pin', 'windows hello', 'login'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'The laptop PIN no longer works and you need to get back to the desktop.',
    symptoms: [
      'PIN is incorrect',
      'Windows Hello face or fingerprint fails',
      'You see I forgot my PIN',
    ],
    steps: [
      {
        title: 'Sign in with your password once',
        detail:
          'Choose Sign-in options on the lock screen and pick the password icon. Use your work password, not the PIN.',
      },
      {
        title: 'Reset the PIN from the lock screen',
        detail:
          'Select I forgot my PIN and complete MFA. This replaces the PIN without changing your work password.',
      },
      {
        title: 'Set Hello up again after you are in',
        detail:
          'Go to Settings → Accounts → Sign-in options and re-enroll face or fingerprint if those also failed.',
      },
    ],
    escalate:
      'If password sign-in also fails, treat it as a password or lockout issue, not a PIN issue.',
  },
  {
    slug: 'shared-or-service-account-access',
    title: 'How to request access to a shared or service account',
    category: 'accounts',
    tags: ['access', 'service account', 'shared mailbox', 'permissions'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Get into a team mailbox, app login, or shared account without borrowing someone else’s password.',
    symptoms: [
      'A vendor portal is shared by the team',
      'You need a service account for an integration',
      'A coworker offered to send you a password',
    ],
    steps: [
      {
        title: 'Do not share personal passwords',
        detail:
          'Never send or receive a coworker’s password. Shared work should use a shared mailbox, security group, or a named service account.',
      },
      {
        title: 'Ask the owner to request access the official way',
        detail:
          'Use the access-request catalog or a ticket that names the system, the environment, and your manager. Most approvals are role-based.',
      },
      {
        title: 'Prefer groups over individual exceptions',
        detail:
          'Ask to be added to the existing AD or Entra group that already has access. That survives staff changes.',
      },
      {
        title: 'For true service accounts, let IT create them',
        detail:
          'Service accounts should have a recorded owner, MFA or a vaulted password, and no interactive daily use on a laptop.',
      },
    ],
    escalate:
      'If someone already sent you a shared password, do not use it. Ask IT to rotate it and grant you proper access.',
  },
  {
    slug: 'unlock-screensaver',
    title: 'The screen locked and I cannot get back in',
    category: 'accounts',
    tags: ['lock screen', 'screensaver', 'idle', 'pin'],
    difficulty: 'easy',
    minutes: 3,
    summary:
      'The workstation locked after idle time and the usual PIN or password is not unlocking it.',
    symptoms: [
      'Lock screen rejects the PIN',
      'The screen is black after the lid opened',
      'A kiosk or conference-room PC is locked',
    ],
    steps: [
      {
        title: 'Wake the display first',
        detail:
          'Press a key, tap the trackpad, or press the power button once. A dark screen is not always a lockout.',
      },
      {
        title: 'Use the correct sign-in method',
        detail:
          'Switch between PIN and password. After a password change, the PIN may need a reset. Caps Lock and a wrong keyboard layout are common.',
      },
      {
        title: 'Do not keep retrying a guessed PIN',
        detail:
          'Too many attempts can delay unlock. Use the password option or reset the PIN.',
      },
      {
        title: 'Conference-room and shared PCs',
        detail:
          'Sign out the previous user if you see their name. Do not reboot a room PC mid-meeting unless the organizer agrees.',
      },
    ],
    escalate:
      'If this is a shared device and no one knows the password, IT must unlock it. Do not attempt local admin workarounds.',
  },
  {
    slug: 'cannot-sign-in-after-password-change',
    title: 'I cannot sign in after changing my password',
    category: 'accounts',
    tags: ['password', 'cached logon', 'vpn', 'outlook'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'The new password works on the web but the laptop, VPN, or Outlook still fails.',
    symptoms: [
      'Web mail works, Windows does not',
      'VPN keeps the old password',
      'The account locks again after a successful reset',
    ],
    steps: [
      {
        title: 'Restart the laptop once',
        detail:
          'Windows caches the last successful logon. A restart after a password change lets the new password take over, especially off-network.',
      },
      {
        title: 'Connect to the company network',
        detail:
          'If you changed the password from home, connect VPN from your phone hotspot if needed, then sign in to the laptop so it can refresh the cached logon.',
      },
      {
        title: 'Update or delete saved passwords',
        detail:
          'Clear old Outlook, Wi-Fi, and Credential Manager entries. Sign into the VPN client fresh instead of letting it auto-fill.',
      },
      {
        title: 'Update the phone last',
        detail:
          'Phone mail apps are the most common source of post-change lockouts. Remove the work account and add it again with the new password.',
      },
    ],
    escalate:
      'If web sign-in works and the laptop still rejects the new password after a restart on VPN, the device may be out of sync with the directory.',
  },
]
