import type { Article } from '../types'

export const softwareSecurityMobileMeetingArticles: Article[] = [
  {
    slug: 'application-wont-launch',
    title: 'An application will not launch',
    category: 'software',
    tags: ['app', 'crash', 'launch', 'office'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'A work app flashes and closes, never opens, or sits on a splash screen.',
    symptoms: [
      'Clicking the icon does nothing',
      'The app closes immediately',
      'You see a missing DLL or license error',
    ],
    steps: [
      {
        title: 'Restart the laptop and try once more',
        detail:
          'A stuck background process can block a second launch. After the restart, open only that app.',
      },
      {
        title: 'Read the exact error',
        detail:
          'License, network, and “another setup is in progress” messages each have different fixes. Screenshot the dialog before you close it.',
      },
      {
        title: 'Repair or reinstall from the company catalog',
        detail:
          'Use Software Center, Company Portal, or Self Service. Do not download an installer from the public web for licensed software.',
      },
      {
        title: 'Test another Windows account only if IT asks',
        detail:
          'A broken user profile can stop one app. Do not create a local admin account on your own.',
      },
    ],
    escalate:
      'Include the app name, version if shown, and the error text. Say whether it ever worked on this laptop.',
  },
  {
    slug: 'install-approved-software',
    title: 'How to install approved software',
    category: 'software',
    tags: ['install', 'software center', 'company portal'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Add a standard application without waiting for a technician at your desk.',
    symptoms: [
      'You need Visio, Project, or a browser',
      'A setup file is blocked',
      'You are not a local administrator',
    ],
    steps: [
      {
        title: 'Open the company software catalog',
        detail:
          'On Windows that is usually Company Portal or Software Center. On a Mac it is often Self Service. Search for the approved title.',
      },
      {
        title: 'Install and wait for a success status',
        detail:
          'Stay on the network or VPN so the package can download. Restart if the catalog asks you to.',
      },
      {
        title: 'Sign in with your work account',
        detail:
          'Office and many line-of-business apps activate against your company license. Use the work email, not a personal Microsoft account.',
      },
      {
        title: 'Do not sideload random installers',
        detail:
          'Unknown EXEs are a common malware path and are often blocked by design.',
      },
    ],
    escalate:
      'If the title is missing from the catalog, request it with the business reason and your manager’s name.',
  },
  {
    slug: 'software-needs-update',
    title: 'An application says it needs an update',
    category: 'software',
    tags: ['update', 'patch', 'version'],
    difficulty: 'easy',
    minutes: 8,
    summary:
      'A prompt blocks you until the app is current, or a website says your browser is out of date.',
    symptoms: [
      'Update required to continue',
      'A meeting app will not join',
      'Security tools flag an old version',
    ],
    steps: [
      {
        title: 'Update from the company catalog first',
        detail:
          'Company Portal and Software Center push tested versions. Let that finish before you click an in-app “download from the internet” button.',
      },
      {
        title: 'For browsers and Teams, use the built-in updater',
        detail:
          'In Edge or Chrome open About to trigger an update. In Teams use the profile menu → Check for updates, then restart the app.',
      },
      {
        title: 'Restart after the update',
        detail:
          'Many updates sit waiting for a restart. Save your work and reboot once.',
      },
      {
        title: 'Leave Windows Update to the company rings',
        detail:
          'Do not pause updates for weeks. If a feature update is offered in the company tool, install it when you can spare 30–60 minutes.',
      },
    ],
    escalate:
      'If the catalog and the app disagree about the version, send both version numbers.',
  },
  {
    slug: 'excel-or-word-crashing',
    title: 'Excel or Word keeps crashing',
    category: 'software',
    tags: ['office', 'crash', 'excel', 'word', 'add-in'],
    difficulty: 'moderate',
    minutes: 12,
    summary:
      'Office closes while you edit, or a specific workbook takes the app down.',
    symptoms: [
      'Not responding, then close',
      'One file crashes, others are fine',
      'Crashes after a recent add-in install',
    ],
    steps: [
      {
        title: 'Open the file in Safe Mode',
        detail:
          'Hold Ctrl while starting Word or Excel and confirm Safe Mode. If it is stable, disable COM add-ins from Options → Add-ins.',
      },
      {
        title: 'Repair the document',
        detail:
          'Copy content into a new file, or in Excel try Open and Repair. Huge unused ranges, broken links, and corrupted charts are frequent causes.',
      },
      {
        title: 'Move the file to OneDrive and turn on AutoSave',
        detail:
          'Local files on a flaky disk lose work. Cloud files also give you version history after a crash.',
      },
      {
        title: 'Quick Repair Microsoft 365',
        detail:
          'Settings → Apps → Microsoft 365 → Modify → Quick Repair. Use Online Repair only if Quick Repair fails and you can stay on the network.',
      },
    ],
    escalate:
      'If every Office app crashes on launch, include a screenshot of the error and whether Safe Mode works.',
  },
  {
    slug: 'request-unlisted-software',
    title: 'How to request software that is not on the approved list',
    category: 'software',
    tags: ['request', 'exception', 'license', 'shadow it'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Ask for a tool the catalog does not offer without installing it on your own.',
    symptoms: [
      'A vendor requires a specific app',
      'A free tool looks useful',
      'A trial installer is blocked',
    ],
    steps: [
      {
        title: 'Write the business case',
        detail:
          'Name the product, who will use it, what it replaces, and whether customer or regulated data will go into it.',
      },
      {
        title: 'Submit the software request form',
        detail:
          'Use the IT catalog request or ticket type for new software. Include your manager. Security and licensing review exists for a reason.',
      },
      {
        title: 'Do not buy it on a personal card',
        detail:
          'Personal subscriptions for work data create contract, privacy, and offboarding problems. Wait for an approved path.',
      },
      {
        title: 'Use an approved alternative while you wait',
        detail:
          'Ask IT whether a standard tool already covers the need. Many “new” requests are already licensed under another name.',
      },
    ],
    escalate:
      'Urgent vendor-mandated software still needs a ticket. Call the service desk and reference the request number.',
  },
  {
    slug: 'browser-slow-or-crashing',
    title: 'My browser is slow or crashing',
    category: 'software',
    tags: ['browser', 'chrome', 'edge', 'tabs'],
    difficulty: 'easy',
    minutes: 8,
    summary:
      'Edge or Chrome uses all the memory, freezes, or closes tabs on its own.',
    symptoms: [
      'Pages lock up',
      '“He’s dead, Jim” or similar',
      'The fan spins with only the browser open',
    ],
    steps: [
      {
        title: 'Close extra tabs and extensions',
        detail:
          'Keep a handful of work tabs. Disable extensions you do not recognize, especially coupon and PDF tools.',
      },
      {
        title: 'Clear cached images and files',
        detail:
          'Clear cached files and cookies for the last 7 days if a single site is broken. Stay signed in to work sites afterward.',
      },
      {
        title: 'Turn off hardware acceleration if the window flashes',
        detail:
          'In browser settings, disable hardware acceleration and restart. This helps on some docks and virtual machines.',
      },
      {
        title: 'Use the company browser profile',
        detail:
          'Work should stay in the managed profile. A personal profile with many extensions can destabilize the whole browser.',
      },
    ],
    escalate:
      'If the browser crashes on start with extensions disabled, repair or reinstall it from the catalog.',
  },
  {
    slug: 'clear-cache-and-cookies',
    title: 'How to clear cache and cookies',
    category: 'software',
    tags: ['cache', 'cookies', 'browser', 'sign-in'],
    difficulty: 'easy',
    minutes: 4,
    summary:
      'Fix a website that shows a stale page, an old password prompt, or a broken login loop.',
    symptoms: [
      'A site looks outdated',
      'You cannot sign in',
      'IT told you to clear cache',
    ],
    steps: [
      {
        title: 'Clear for the affected site first',
        detail:
          'In Edge or Chrome, click the lock icon on the site → Cookies and site data → delete. This is gentler than wiping everything.',
      },
      {
        title: 'Clear cached files if that is not enough',
        detail:
          'Open browser settings → Privacy → Clear browsing data. Choose Cached images and files. Add cookies only if the site is still broken.',
      },
      {
        title: 'Sign in again and complete MFA',
        detail:
          'Expect to approve a sign-in. Do not be surprised if Outlook on the web or SharePoint asks once more.',
      },
      {
        title: 'Hard-refresh the page',
        detail:
          'Use Ctrl+F5 after clearing. Then test in a private window to see whether the profile still holds a bad cookie.',
      },
    ],
    tip: 'Clearing all cookies signs you out of every site. Prefer a single-site clear during the workday.',
    escalate:
      'If a work site is still wrong in a private window on another network, the outage is on the service, not your cache.',
  },
  {
    slug: 'pdf-wont-open',
    title: 'A PDF will not open',
    category: 'software',
    tags: ['pdf', 'adobe', 'edge', 'attachment'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'A PDF is blank, says it is damaged, or opens in the wrong app.',
    symptoms: [
      'Blank tab',
      'File is damaged and could not be repaired',
      'The file downloads but will not open',
    ],
    steps: [
      {
        title: 'Try another reader',
        detail:
          'Open the file in Edge, then in Adobe or the company PDF app. Some files only render in one of them.',
      },
      {
        title: 'Download it instead of previewing',
        detail:
          'Outlook and SharePoint previews fail on larger PDFs. Download a copy and open the local file.',
      },
      {
        title: 'Confirm the download finished',
        detail:
          'A truncated file will always look corrupt. Compare the size with what the sender expected and download again.',
      },
      {
        title: 'Ask for a re-export if it is still damaged',
        detail:
          'The source file may be bad. Have the sender export a new PDF or share the original Word document.',
      },
    ],
    escalate:
      'If every PDF fails, the PDF app needs repair. If only attachments from one sender fail, security may be sanitizing them.',
  },
  {
    slug: 'java-or-plugin-errors',
    title: 'A website asks for Java or a blocked plugin',
    category: 'software',
    tags: ['java', 'plugin', 'legacy', 'browser'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'An older line-of-business site will not load because a plugin is missing or blocked.',
    symptoms: [
      'Please install Java',
      'NPAPI plugin blocked',
      'The page is blank after sign-in',
    ],
    steps: [
      {
        title: 'Use the browser IT names for that system',
        detail:
          'Legacy apps often work only in Edge IE mode or a published virtual desktop. Chrome will not run old Java plugins.',
      },
      {
        title: 'Install Java only from the company catalog',
        detail:
          'If a managed Java package exists, install that version. Public Java installers are frequently the wrong edition and a security risk.',
      },
      {
        title: 'Prefer the modern replacement',
        detail:
          'Ask whether the same task exists in a current web app. Plugin-based tools are being retired.',
      },
    ],
    escalate:
      'If the business still depends on the plugin, IT may publish it in a virtual app. Do not disable browser security to force it.',
  },
  {
    slug: 'set-default-browser-or-app',
    title: 'How to set a default browser or app',
    category: 'software',
    tags: ['defaults', 'browser', 'file association'],
    difficulty: 'easy',
    minutes: 4,
    summary:
      'Make links and file types open in the program you actually use.',
    symptoms: [
      'Links open in the wrong browser',
      'PDFs open in a preview you dislike',
      'Mailto goes to the wrong client',
    ],
    steps: [
      {
        title: 'Change the default browser in Windows',
        detail:
          'Settings → Apps → Default apps → your browser → Set default. On a managed PC, policy may reset this to Edge.',
      },
      {
        title: 'Change a single file type',
        detail:
          'In Default apps, search for .pdf or .xlsx and pick the app. Or right-click a file → Open with → Always.',
      },
      {
        title: 'Set Outlook as the mail client if needed',
        detail:
          'Choose Outlook for MAILTO so calendar and message links open in the desktop app.',
      },
    ],
    escalate:
      'If the setting snaps back after a reboot, company policy is enforcing it. Request an exception only if you have a business need.',
  },
  {
    slug: 'windows-update-stuck',
    title: 'Windows Update is stuck or failing',
    category: 'software',
    tags: ['windows update', 'patch', 'restart'],
    difficulty: 'moderate',
    minutes: 15,
    summary:
      'An update sits on a percentage for hours, or fails with a code when you try to install it.',
    symptoms: [
      'Downloading 0%',
      'Pending restart for days',
      'We couldn’t complete the updates',
    ],
    steps: [
      {
        title: 'Let a pending restart finish',
        detail:
          'Save work and reboot. Many “stuck” updates are only waiting for a restart window.',
      },
      {
        title: 'Stay on power and a stable network',
        detail:
          'Plug in the charger and use Ethernet or solid Wi-Fi. Do not put the lid down mid-install.',
      },
      {
        title: 'Retry after a clean boot of the update service',
        detail:
          'Restart the laptop, then Settings → Windows Update → Check for updates. Pause other large downloads.',
      },
      {
        title: 'Free disk space',
        detail:
          'Feature updates need several gigabytes. Clean Temporary files and retry.',
      },
    ],
    escalate:
      'After two failed attempts, send the error code from Update history. Do not run random “update fixer” tools from the web.',
  },
  {
    slug: 'blue-screen-or-unexpected-restart',
    title: 'The PC showed a blue screen or restarted on its own',
    category: 'software',
    tags: ['bsod', 'crash', 'restart', 'stability'],
    difficulty: 'escalate',
    minutes: 10,
    summary:
      'Windows crashed, displayed a stop code, or rebooted while you were working.',
    symptoms: [
      'Blue screen with a stop code',
      'Unexpected restart',
      'The machine is looping',
    ],
    steps: [
      {
        title: 'Write down the stop code and time',
        detail:
          'Codes such as DRIVER_IRQL_NOT_LESS_OR_EQUAL help IT. Note whether you were docking, updating, or idle.',
      },
      {
        title: 'Let Windows finish startup repairs if it offers them',
        detail:
          'Do not power off during repair. If it boots, save your work to OneDrive immediately.',
      },
      {
        title: 'Remove new hardware and retry',
        detail:
          'Unplug extra docks, displays, and USB devices. A failing accessory can crash the system.',
      },
      {
        title: 'Stop using the machine if it loops',
        detail:
          'Repeated crashes can corrupt a profile. Use another device and call IT.',
      },
    ],
    escalate:
      'A single crash after an update can be informational. A loop or daily crash is a priority hardware or image ticket. Include the stop code.',
  },
  {
    slug: 'possible-virus-or-malware',
    title: 'I think my computer has a virus',
    category: 'security',
    tags: ['malware', 'virus', 'defender', 'ransomware'],
    difficulty: 'escalate',
    minutes: 8,
    summary:
      'The PC is suddenly slow, pop-ups appear, or files look encrypted.',
    symptoms: [
      'Unexpected toolbars or pop-ups',
      'Files renamed or encrypted',
      'Security software is turned off',
    ],
    steps: [
      {
        title: 'Disconnect from the network if files are being encrypted',
        detail:
          'Unplug Ethernet, turn off Wi-Fi, and disconnect VPN. This slows spread to shares. Do not pay a ransom prompt.',
      },
      {
        title: 'Do not install random “cleaner” tools',
        detail:
          'Those sites often are the malware. Use only the company-approved antivirus already on the device.',
      },
      {
        title: 'Run the official full scan',
        detail:
          'Open the company security agent or Windows Security → Virus & threat protection → Full scan. Keep the PC on power.',
      },
      {
        title: 'Write down what you clicked',
        detail:
          'Note the email, USB stick, or website that started this. That is the most useful information you can give IT.',
      },
    ],
    tip: 'IT would rather reimage a laptop than let ransomware reach a file server.',
    escalate:
      'Call the security or service-desk line immediately if files are encrypted, credentials were entered, or the antivirus will not open.',
  },
  {
    slug: 'clicked-suspicious-link',
    title: 'I clicked a suspicious link',
    category: 'security',
    tags: ['phishing', 'link', 'credentials', 'incident'],
    difficulty: 'escalate',
    minutes: 6,
    summary:
      'You opened a questionable URL and need to limit the damage quickly.',
    symptoms: [
      'A site asked for your password',
      'A file downloaded on its own',
      'The page looked like a sign-in screen',
    ],
    steps: [
      {
        title: 'Stop entering information',
        detail:
          'Close the tab. Do not try the password “one more time” to see if it was real.',
      },
      {
        title: 'If you typed your password, change it from a safe page',
        detail:
          'Use a bookmark or type the company portal address yourself. Then update VPN, mail, and your phone so old passwords stop retrying.',
      },
      {
        title: 'If a file downloaded, do not open it',
        detail:
          'Delete it from Downloads. Do not enable macros. Run a quick scan with the company antivirus.',
      },
      {
        title: 'Report the original message',
        detail:
          'Use Report phishing on the email if that is how you got there. Tell IT the time and whether you entered a password or MFA code.',
      },
    ],
    escalate:
      'Password plus MFA approval on a fake site is urgent. Call IT even if you feel embarrassed. Speed matters more.',
  },
  {
    slug: 'lock-my-computer',
    title: 'How to lock my computer',
    category: 'security',
    tags: ['lock', 'privacy', 'win+l', 'step away'],
    difficulty: 'easy',
    minutes: 1,
    summary:
      'Protect your session when you stand up, even for a minute.',
    symptoms: [
      'You are leaving your desk',
      'A visitor is nearby',
      'You use a shared or open office',
    ],
    steps: [
      {
        title: 'Lock immediately',
        detail:
          'On Windows press Win+L. On a Mac press Control+Command+Q. The machine stays on; only the lock screen appears.',
      },
      {
        title: 'Do not rely on the screensaver alone',
        detail:
          'Idle lock helps, but it is not instant. Lock every time you leave the keyboard.',
      },
      {
        title: 'Sign out on shared PCs',
        detail:
          'On a conference-room or hot-desk machine, sign out so the next person does not land in your mailbox.',
      },
    ],
    tip: 'Locking is not the same as shutting down. Your apps keep running.',
    escalate:
      'If Win+L does nothing, accessibility or a remote session may be capturing the shortcut. Use the Start menu lock option instead.',
  },
  {
    slug: 'report-lost-or-stolen-device',
    title: 'How to report a lost or stolen device',
    category: 'security',
    tags: ['lost', 'stolen', 'laptop', 'phone', 'wipe'],
    difficulty: 'escalate',
    minutes: 5,
    summary:
      'A company laptop, phone, or badge is missing and must be locked or wiped.',
    symptoms: [
      'Laptop left in a car or taxi',
      'Phone missing after travel',
      'Badge is gone',
    ],
    steps: [
      {
        title: 'Call IT as soon as you notice',
        detail:
          'Do not wait until Monday. Security can disable the account, revoke VPN, and wipe a managed device.',
      },
      {
        title: 'Share the last known facts',
        detail:
          'Asset tag if you know it, model, time last seen, whether it was signed in, and whether it had a PIN or biometrics.',
      },
      {
        title: 'Change your password from another device',
        detail:
          'Use a colleague’s machine or a phone browser on the official portal. This limits what a finder can do if the session was unlocked.',
      },
      {
        title: 'Report a stolen badge separately',
        detail:
          'Building security needs to deactivate badge access. IT cannot always do that for you.',
      },
    ],
    escalate:
      'This is always a phone call, not a low-priority ticket. If customer data was on the device, say so immediately.',
  },
  {
    slug: 'usb-drive-blocked',
    title: 'A USB drive is blocked or I cannot copy files to it',
    category: 'security',
    tags: ['usb', 'dlp', 'encryption', 'removable'],
    difficulty: 'moderate',
    minutes: 6,
    summary:
      'Windows refuses a thumb drive, or files copy and then vanish because of policy.',
    symptoms: [
      'Access denied on removable media',
      'Device is blocked by policy',
      'Only company-encrypted sticks work',
    ],
    steps: [
      {
        title: 'Assume storage sticks are restricted',
        detail:
          'Many companies allow USB keyboards and mice but block storage. That is intentional.',
      },
      {
        title: 'Use an approved encrypted drive if you must',
        detail:
          'If IT issues IronKey-style devices, use those and the official unlock app. Personal sticks are often denied.',
      },
      {
        title: 'Prefer OneDrive links over copies',
        detail:
          'Sharing a link keeps audit history and avoids lost sticks. For vendors, use the approved external-share process.',
      },
    ],
    escalate:
      'If you have a legitimate offline need, request an exception. Include the data type. Do not use a personal email workaround.',
  },
  {
    slug: 'website-blocked-by-firewall',
    title: 'A website is blocked by the company firewall',
    category: 'security',
    tags: ['firewall', 'proxy', 'blocked site', 'category'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'The browser shows an access denied or category blocked page for a site you need.',
    symptoms: [
      'Access denied by policy',
      'The site works on your phone’s cellular data',
      'Only one vendor site fails',
    ],
    steps: [
      {
        title: 'Read the block page',
        detail:
          'It usually lists a category such as “uncategorized,” “file sharing,” or “newly registered.” That is what IT will review.',
      },
      {
        title: 'Confirm you need it for work',
        detail:
          'Personal shopping, streaming, and risky file hosts will stay blocked. A vendor documentation site is a reasonable request.',
      },
      {
        title: 'Submit an unblock request',
        detail:
          'Use the link on the block page or a ticket. Include the full URL, who asked you to use it, and whether it must be available off VPN too.',
      },
      {
        title: 'Do not use a personal VPN to bypass it',
        detail:
          'That violates policy and often breaks other work apps. Wait for the exception.',
      },
    ],
    escalate:
      'If a previously working work site is suddenly blocked for everyone, report it as an outage, not an individual exception.',
  },
  {
    slug: 'encrypt-a-sensitive-file',
    title: 'How to protect a sensitive file before sending it',
    category: 'security',
    tags: ['encryption', 'sensitivity', 'dlp', 'sharing'],
    difficulty: 'moderate',
    minutes: 6,
    summary:
      'Share payroll, HR, or customer data without dropping an unprotected copy into email.',
    symptoms: [
      'You need to send personal data',
      'A policy tip blocked the mail',
      'A vendor asked for an encrypted attachment',
    ],
    steps: [
      {
        title: 'Keep it in a controlled library',
        detail:
          'Store the file in the approved SharePoint or Teams site, not on the desktop. Apply the sensitivity label your company provides, such as Confidential.',
      },
      {
        title: 'Share a restricted link',
        detail:
          'Grant specific people view access and set an expiration. Avoid “anyone with the link.”',
      },
      {
        title: 'If email is required, follow the prompt',
        detail:
          'Encrypt-only or Do not forward options in Outlook use company rights management. Do not invent a zip password and send the password in the same thread.',
      },
      {
        title: 'Minimize the data',
        detail:
          'Send the columns or pages that are needed, not the whole export. Delete local copies you no longer need.',
      },
    ],
    escalate:
      'If you have no sensitivity labels or encrypt button, ask IT which method is approved for that data type.',
  },
  {
    slug: 'someone-asked-for-my-password',
    title: 'Someone asked me for my password',
    category: 'security',
    tags: ['password', 'social engineering', 'help desk'],
    difficulty: 'easy',
    minutes: 3,
    summary:
      'A caller, chat, or email claims to be IT and wants your password or an MFA code.',
    symptoms: [
      'A “help desk” chat asks you to read a code',
      'A vendor wants your work login',
      'A coworker asks to borrow your account',
    ],
    steps: [
      {
        title: 'Do not give it',
        detail:
          'IT, finance, and vendors never need your password. Real IT can reset access without you reading it aloud.',
      },
      {
        title: 'Do not approve an MFA prompt you did not start',
        detail:
          'Deny it. An unexpected prompt means someone already has or is guessing your password.',
      },
      {
        title: 'Hang up and use a known number',
        detail:
          'Call the service desk using the number on the intranet or the back of your badge, not the number the caller gave you.',
      },
      {
        title: 'Report the attempt',
        detail:
          'Send security the chat, email, or callback number. These attempts are often part of a wider campaign.',
      },
    ],
    escalate:
      'If you already shared a password or code, change the password and call IT now.',
  },
  {
    slug: 'setup-email-on-phone',
    title: 'How to set up work email on my phone',
    category: 'mobile',
    tags: ['phone', 'outlook', 'intune', 'byod'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'Add your work mailbox on iOS or Android using the approved app.',
    symptoms: [
      'You need mail away from the laptop',
      'The built-in mail app is blocked',
      'IT required Company Portal first',
    ],
    steps: [
      {
        title: 'Install the required management app if your company uses one',
        detail:
          'Many organizations require Company Portal or a similar app and a device PIN before mail will flow. Enroll with your work account.',
      },
      {
        title: 'Install Microsoft Outlook, not a random mail client',
        detail:
          'Add your work email inside Outlook. Complete MFA. Personal Gmail apps are often not allowed for work data.',
      },
      {
        title: 'Accept the device PIN and encryption prompts',
        detail:
          'Work mail on a phone usually requires a PIN, biometrics, and the ability for IT to wipe work data if the phone is lost.',
      },
      {
        title: 'Keep work and personal profiles separate',
        detail:
          'On Android work-profile devices, install Outlook in the work profile. Do not move work files into personal photo albums.',
      },
    ],
    escalate:
      'If enrollment fails, send the phone model, OS version, and the exact Company Portal error.',
  },
  {
    slug: 'byod-personal-phone',
    title: 'Using company apps on a personal phone',
    category: 'mobile',
    tags: ['byod', 'intune', 'privacy', 'work profile'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Understand what IT can see and wipe when you enroll a personal device.',
    symptoms: [
      'You do not want a second phone',
      'You worry IT can read personal photos',
      'Enrollment asks for many permissions',
    ],
    steps: [
      {
        title: 'Read the enrollment screen',
        detail:
          'On a personal phone, modern management usually wipes only the work profile or work apps, not your family photos. The screen lists what is in scope.',
      },
      {
        title: 'Use the approved apps',
        detail:
          'Outlook, Teams, and Company Portal are the normal set. Saving work attachments into personal cloud apps may be blocked.',
      },
      {
        title: 'Protect the device',
        detail:
          'Set a PIN, keep the OS updated, and do not jailbreak or root. Those states typically lose access.',
      },
      {
        title: 'Unenroll when you leave the company',
        detail:
          'Remove the work account so the next employer’s data is not mixed in. Ask IT if a leftover work profile remains.',
      },
    ],
    escalate:
      'If you need a company-owned phone instead of BYOD, request one through your manager. That is a hardware request, not a bypass.',
  },
  {
    slug: 'cannot-connect-vpn-from-home',
    title: 'I cannot connect to the VPN from home',
    category: 'mobile',
    tags: ['vpn', 'home', 'isp', 'remote'],
    difficulty: 'moderate',
    minutes: 10,
    summary:
      'The VPN client works in the office or on a hotspot, but not on your home internet.',
    symptoms: [
      'Gateway timeout from home',
      'Works on cellular',
      'The home router shows connected devices but VPN fails',
    ],
    steps: [
      {
        title: 'Test a phone hotspot',
        detail:
          'If VPN connects on hotspot, your home router or ISP is filtering it. Reboot the router and try again on Wi-Fi.',
      },
      {
        title: 'Turn off extra home security features',
        detail:
          'Consumer “smart firewall,” VPN, or ad-blocking DNS on the router can break the company client. Use the ISP defaults for a test.',
      },
      {
        title: 'Avoid stacking VPNs',
        detail:
          'Disable personal VPN apps and browser VPN extensions. Only the company client should run.',
      },
      {
        title: 'Try another home DNS only if IT agrees',
        detail:
          'Some ISPs’ DNS fails on the portal name. If IT publishes a recommended test, follow that. Do not invent public DNS changes on a managed laptop.',
      },
    ],
    escalate:
      'If hotspot works and home Wi-Fi never does, include your ISP name. IT may give you a different gateway.',
  },
  {
    slug: 'request-remote-access',
    title: 'How to request remote access',
    category: 'mobile',
    tags: ['remote', 'vpn', 'contractor', 'access'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Get VPN or application access for remote work, a contractor, or a new location.',
    symptoms: [
      'You are newly remote',
      'A contractor needs a system',
      'You can sign in but cannot reach an app',
    ],
    steps: [
      {
        title: 'Ask for the named role, not “full access”',
        detail:
          'List the apps, file shares, and whether access is from a company laptop or a personal device. Personal devices often get browser-only access.',
      },
      {
        title: 'Have your manager approve',
        detail:
          'Remote access requests almost always need a manager. Contractors also need an end date.',
      },
      {
        title: 'Complete MFA enrollment first',
        detail:
          'VPN will not succeed until MFA works. Set that up while you still have another way to reach IT.',
      },
      {
        title: 'Use the official remote-access ticket type',
        detail:
          'That routes to the team that can add you to the VPN group. A generic “email is slow” ticket will bounce.',
      },
    ],
    escalate:
      'If you already have VPN and one app still fails, that is an application permission, not a new VPN account.',
  },
  {
    slug: 'dual-monitor-setup-at-home',
    title: 'How to set up dual monitors at home',
    category: 'mobile',
    tags: ['monitors', 'home office', 'dock', 'display'],
    difficulty: 'moderate',
    minutes: 12,
    summary:
      'Extend your laptop to two external displays in a home office.',
    symptoms: [
      'Only one external screen works',
      'Mirrors instead of extends',
      'The laptop lid must stay open',
    ],
    steps: [
      {
        title: 'Use a company dock when you can',
        detail:
          'Two monitors from a single USB-C cable usually need the issued dock. Cheap HDMI hubs often support only one display.',
      },
      {
        title: 'Connect both monitors and choose Extend',
        detail:
          'Press Win+P → Extend. In Display settings, drag the rectangles so they match the physical left/right layout.',
      },
      {
        title: 'Set the recommended resolution on each screen',
        detail:
          'Pick the recommended resolution and a common scale, such as 100% or 125%, so windows do not jump in size.',
      },
      {
        title: 'Decide whether the lid can close',
        detail:
          'Some docks support clamshell mode; others do not. If the picture dies when you close the lid, leave it open or ask IT whether your model supports it.',
      },
    ],
    escalate:
      'If the laptop only ever drives one external display, it may be a hardware limit. Include laptop model and dock model.',
  },
  {
    slug: 'teams-on-mobile',
    title: 'How to use Teams or company chat on my phone',
    category: 'mobile',
    tags: ['teams', 'mobile', 'chat', 'notifications'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Install and sign in to the official chat app so messages and calls reach you away from the desk.',
    symptoms: [
      'You miss chats after hours on site',
      'Notifications do not appear',
      'The mobile app asks to enroll',
    ],
    steps: [
      {
        title: 'Install the official app from the store',
        detail:
          'Use Microsoft Teams or the chat tool your company named. Sign in with the work account only.',
      },
      {
        title: 'Finish device enrollment if prompted',
        detail:
          'The same Company Portal step used for mail may be required. Until that finishes, chat will not load.',
      },
      {
        title: 'Allow notifications and a phone passcode',
        detail:
          'iOS and Android will hide message alerts until you allow them. Quiet hours can be set inside the app.',
      },
      {
        title: 'Know what is stored on the phone',
        detail:
          'Downloads from chat are work files. Do not copy them into personal social apps.',
      },
    ],
    escalate:
      'If the desktop app works and mobile says you are not licensed, IT may need to enable the mobile service plan.',
  },
  {
    slug: 'phone-not-receiving-mfa-codes',
    title: 'My phone is not receiving MFA codes',
    category: 'mobile',
    tags: ['mfa', 'sms', 'authenticator', 'phone'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'Text messages or authenticator pushes never arrive when you try to sign in.',
    symptoms: [
      'Waiting for a text that never comes',
      'No push in the authenticator',
      'You are abroad and SMS is delayed',
    ],
    steps: [
      {
        title: 'Prefer the authenticator app over SMS',
        detail:
          'Open the app and use a 6-digit code. SMS is slower and fails on some carriers and while roaming.',
      },
      {
        title: 'Check signal, Do Not Disturb, and blocked senders',
        detail:
          'A full inbox, spam filtering, or airplane mode will hide texts. Add reception and try again.',
      },
      {
        title: 'Confirm the phone number on your security info',
        detail:
          'An old number will never get the text. Update it while you still have another MFA method.',
      },
      {
        title: 'Use a backup method',
        detail:
          'A security key, another enrolled phone, or a temporary access pass from IT will get you in.',
      },
    ],
    escalate:
      'If you are traveling and have no working method, call the service desk before you are locked out of email too.',
  },
  {
    slug: 'wipe-lost-phone',
    title: 'How to wipe a lost phone remotely',
    category: 'mobile',
    tags: ['wipe', 'lost phone', 'intune', 'find my'],
    difficulty: 'escalate',
    minutes: 5,
    summary:
      'Remove work data from a missing phone, or erase the device if it is company-owned.',
    symptoms: [
      'Phone is missing',
      'You still see it in Company Portal',
      'It may still receive mail',
    ],
    steps: [
      {
        title: 'Call IT and say whether it is personal or company-owned',
        detail:
          'IT can retire the work profile on a BYOD phone or fully wipe a corporate phone. The difference matters.',
      },
      {
        title: 'Use Find My or Find My Device if you still have access',
        detail:
          'Mark it lost and play a sound if it might be in the house. Do not delay the IT call while you search for long.',
      },
      {
        title: 'Change your work password',
        detail:
          'Do this even if the phone was locked. Mail and tokens on the device should die after the password and wipe.',
      },
      {
        title: 'Watch for unexpected MFA prompts',
        detail:
          'Deny them and tell IT. That can mean someone is trying the account.',
      },
    ],
    escalate:
      'Always phone this in. A ticket you write an hour later is too slow if the device is unlocked.',
  },
  {
    slug: 'camera-or-mic-not-working-in-meetings',
    title: 'Camera or microphone not working in Teams or Zoom',
    category: 'meetings',
    tags: ['teams', 'zoom', 'mic', 'camera'],
    difficulty: 'easy',
    minutes: 8,
    summary:
      'People cannot hear you, or your tile stays black, even though the devices work elsewhere.',
    symptoms: [
      'Mic is muted by the app',
      'Wrong speaker selected',
      'Camera in use',
    ],
    steps: [
      {
        title: 'Pick the devices inside the meeting app',
        detail:
          'Open Device settings in Teams or Zoom and select the headset and camera by name. Windows can see a device that the meeting app is not using.',
      },
      {
        title: 'Unmute at every layer',
        detail:
          'Unmute the app, unmute a hardware mute button on the headset, and check the physical camera shutter.',
      },
      {
        title: 'Allow OS permissions',
        detail:
          'Windows Privacy settings must allow camera and microphone for desktop apps. After a change, restart the meeting app.',
      },
      {
        title: 'Leave and rejoin once',
        detail:
          'A stuck call can hold the camera. Rejoin. If you are presenting, have a colleague admit you if you land in the lobby.',
      },
    ],
    escalate:
      'If the Windows Camera app and Sound test both fail, treat it as hardware. If only one meeting platform fails, repair that app.',
  },
  {
    slug: 'share-my-screen',
    title: 'How to share my screen in a meeting',
    category: 'meetings',
    tags: ['screen share', 'teams', 'zoom', 'present'],
    difficulty: 'easy',
    minutes: 4,
    summary:
      'Show a window, a desktop, or a PowerPoint without sharing the wrong screen.',
    symptoms: [
      'Share is greyed out',
      'People see a black window',
      'You shared the whole desktop by accident',
    ],
    steps: [
      {
        title: 'Use Share and pick a single window when you can',
        detail:
          'Sharing one window hides your inbox and chat. Share the desktop only when you must switch among many apps.',
      },
      {
        title: 'Include computer sound only if you need it',
        detail:
          'Tick include sound for a video. Leave it off for a normal slide deck so the room does not hear your notifications.',
      },
      {
        title: 'If share is blocked, check the meeting role',
        detail:
          'Some webinars allow only presenters to share. Ask the organizer to make you a presenter.',
      },
      {
        title: 'Close anything confidential first',
        detail:
          'Notifications, password managers, and extra monitors can appear on a full desktop share.',
      },
    ],
    escalate:
      'A black share on a virtual machine or after a GPU update is a known class of issue. Include your laptop model.',
  },
  {
    slug: 'echo-or-feedback-in-meeting',
    title: 'There is echo or feedback during a meeting',
    category: 'meetings',
    tags: ['echo', 'audio', 'speakerphone', 'headset'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'People hear their own voice, or the room howls when two devices are in the same space.',
    symptoms: [
      'Echo of the speaker',
      'Hollow sound',
      'Squeal when you unmute',
    ],
    steps: [
      {
        title: 'One speaker per room',
        detail:
          'If two laptops in the same room are in the call, mute all but one microphone and speaker. Better: one device, or a headset each.',
      },
      {
        title: 'Use a headset',
        detail:
          'Laptop mics pick up the speakers. A headset breaks the loop.',
      },
      {
        title: 'Lower speaker volume and move the mic',
        detail:
          'Pull the laptop mic away from the speaker. Turn off a second Bluetooth speaker that is also playing the call.',
      },
      {
        title: 'Leave and rejoin if the echo stays',
        detail:
          'A bad audio route can stick for that session. Rejoin with the headset already connected.',
      },
    ],
    escalate:
      'If a conference-room bar always echoes, facilities or IT should recable or replace the room device.',
  },
  {
    slug: 'cannot-join-a-meeting',
    title: 'I cannot join a meeting',
    category: 'meetings',
    tags: ['teams', 'zoom', 'lobby', 'link'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'The join link fails, you sit in the lobby, or the meeting ID is not found.',
    symptoms: [
      'Meeting not found',
      'Waiting in the lobby',
      'The link opens the wrong tenant',
    ],
    steps: [
      {
        title: 'Join from the calendar, not a forwarded snippet',
        detail:
          'Open the invite on your calendar and use Join. Copied IDs and old links go stale after an organizer updates the meeting.',
      },
      {
        title: 'Sign in with the account that was invited',
        detail:
          'A personal Teams or Zoom account will land in the wrong place. Switch to the work profile.',
      },
      {
        title: 'Ask someone already inside to admit you',
        detail:
          'Lobby wait usually means the organizer limited who can bypass it. Chat them on the side.',
      },
      {
        title: 'Use the dial-in number as a fallback',
        detail:
          'The invite includes a phone number and conference ID. You can listen while you fix the app.',
      },
    ],
    escalate:
      'If every meeting in your tenant fails, that is an outage. If only external meetings fail, send the platform and a screenshot.',
  },
  {
    slug: 'record-a-meeting',
    title: 'How to record a meeting',
    category: 'meetings',
    tags: ['record', 'teams', 'compliance', 'transcript'],
    difficulty: 'easy',
    minutes: 5,
    summary:
      'Capture a meeting for people who could not attend, within company policy.',
    symptoms: [
      'The record button is missing',
      'You need a transcript',
      'You are unsure where the file goes',
    ],
    steps: [
      {
        title: 'Confirm recording is allowed',
        detail:
          'Some meetings with customers, legal, or HR must not be recorded. If you are unsure, ask the organizer before you start.',
      },
      {
        title: 'Start recording from the meeting controls',
        detail:
          'In Teams, use More → Record and transcribe. Tell attendees you are recording. A banner appears for everyone.',
      },
      {
        title: 'Stop the recording when the discussion ends',
        detail:
          'Stopping early keeps hallway chat off the file. The video lands in the organizer’s OneDrive or the channel’s SharePoint, then a link posts to the chat.',
      },
      {
        title: 'Share the link, not a downloaded copy',
        detail:
          'Permissions stay with the recording. Download only if you need an offline archive that policy allows.',
      },
    ],
    escalate:
      'If Record is missing, you may not be a presenter, or policy blocks recording in that meeting type.',
  },
  {
    slug: 'screen-share-wrong-screen',
    title: 'Screen share is showing the wrong screen',
    category: 'meetings',
    tags: ['screen share', 'monitor', 'present', 'powerpoint'],
    difficulty: 'easy',
    minutes: 4,
    summary:
      'Attendees see your laptop lid, a blank panel, or the wrong monitor.',
    symptoms: [
      'People see the other display',
      'PowerPoint is on the wrong screen',
      'A window share shows frozen content',
    ],
    steps: [
      {
        title: 'Stop sharing and pick again',
        detail:
          'Choose the monitor thumbnail that shows the slides, or share the PowerPoint window instead of Screen 2.',
      },
      {
        title: 'Use Present in Teams for slide decks',
        detail:
          'In PowerPoint, present into the meeting when the option is available so attendees follow slides without seeing your notes.',
      },
      {
        title: 'Move the window onto the shared display',
        detail:
          'A window that sits on an unsaved virtual desktop or a disconnected monitor will look black.',
      },
      {
        title: 'Match display layout before the call',
        detail:
          'In Display settings, identify screens and arrange them. Sharing “Screen 1” is easier when you know which one that is.',
      },
    ],
    escalate:
      'If every share is black on a specific dock, treat it as a display-driver issue and include the dock model.',
  },
  {
    slug: 'create-teams-or-sharepoint-site',
    title: 'How to create a Teams space or SharePoint site',
    category: 'meetings',
    tags: ['teams', 'sharepoint', 'site', 'group'],
    difficulty: 'moderate',
    minutes: 8,
    summary:
      'Stand up a place for a project to chat, store files, and share a calendar.',
    symptoms: [
      'A new project has no home',
      'Files are living in email',
      'You created a private chat instead of a team',
    ],
    steps: [
      {
        title: 'Use the official request path if your tenant requires it',
        detail:
          'Many companies do not allow anyone to create a team. Use the request form so naming, ownership, and retention are correct.',
      },
      {
        title: 'If you can create one, pick the right type',
        detail:
          'A Team is for ongoing collaboration. A SharePoint site or communication site is for publishing. Do not create both for the same project.',
      },
      {
        title: 'Add at least two owners',
        detail:
          'Owners manage membership. A single owner who leaves the company strands the content.',
      },
      {
        title: 'Put files in the team library, not in the chat',
        detail:
          'Chat files are harder to find later. Use the Files tab and a simple folder scheme.',
      },
    ],
    escalate:
      'If creation is blocked, submit the request with the business owner, privacy level, and whether guests are required.',
  },
  {
    slug: 'chat-notifications-not-working',
    title: 'Chat or Teams notifications are not working',
    category: 'meetings',
    tags: ['notifications', 'teams', 'quiet hours', 'focus'],
    difficulty: 'easy',
    minutes: 6,
    summary:
      'Messages arrive only when you open the app, or banners never appear.',
    symptoms: [
      'No banners',
      'Missed @mentions',
      'Mobile notifies but the PC does not',
    ],
    steps: [
      {
        title: 'Check in-app notification settings',
        detail:
          'In Teams, open Settings → Notifications. Mentions and replies should be banner plus email if you miss things. Turn off Quiet hours if they are on by accident.',
      },
      {
        title: 'Allow Windows notifications for the app',
        detail:
          'Settings → System → Notifications. Focus assist / Do not disturb hides banners during presentations and at night.',
      },
      {
        title: 'Keep the app running in the tray',
        detail:
          'If you quit Teams fully, you will not get desktop alerts. On a laptop, set it to start automatically if that is allowed.',
      },
      {
        title: 'On a phone, re-enable system notifications',
        detail:
          'iOS and Android each have an app-level toggle that overrides Teams. Open a test chat with a colleague after you change it.',
      },
    ],
    escalate:
      'If the whole company missed notifications, check the status page. If only you are affected after a reinstall, include the client version.',
  },
]
