import type { Article } from '../types'

export const printersFilesHardwareArticles: Article[] = [
  {
    slug: 'printer-not-working',
    title: 'The printer is not working or shows as offline',
    category: 'printers',
    tags: ['printer', 'offline', 'queue', 'toner'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'A network or desk printer will not print, appears offline, or never wakes up.',
    symptoms: [
      'Status is Offline or Error',
      'Jobs sit in the queue',
      'The printer screen is dark',
    ],
    steps: [
      {
        title: 'Look at the printer itself',
        detail:
          'Confirm it is powered on, shows a ready state, and has paper and toner. Clear any jam message. A red light or “paper out” will keep every job waiting.',
      },
      {
        title: 'Confirm you are on the right network',
        detail:
          'Staff Wi-Fi or Ethernet is required. Guest Wi-Fi and many home networks cannot see office printers. From home you usually need VPN plus a follow-me print queue.',
      },
      {
        title: 'Remove stuck jobs and reprint',
        detail:
          'Open the print queue, cancel everything, and send a single test page. If the printer is offline, right-click it and use See what’s printing → Printer → Use Printer Online.',
      },
      {
        title: 'Remove and re-add the printer',
        detail:
          'Forget the device and add the official queue from the company printer list. Do not install a driver from a random website.',
      },
    ],
    tip: 'If several people on the floor are failing, it is the printer or server, not your laptop.',
    escalate:
      'Include the printer name on the label, your floor, and whether colleagues can print.',
  },
  {
    slug: 'add-network-printer',
    title: 'How to add a network printer',
    category: 'printers',
    tags: ['printer', 'install', 'follow-me', 'queue'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Install the correct office printer or follow-me queue on a Windows or Mac laptop.',
    symptoms: [
      'The printer you need is missing',
      'You moved desks or floors',
      'Prints go to the wrong building',
    ],
    steps: [
      {
        title: 'Use the company printer list',
        detail:
          'On a managed Windows PC, open the Software Center or Start menu printer portal and install the queue by building and floor. On a Mac, use the Self Service item if one exists.',
      },
      {
        title: 'Add from Windows settings if needed',
        detail:
          'Go to Settings → Bluetooth & devices → Printers & scanners → Add device. Choose the official name, not a similar Bonjour or WSD copy.',
      },
      {
        title: 'Set it as default only if you will use it daily',
        detail:
          'Follow-me or secure-release queues are better defaults than a single floor printer. You release the job at any compatible device with your badge.',
      },
      {
        title: 'Print a test page',
        detail:
          'Send one page and collect it. If the job vanishes with no error, you added a stale queue.',
      },
    ],
    escalate:
      'If the printer never appears in the directory, send the asset tag or IP printed on the configuration page.',
  },
  {
    slug: 'print-job-stuck-in-queue',
    title: 'A print job is stuck in the queue',
    category: 'printers',
    tags: ['printer', 'spooler', 'stuck job'],
    difficulty: 'easy',
    minutes: 7,
    summary:
      'One document will not print and may be blocking everything behind it.',
    symptoms: [
      'Queue shows Error or Printing forever',
      'Later jobs never start',
      'You cancelled the job but it remains',
    ],
    steps: [
      {
        title: 'Cancel the stuck document',
        detail:
          'Open the printer queue, select the job, and cancel it. Wait 30 seconds. If it says Deleting, restart the laptop’s print spooler next.',
      },
      {
        title: 'Restart the print spooler on Windows',
        detail:
          'Press Win+R, type services.msc, find Print Spooler, and restart it. This clears a hung local queue without rebooting.',
      },
      {
        title: 'Turn the printer off and on',
        detail:
          'If the job is already in the device memory, power-cycle the printer after the screen is dark for 10 seconds.',
      },
      {
        title: 'Resend a smaller test',
        detail:
          'Print one page from Notepad. If that works, the original file may be corrupted or too complex. Export a PDF and print the PDF.',
      },
    ],
    escalate:
      'If the spooler will not stay running, the printer driver is likely damaged and IT should reinstall it.',
  },
  {
    slug: 'printer-blank-pages',
    title: 'The printer is printing blank pages',
    category: 'printers',
    tags: ['printer', 'blank', 'toner', 'driver'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'Paper comes out with nothing on it, or only a header and no body.',
    symptoms: [
      'Blank sheets for every job',
      'Toner is low but not empty',
      'Only one application prints blank',
    ],
    steps: [
      {
        title: 'Check toner, ink, and sealing tape',
        detail:
          'Replace empty cartridges. On a new toner, remove the protective tape. Shake a nearly empty laser cartridge only if the vendor instructions allow it.',
      },
      {
        title: 'Print the printer’s own test page',
        detail:
          'Use the menu on the printer glass or LCD. If the hardware test page is also blank, the device needs service. If the hardware test is fine, the problem is the job or driver.',
      },
      {
        title: 'Print as image or from a PDF',
        detail:
          'Some Excel and browser jobs send blank output. Save to PDF and print the PDF, or in the driver enable Print as image.',
      },
      {
        title: 'Reinstall the official driver',
        detail:
          'Remove the printer and add the company queue again so you are not using a generic driver.',
      },
    ],
    escalate:
      'If the printer’s own test page is blank after new toner, request a hardware ticket for that asset.',
  },
  {
    slug: 'printer-paper-jam',
    title: 'How to clear a printer paper jam',
    category: 'printers',
    tags: ['printer', 'jam', 'paper'],
    difficulty: 'easy',
    minutes: 8,
    summary:
      'The printer reports a jam, even if you cannot see the paper at first.',
    symptoms: [
      'Jam message on the screen',
      'Paper wrinkled or torn',
      'The message remains after you pulled one sheet',
    ],
    steps: [
      {
        title: 'Follow the printer’s jam map',
        detail:
          'Open the trays and doors the screen highlights. Pull paper slowly in the direction of the path. Do not yank against rollers.',
      },
      {
        title: 'Look for scraps',
        detail:
          'Torn corners left on a roller will immediately jam the next page. Check the duplex area and the fuser door if the guide shows them.',
      },
      {
        title: 'Reload paper correctly',
        detail:
          'Fan the stack, load below the fill line, and set the guides snug. Curled or damp paper jams more often.',
      },
      {
        title: 'Close every door firmly',
        detail:
          'A slightly open tray keeps the error on. After the ready message returns, print one test page.',
      },
    ],
    tip: 'If the fuser area is hot, wait for it to cool. Do not reach past warning labels.',
    escalate:
      'If jams repeat in the same spot, the pickup roller is worn. Request service rather than forcing more paper.',
  },
  {
    slug: 'scan-document-to-email-or-onedrive',
    title: 'How to scan a document to email or OneDrive',
    category: 'printers',
    tags: ['scan', 'onedrive', 'email', 'mfp'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Turn a paper document into a PDF and send it to yourself or a shared library.',
    symptoms: [
      'You have a signed form to file',
      'The scanner asks for a destination',
      'A scan never arrived in email',
    ],
    steps: [
      {
        title: 'Badge in on a multifunction printer',
        detail:
          'Tap your badge or sign in so the device knows your email and OneDrive. Guest scans without sign-in often go nowhere.',
      },
      {
        title: 'Choose Scan to Me or Scan to OneDrive',
        detail:
          'Place the page on the glass or in the feeder, choose PDF, and pick one-sided or two-sided. Start with a single test page.',
      },
      {
        title: 'Check junk mail and the scan folder',
        detail:
          'Scans may land in Junk or in a OneDrive folder named Scans. Search your mailbox for the printer name.',
      },
      {
        title: 'Do not scan highly sensitive paper to a shared inbox',
        detail:
          'HR, payroll, and health documents should go to the approved secure location, not a team mailbox.',
      },
    ],
    escalate:
      'If badge login works for print but not scan, the scan connector for your account may not be provisioned.',
  },
  {
    slug: 'prints-to-wrong-printer',
    title: 'Jobs are going to the wrong printer',
    category: 'printers',
    tags: ['printer', 'default', 'wrong floor'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Pages appear on another floor, or Windows keeps selecting an old device.',
    symptoms: [
      'You walk to the nearest printer and nothing is there',
      'A coworker hands you your printout',
      'The default printer keeps changing',
    ],
    steps: [
      {
        title: 'Look at the printer name before you click Print',
        detail:
          'Expand the printer drop-down. Names usually include building and floor. Choose the follow-me queue if you want to release at any device.',
      },
      {
        title: 'Set a sensible default',
        detail:
          'In Printers & scanners, open the correct queue and set it as default. Turn off Windows “manage default printer” if it keeps picking the last device you used in another building.',
      },
      {
        title: 'Remove printers you no longer use',
        detail:
          'Old queues from a previous desk are a common trap. Remove them so they cannot be selected by accident.',
      },
    ],
    escalate:
      'If a follow-me job is released to the wrong device when you badge in, include both printer names in the ticket.',
  },
  {
    slug: 'poor-print-quality',
    title: 'Print quality is streaky, faded, or dirty',
    category: 'printers',
    tags: ['printer', 'streaks', 'toner', 'quality'],
    difficulty: 'easy',
    minutes: 8,
    summary:
      'Pages have lines, pale text, toner spots, or the wrong colors.',
    symptoms: [
      'Vertical streaks',
      'Faded text',
      'Speckles or ghost images',
    ],
    steps: [
      {
        title: 'Print a quality report from the device',
        detail:
          'Use the printer menu to print a cleaning or configuration page. If the defect is on that page too, it is hardware or consumables, not your file.',
      },
      {
        title: 'Replace or reseat the cartridge',
        detail:
          'Low toner causes fade. A poorly seated cartridge causes streaks. Run the device cleaning routine if the vendor provides one.',
      },
      {
        title: 'Try a different file and paper',
        detail:
          'Print a simple Word page on official paper. Labels, envelopes, and recycled stock often smear. In the driver, pick the matching paper type.',
      },
      {
        title: 'Stop using the printer if it is smearing toner',
        detail:
          'Loose toner can damage the fuser. Put an “out of order” note on the device and call facilities or IT.',
      },
    ],
    escalate:
      'Repeating streaks after a new cartridge usually mean a drum or fuser replacement.',
  },
  {
    slug: 'recover-deleted-files',
    title: 'How to recover deleted files',
    category: 'files',
    tags: ['recycle bin', 'onedrive', 'restore', 'deleted'],
    difficulty: 'easy',
    minutes: 8,
    summary:
      'Get a file back after it was deleted from your PC, OneDrive, or a shared library.',
    symptoms: [
      'A file vanished from a folder',
      'You emptied the Recycle Bin too soon',
      'A teammate deleted a shared document',
    ],
    steps: [
      {
        title: 'Check the Recycle Bin on the PC',
        detail:
          'Open Recycle Bin, search by name, and Restore. This only helps for files deleted from the local disk, not from a browser-only SharePoint view.',
      },
      {
        title: 'Check OneDrive recycle bin',
        detail:
          'In the OneDrive website, open Recycle bin and restore the file. Shared libraries have their own recycle bin on the SharePoint site.',
      },
      {
        title: 'Restore a previous version if the file still exists',
        detail:
          'If the file is there but empty or overwritten, use Version history in OneDrive, SharePoint, Word, or Excel and restore an earlier copy.',
      },
      {
        title: 'Ask whether someone else has a copy',
        detail:
          'Email attachments, chat downloads, and a teammate’s sync folder often still hold a copy while retention is still open.',
      },
    ],
    tip: 'Act quickly. Recycle bins and retention windows expire.',
    escalate:
      'If both recycle bins are empty and the file is critical, IT may restore from backup. Provide the exact path and the deletion time.',
  },
  {
    slug: 'file-disappeared-from-onedrive',
    title: 'A file disappeared from OneDrive or SharePoint',
    category: 'files',
    tags: ['onedrive', 'sharepoint', 'missing', 'sync'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'A document you used recently is gone from the folder you expect, but you did not delete it.',
    symptoms: [
      'Folder looks empty or shorter',
      'Search cannot find the file',
      'The file exists on another person’s PC',
    ],
    steps: [
      {
        title: 'Search across the whole library',
        detail:
          'Use OneDrive or SharePoint search, not just the current folder. Files are often moved, renamed, or saved to a personal folder by accident.',
      },
      {
        title: 'Sort by Modified and check Shared',
        detail:
          'On the OneDrive home page, open Recent and Shared. A file can leave a folder and still exist in Recent.',
      },
      {
        title: 'Review the recycle bin and version history',
        detail:
          'Restore from the site recycle bin if it was deleted. If a sync conflict created a “computer name” copy, open both and keep the right one.',
      },
      {
        title: 'Confirm you are in the right tenant and site',
        detail:
          'Some people have a personal OneDrive and several SharePoint sites. Check the site name in the browser bar.',
      },
    ],
    escalate:
      'If audit history is required to see who moved it, IT or the site owner can read the library activity.',
  },
  {
    slug: 'restore-previous-file-version',
    title: 'How to restore a previous version of a file',
    category: 'files',
    tags: ['version history', 'onedrive', 'excel', 'word'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Roll back a document after a bad edit, a merge, or an overwrite.',
    symptoms: [
      'Content is missing or wrong',
      'A coworker overwrote your work',
      'The file will not open after a crash',
    ],
    steps: [
      {
        title: 'Use Version history in the Office app',
        detail:
          'In Word, Excel, or PowerPoint, open File → Info → Version history, or the title-bar version menu. Preview a version, then Restore.',
      },
      {
        title: 'Or restore from OneDrive or SharePoint',
        detail:
          'In the browser, select the file → Version history. Restore the version you want. The current copy is kept as another version.',
      },
      {
        title: 'Save a copy first if you are unsure',
        detail:
          'Download the current file before restoring so you can compare. Restoring does not always keep unsaved local edits.',
      },
    ],
    tip: 'Version history exists only for files stored in OneDrive, SharePoint, or another versioned system — not for a random USB stick.',
    escalate:
      'If Version history is missing, the file may be stored only on the local disk. Move future work to OneDrive.',
  },
  {
    slug: 'onedrive-not-syncing',
    title: 'OneDrive is not syncing',
    category: 'files',
    tags: ['onedrive', 'sync', 'paused', 'error'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'The OneDrive cloud icon shows an error, files stay at “sync pending,” or changes never appear for coworkers.',
    symptoms: [
      'Red X or pause on the OneDrive icon',
      'A file is on your PC but not on the website',
      'Storage is full',
    ],
    steps: [
      {
        title: 'Read the icon and unpause',
        detail:
          'Click the OneDrive cloud in the notification area. Resume sync if it is paused. Sign in again if it asks.',
      },
      {
        title: 'Fix the file that is blocking the queue',
        detail:
          'OneDrive often stalls on one invalid name, an open file, or a path that is too long. Rename, close Office apps, and shorten folders.',
      },
      {
        title: 'Check quota',
        detail:
          'If the account is full, sync stops. Move large videos or archives to an approved archive library, or delete old Recycle Bin items.',
      },
      {
        title: 'Reset the client if it is stuck',
        detail:
          'Quit OneDrive and reopen. If errors remain, use the official reset command from Microsoft 365 support, then sign in again. Your cloud files are not deleted by a client reset.',
      },
    ],
    escalate:
      'If the website has the files and the PC will not sync after reset, include the error code from the OneDrive window.',
  },
  {
    slug: 'disk-full-low-storage',
    title: 'The disk is full or Windows says low storage',
    category: 'files',
    tags: ['disk', 'storage', 'temp', 'onedrive'],
    difficulty: 'moderate',
    minutes: 12,
    summary:
      'The laptop warns that the drive is almost full, and apps start failing to save.',
    symptoms: [
      'Low disk space banner',
      'Downloads fail',
      'Windows Update will not install',
    ],
    steps: [
      {
        title: 'See what is using space',
        detail:
          'Open Settings → System → Storage and wait for the breakdown. Temporary files, Downloads, and Videos are the usual offenders.',
      },
      {
        title: 'Empty Recycle Bin and Downloads you do not need',
        detail:
          'Delete installers and duplicate downloads. Empty Recycle Bin. Do not delete folders you do not recognize under Windows or Program Files.',
      },
      {
        title: 'Use OneDrive Files On-Demand',
        detail:
          'In OneDrive settings, make older files online-only so they leave local disk but remain in the cloud. Right-click a folder → Free up space.',
      },
      {
        title: 'Clear Windows temp and update leftovers',
        detail:
          'In Storage, clean Temporary files. Keep Downloads reviewed before you tick that box. Restart after a large cleanup.',
      },
    ],
    escalate:
      'If a 256 GB laptop is still full after cleanup, IT can check for a broken user profile or an oversized Outlook OST.',
  },
  {
    slug: 'access-files-from-home',
    title: 'How to access work files from home',
    category: 'files',
    tags: ['remote', 'onedrive', 'vpn', 'sharepoint'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Open your documents away from the office without emailing copies to yourself.',
    symptoms: [
      'A file is only on the office PC',
      'You need a SharePoint library from home',
      'A network drive will not open off-site',
    ],
    steps: [
      {
        title: 'Prefer OneDrive and SharePoint in the browser',
        detail:
          'Sign in to office.com or the company portal. Your files and shared libraries are there without a mapped drive.',
      },
      {
        title: 'Use the OneDrive app on the laptop',
        detail:
          'If the laptop is already signed in, files in your OneDrive folder work online or offline depending on how you pinned them.',
      },
      {
        title: 'Connect VPN only for legacy file servers',
        detail:
          'Old mapped drives still need VPN. If a drive fails from home, confirm VPN is connected, then retry the \\\\server\\share path.',
      },
      {
        title: 'Stop emailing yourself copies',
        detail:
          'That creates version confusion and can leak data through personal mail. Save to OneDrive and send a link.',
      },
    ],
    escalate:
      'If a library is blocked from home even on VPN, it may be restricted to office IPs. Ask the site owner and IT.',
  },
  {
    slug: 'cannot-open-file-permissions',
    title: 'I cannot open a file because of permissions or a lock',
    category: 'files',
    tags: ['permissions', 'locked', 'sharepoint', 'access denied'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'Windows or Office says you do not have access, or the file is locked by another user.',
    symptoms: [
      'Access denied',
      'File is locked for editing',
      'You can view but not save',
    ],
    steps: [
      {
        title: 'If it is locked, open read-only or ask the other editor',
        detail:
          'Office shows who has the file. Ask them to close it, or use Open as copy. Autosave on SharePoint usually allows co-authoring instead of a hard lock.',
      },
      {
        title: 'If access is denied, request access',
        detail:
          'Use the Request access button on the SharePoint page so the owner gets a mail. Do not ask a coworker to email a private copy of restricted files.',
      },
      {
        title: 'Sign in with the work account',
        detail:
          'A personal Microsoft account in the browser can open the page and still have no permissions. Check the account photo in the top corner.',
      },
      {
        title: 'Local files that say in use',
        detail:
          'Close Word and Excel from Task Manager if a previous crash left them open. Then reopen the file.',
      },
    ],
    escalate:
      'If the owner already granted access and it still fails after an hour, include the file URL and your work account.',
  },
  {
    slug: 'share-a-large-file',
    title: 'How to share a large file',
    category: 'files',
    tags: ['share', 'onedrive', 'large file', 'attachment'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Send a big deck, video, or zip without bouncing off the email size limit.',
    symptoms: [
      'Outlook refuses the attachment',
      'A recipient says the mail never arrived',
      'You need to share with someone outside the company',
    ],
    steps: [
      {
        title: 'Upload to OneDrive or the team library',
        detail:
          'Put the file in OneDrive or the correct SharePoint site. Do not use a personal Dropbox or USB unless policy allows it.',
      },
      {
        title: 'Share a link with the right audience',
        detail:
          'Choose People you choose for work files. Use Anyone or Specific people only when policy allows external sharing. Set an expiration if the portal offers it.',
      },
      {
        title: 'Give view or edit on purpose',
        detail:
          'View-only is enough for most reviews. Edit if you want comments and co-authoring. Avoid “anyone with the link can edit” on confidential files.',
      },
      {
        title: 'Paste the link in the email',
        detail:
          'Outlook can also convert a large attachment to a OneDrive link automatically. Keep the mail text short and include why they received it.',
      },
    ],
    escalate:
      'If external sharing is blocked, IT or the site owner must allow it for that library — do not send the file to a personal email to bypass this.',
  },
  {
    slug: 'files-online-only',
    title: 'Files are stuck as online-only and will not open offline',
    category: 'files',
    tags: ['onedrive', 'files on demand', 'offline'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Cloud icons appear on files, and they will not open on a plane or without internet.',
    symptoms: [
      'Cloud icon instead of a green check',
      'File opens only when online',
      'You need documents for travel',
    ],
    steps: [
      {
        title: 'Always keep the files you need on this device',
        detail:
          'In File Explorer, right-click the file or folder → Always keep on this device. Wait until the icon becomes a solid green check.',
      },
      {
        title: 'Do this before you leave the network',
        detail:
          'Pin folders while you still have internet and OneDrive is finished syncing. Check the OneDrive icon for “Up to date.”',
      },
      {
        title: 'Free up space later',
        detail:
          'When you return, right-click unused folders → Free up space so they become online-only again.',
      },
    ],
    escalate:
      'If Always keep on this device never finishes, OneDrive is not syncing. Fix sync first.',
  },
  {
    slug: 'map-a-network-drive',
    title: 'How to map a network drive',
    category: 'files',
    tags: ['mapped drive', 'smb', 'file server'],
    difficulty: 'moderate',
    minutes: 7,
    summary:
      'Reconnect a department share so it appears as a drive letter in File Explorer.',
    symptoms: [
      'A drive letter is missing after a restart',
      'You were told to use \\\\server\\share',
      'The drive asks for a password every time',
    ],
    steps: [
      {
        title: 'Be on VPN or the office network',
        detail:
          'Mappings fail immediately from guest Wi-Fi or a home network without VPN.',
      },
      {
        title: 'Map it from File Explorer',
        detail:
          'Right-click This PC → Map network drive. Choose a letter, enter the official path, and tick Reconnect at sign-in. Use your work credentials if asked.',
      },
      {
        title: 'Save the correct account',
        detail:
          'Use domain\\username, not a personal Microsoft account. If Windows stored the wrong password, delete it from Credential Manager and map again.',
      },
      {
        title: 'Prefer a shortcut to SharePoint if IT has migrated the share',
        detail:
          'Many “S: drives” are now libraries. Ask your team whether the live location is still the file server.',
      },
    ],
    escalate:
      'If the path cannot be found, the server name may have changed. Send the old path and department name.',
  },
  {
    slug: 'keyboard-not-working',
    title: 'My keyboard is not working',
    category: 'hardware',
    tags: ['keyboard', 'usb', 'laptop', 'keys'],
    difficulty: 'easy',
    minutes: 8,
    summary:
      'The built-in or external keyboard types nothing, misses keys, or only works after a delay.',
    symptoms: [
      'No characters appear',
      'Only some keys work',
      'The external keyboard is dead',
    ],
    steps: [
      {
        title: 'Rule out the obvious',
        detail:
          'Toggle Caps Lock and Num Lock. Unplug the keyboard and try another USB port, preferably on the laptop itself rather than a hub. For wireless keyboards, replace batteries and re-pair Bluetooth.',
      },
      {
        title: 'Test in another app and on the lock screen',
        detail:
          'If the lock screen accepts the password but Word does not, the app is at fault. If nothing types anywhere, it is the device or driver.',
      },
      {
        title: 'For a laptop keyboard, reseat and restart',
        detail:
          'Turn the laptop off, wait 30 seconds, and power on. If a spill just happened, power off immediately and do not keep typing.',
      },
      {
        title: 'Try an external keyboard as a workaround',
        detail:
          'A USB keyboard lets you keep working while IT replaces a laptop keyboard. On company desktops, try a known-good keyboard from a nearby empty desk only if policy allows.',
      },
    ],
    tip: 'After a liquid spill, do not use a hair dryer or rice. Power off and request service.',
    escalate:
      'If a replacement USB keyboard also fails, the USB ports or OS profile may be damaged.',
  },
  {
    slug: 'keys-stuck-or-repeating',
    title: 'Keys are stuck, repeating, or typing the wrong characters',
    category: 'hardware',
    tags: ['keyboard', 'repeat', 'layout', 'sticky keys'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'A key repeats on its own, the layout is wrong, or accessibility features changed how keys behave.',
    symptoms: [
      'A letter streams across the page',
      'Symbols appear instead of numbers',
      'You have to hold keys longer than usual',
    ],
    steps: [
      {
        title: 'Turn off Sticky Keys and Filter Keys',
        detail:
          'Windows can enable these after Shift is pressed five times. Open Settings → Accessibility → Keyboard and turn them off if you did not mean to use them.',
      },
      {
        title: 'Check the keyboard layout',
        detail:
          'Look at the language icon on the taskbar. Switch back to your usual layout. A US/UK swap makes punctuation look “broken.”',
      },
      {
        title: 'Clean around the key',
        detail:
          'Power off and use a little compressed air. Do not pry keycaps off a laptop unless IT asks you to.',
      },
      {
        title: 'Try another keyboard',
        detail:
          'If the same key repeats on an external keyboard, it is software. If only the laptop repeats, it is hardware.',
      },
    ],
    escalate:
      'A single dead or repeating laptop key after cleaning is a hardware replacement.',
  },
  {
    slug: 'external-monitor-not-detected',
    title: 'My external monitor is not detected',
    category: 'hardware',
    tags: ['monitor', 'display', 'hdmi', 'dock'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'A second screen stays black, or Windows does not list it in display settings.',
    symptoms: [
      'No signal on the monitor',
      'Only the laptop screen is active',
      'The dock lights are on but the display is not',
    ],
    steps: [
      {
        title: 'Confirm power, input, and cable',
        detail:
          'Turn the monitor on, choose the matching input (HDMI, DisplayPort, USB-C), and reseat both ends of the cable. Try the cable that already works on a colleague’s desk.',
      },
      {
        title: 'Use the dock the way it was issued',
        detail:
          'Plug the USB-C or Thunderbolt cable into the laptop port that supports video, usually marked or the one IT specified. Charge-only ports will not drive a display.',
      },
      {
        title: 'Detect the display in Windows',
        detail:
          'Right-click the desktop → Display settings → Multiple displays → Detect. Press Win+P and choose Extend, not PC screen only.',
      },
      {
        title: 'Restart with the cable connected',
        detail:
          'Shut down, connect the monitor, then power on. Update or reinstall the dock only from the company catalog if Detect still fails.',
      },
    ],
    escalate:
      'If another laptop works on the same monitor and cable, your machine or dock needs service. Include both models.',
  },
  {
    slug: 'monitor-flickering-or-no-signal',
    title: 'The monitor is flickering or says no signal',
    category: 'hardware',
    tags: ['monitor', 'flicker', 'no signal', 'refresh'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'The picture flashes, goes black, or the monitor cannot keep a signal.',
    symptoms: [
      'Flicker every few seconds',
      'No signal after the laptop sleeps',
      'The screen works, then drops',
    ],
    steps: [
      {
        title: 'Reseat the video cable and try another port',
        detail:
          'Loose HDMI and DisplayPort cables cause flicker. Use a shorter official cable and avoid cheap adapters stacked together.',
      },
      {
        title: 'Set a standard resolution and refresh rate',
        detail:
          'In Display settings, use the recommended resolution and 60 Hz unless the monitor is known to support more. A mismatched refresh rate looks like flicker.',
      },
      {
        title: 'Wake and reconnect after sleep',
        detail:
          'Close the lid only if the dock is set to keep the session alive. Otherwise, use Win+P after wake or unplug and replug the dock cable.',
      },
      {
        title: 'Test the monitor on another machine',
        detail:
          'If it flickers everywhere, the panel or power supply is failing. If it only flickers on your laptop, update the display driver from the company catalog.',
      },
    ],
    escalate:
      'Persistent flicker after a known-good cable and 60 Hz is hardware. Do not keep using a display that flashes badly.',
  },
  {
    slug: 'laptop-wont-turn-on',
    title: 'My laptop will not turn on',
    category: 'hardware',
    tags: ['power', 'battery', 'charger', 'laptop'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'The machine stays dark when you press power, or it lights up and immediately shuts off.',
    symptoms: [
      'No lights, no fan',
      'Charging LED is off',
      'A logo appears, then a black screen',
    ],
    steps: [
      {
        title: 'Use the official charger and a known outlet',
        detail:
          'Connect the company power brick to a wall outlet, not a weak USB charger. A charging light should appear. Try another outlet and another brick if one is available.',
      },
      {
        title: 'Perform a power reset',
        detail:
          'Unplug the charger, hold the power button for 20–30 seconds, reconnect power, then press power once. This clears a hung power state.',
      },
      {
        title: 'Look for any sign of life',
        detail:
          'Caps Lock light, fan spin, or a very dim image can mean the display failed rather than the PC. Try an external monitor.',
      },
      {
        title: 'Stop if you smell heat or see swelling',
        detail:
          'Unplug the machine and do not charge it. Battery swelling is a safety issue.',
      },
    ],
    escalate:
      'If there is no charging light after a known-good brick, request a replacement laptop or battery. Include the asset tag.',
  },
  {
    slug: 'laptop-overheating',
    title: 'The laptop is overheating or the fan is very loud',
    category: 'hardware',
    tags: ['heat', 'fan', 'performance', 'vent'],
    difficulty: 'easy',
    minutes: 8,
    summary:
      'The chassis is hot, the fan screams, or the machine slows down under light work.',
    symptoms: [
      'Hot around the keyboard',
      'Fan runs at full speed on idle',
      'The laptop shuts down on its own',
    ],
    steps: [
      {
        title: 'Give it air',
        detail:
          'Take it off blankets, couches, and stacked paper. Use a hard desk and keep vents clear. A blocked vent is the most common cause.',
      },
      {
        title: 'Close heavy apps',
        detail:
          'Check Task Manager for a process using high CPU. Browsers with many tabs, video calls, and failed Windows Update loops heat a laptop quickly.',
      },
      {
        title: 'Use a cooler surface and AC power if needed',
        detail:
          'Some machines run hotter on battery. Plug in, reduce screen brightness, and pause large syncs.',
      },
      {
        title: 'Reboot once',
        detail:
          'A stuck process can keep the fan at maximum. If it is still loud after a reboot at idle, dust or a failing fan is likely.',
      },
    ],
    escalate:
      'Repeated thermal shutdowns are a hardware ticket. Do not open the chassis yourself.',
  },
  {
    slug: 'mouse-or-trackpad-not-working',
    title: 'My mouse or trackpad is not working',
    category: 'hardware',
    tags: ['mouse', 'trackpad', 'bluetooth', 'cursor'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'The pointer does not move, jumps, or the trackpad is ignored while a mouse is connected.',
    symptoms: [
      'Cursor frozen',
      'Trackpad dead',
      'Bluetooth mouse disconnects',
    ],
    steps: [
      {
        title: 'Wake or reseat the device',
        detail:
          'Move the mouse, replace batteries, and try another USB port. Toggle the mouse power switch. For Bluetooth, remove the device and pair it again.',
      },
      {
        title: 'Turn the trackpad back on',
        detail:
          'Some laptops disable the trackpad when a mouse is connected, or after a function-key press. Check Settings → Bluetooth & devices → Touchpad.',
      },
      {
        title: 'Clean the surface and try another surface',
        detail:
          'Optical mice fail on glass. Use a mousepad. A greasy trackpad can look “broken.”',
      },
      {
        title: 'Restart and test in the BIOS or lock screen',
        detail:
          'If the pointer works on the lock screen but not after sign-in, the profile or a driver is at fault.',
      },
    ],
    escalate:
      'If an external mouse works and the trackpad never does, request hardware service.',
  },
  {
    slug: 'headphones-not-detected',
    title: 'Headphones or a headset are not detected',
    category: 'hardware',
    tags: ['audio', 'headset', 'bluetooth', 'usb'],
    difficulty: 'easy',
    minutes: 7,
    summary:
      'Sound still plays from the laptop speakers, or the mic is missing in calls.',
    symptoms: [
      'No device in the sound list',
      'You can hear but cannot speak',
      'Bluetooth pairs and then drops',
    ],
    steps: [
      {
        title: 'Select the device in Windows sound settings',
        detail:
          'Click the speaker icon → the arrow → your headset for both output and input. USB headsets often appear as two devices.',
      },
      {
        title: 'Reseat or re-pair',
        detail:
          'Try another USB port. For Bluetooth, disconnect, forget, and pair again next to the laptop. Disable other paired audio devices that steal the profile.',
      },
      {
        title: 'Allow the mic',
        detail:
          'Settings → Privacy & security → Microphone must be on for desktop apps. Then allow Teams or Zoom specifically.',
      },
      {
        title: 'Test in Sound settings',
        detail:
          'Use the built-in test buttons. If Windows can play a sound and see mic levels, the meeting app just needs the same device selected.',
      },
    ],
    escalate:
      'If the headset never appears in Windows on two ports, try a known-good headset. If that also fails, the audio stack needs repair.',
  },
  {
    slug: 'webcam-not-working',
    title: 'My webcam is not working',
    category: 'hardware',
    tags: ['webcam', 'camera', 'privacy shutter', 'teams'],
    difficulty: 'easy',
    minutes: 7,
    summary:
      'The camera is black, shows another app is using it, or is missing from meeting settings.',
    symptoms: [
      'Black tile in the meeting',
      'Camera in use by another application',
      'Windows Camera app also fails',
    ],
    steps: [
      {
        title: 'Open the privacy shutter and remove the cover',
        detail:
          'Many laptops have a sliding shutter next to the lens. A sticker or slider is the most common “broken camera.”',
      },
      {
        title: 'Close other apps that use the camera',
        detail:
          'Quit extra Teams windows, Zoom, Camera, and browser tabs. Then reopen one meeting app.',
      },
      {
        title: 'Allow camera access',
        detail:
          'Settings → Privacy & security → Camera must be enabled for desktop apps. Select the correct camera in the meeting device settings.',
      },
      {
        title: 'Test in the Windows Camera app',
        detail:
          'If Camera works and Teams does not, repair the meeting app. If Camera is also black, restart the laptop and try an external USB webcam as a workaround.',
      },
    ],
    escalate:
      'A camera that fails in every app after a restart is hardware or a driver IT must repair.',
  },
  {
    slug: 'battery-draining-quickly',
    title: 'The laptop battery is draining quickly',
    category: 'hardware',
    tags: ['battery', 'power', 'health'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'A charge that used to last a workday now dies in one or two hours.',
    symptoms: [
      'Percent drops fast',
      'Windows warns of low battery',
      'The machine only works on AC',
    ],
    steps: [
      {
        title: 'Check what is using power',
        detail:
          'Open Settings → System → Power & battery and review battery usage by app. Browsers, VPNs, and video calls are expected; a stuck update is not.',
      },
      {
        title: 'Use a balanced power mode and lower brightness',
        detail:
          'Turn off unused radios, close extra tabs, and avoid leaving an external monitor plus charging peripherals on battery.',
      },
      {
        title: 'Calibrate expectations on older packs',
        detail:
          'After two or three years, a smaller capacity is normal. If health is very low, plan a battery replacement.',
      },
      {
        title: 'Confirm the charger can keep up',
        detail:
          'If the percent falls while plugged in, the brick is too weak or the port is damaged.',
      },
    ],
    escalate:
      'If battery health is poor or the pack is swollen, stop using it on the go and request a replacement.',
  },
  {
    slug: 'docking-station-not-connecting',
    title: 'My docking station is not connecting',
    category: 'hardware',
    tags: ['dock', 'usb-c', 'thunderbolt', 'monitors'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'Displays, Ethernet, or USB devices on the dock do not come up when you sit down.',
    symptoms: [
      'No monitors',
      'No wired network',
      'USB devices on the dock are dead',
    ],
    steps: [
      {
        title: 'Use the supplied cable and the correct laptop port',
        detail:
          'Thunderbolt or USB-C docks need a video-capable port. Try the other side of the laptop. Do not daisy-chain extra hubs unless IT issued that setup.',
      },
      {
        title: 'Power the dock, then the laptop',
        detail:
          'Plug the dock power brick in first. Reseat the laptop cable. A dock without its own power often fails with two monitors.',
      },
      {
        title: 'Unplug extras and test in pieces',
        detail:
          'Disconnect USB devices, then add the displays, then Ethernet. A failing accessory can take the whole dock down.',
      },
      {
        title: 'Restart the laptop while docked',
        detail:
          'If it still fails, try the dock on a teammate’s compatible laptop. That tells you whether to replace the dock or the machine.',
      },
    ],
    escalate:
      'Include dock model, laptop model, and which functions fail (video, network, USB).',
  },
  {
    slug: 'usb-device-not-recognized',
    title: 'A USB device is not recognized',
    category: 'hardware',
    tags: ['usb', 'thumb drive', 'device', 'driver'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'Windows plays no sound, shows an error, or never lists the drive or accessory.',
    symptoms: [
      'Unknown device in Device Manager',
      'USB drive does not appear',
      'The device works on another PC',
    ],
    steps: [
      {
        title: 'Try another port and another device',
        detail:
          'Test a port on the laptop, not only the dock. If a known-good mouse works and the drive does not, the drive may be failing or blocked.',
      },
      {
        title: 'Look for a security block',
        detail:
          'Many companies block USB storage. Approved encrypted drives may still work. If policy blocks storage, IT will not “open the port” for a personal stick.',
      },
      {
        title: 'Check Disk Management for a drive letter',
        detail:
          'The volume may be mounted without a letter. Do not format a drive that might contain work files.',
      },
      {
        title: 'Reboot and avoid unpowered hubs',
        detail:
          'Unpowered hubs drop devices. Plug directly into the PC. Restart if Windows listed Code 43 or similar.',
      },
    ],
    escalate:
      'If an approved device is blocked, request an exception with a business reason. Do not use a personal cloud account as a workaround for sensitive files.',
  },
]
