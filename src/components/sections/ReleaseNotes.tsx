'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface VersionNote {
  version: string;
  date?: string;
  platform?: 'iOS' | 'Android' | 'Web';
  changes: {
    type: 'feature' | 'bugfix' | 'improvement';
    description: string;
  }[];
}

// NOTE FOR FUTURE MAINTAINERS / AGENTS:
// This list is for ExpenseMate product releases only — the iOS app, the
// Android app, and the web app at app.expensemate.app.
// Do NOT add entries for marketing-site changes, legal/policy updates, footer
// tweaks, etc., those are internal to this site and not a "release" that
// users of ExpenseMate should see. If you need to communicate a website
// change, do it elsewhere (commit history, PR description).
const releaseNotes: VersionNote[] = [
  {
    version: '1.1',
    date: '14th August 2026',
    platform: 'Web',
    changes: [
      {
        type: 'feature',
        description: 'Receipt scanning, now in your browser. Drag a photo in, paste one from the clipboard, pick a file, or take a picture with your phone — ExpenseMate reads the receipt and fills in the items, the total and the date, ready to split. Same allowance as the iOS app: 30 scans a month on the free plan, unlimited with Premium.'
      },
      {
        type: 'feature',
        description: 'Five languages on the web — English, German, French, Spanish and Portuguese, the same five the iOS app speaks. It picks one from your browser settings, and you can change it any time from Settings.'
      },
      {
        type: 'feature',
        description: 'Profile pictures. Upload a photo, crop it to fit, and it appears next to your name everywhere in the app.'
      },
      {
        type: 'improvement',
        description: 'Splitting an itemised receipt now works one way: per-person shares. Tap someone\'s name to put them on an item, or use the stepper if they had more than one — two coffees on the same line, say. After a scan everyone starts on one share each, so an even split is already done.'
      },
      {
        type: 'improvement',
        description: 'With scanning on the web, the browser version now does nearly everything the iOS app does. Notifications and Home Screen shortcuts are still iOS features, and ExpenseMate Premium is still bought and managed in the iOS app.'
      }
    ]
  },
  {
    version: '1.0',
    date: 'August 2026',
    platform: 'Web',
    changes: [
      {
        type: 'feature',
        description: 'ExpenseMate on the web. Sign in at app.expensemate.app and manage your groups, expenses, splits and balances in any browser — on a laptop, a desktop, or a phone. It uses the same account as the iOS app, so anything you add in one is there in the other.'
      },
      {
        type: 'feature',
        description: 'A dashboard made for a bigger screen: your balance across every group, spending over time, and a category breakdown, all in one place.'
      },
      {
        type: 'feature',
        description: 'Group reports export as PDF or CSV straight from the browser, with the same periods you get in the app. Export is a Premium feature on the web, exactly as it is on iOS.'
      },
      {
        type: 'improvement',
        description: 'Group invite links now open the web app for anyone who does not have ExpenseMate installed, so a friend can join a group from whatever device they happen to have.'
      },
      {
        type: 'improvement',
        description: 'The web app is a companion to the iOS app rather than a replacement for it. Notifications and Home Screen shortcuts stay on iOS for now, and ExpenseMate Premium is still bought and managed there.'
      }
    ]
  },
  {
    version: '1.5.0',
    date: '5th August 2026',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'ExpenseMate Premium is here — unlock unlimited groups, unlimited receipt scans, your full expense history, report exports for any period, and multi-currency conversion. €2.99/month or €24.99/year.'
      },
      {
        type: 'feature',
        description: 'A thank-you to our early users: if you already had an account, you keep full Premium features for free — only the 30 receipt scans per month limit applies.'
      },
      {
        type: 'improvement',
        description: 'Manage or cancel your subscription anytime right inside the app, from Settings or your Profile.'
      },
      {
        type: 'bugfix',
        description: 'Fixed: report export failed on devices set to some regions.'
      },
      {
        type: 'bugfix',
        description: 'Fixed: scanned receipts could pick up an implausible date.'
      }
    ]
  },
  {
    version: '1.4.2',
    date: '30th May 2026',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'Copy a group\'s ID straight from the share menu or group settings — paste it into Join Group to add someone in seconds, no link needed.'
      },
      {
        type: 'bugfix',
        description: 'Fixed group invite links opening the app but not taking you to the join screen — shared links now go straight to joining the group.'
      }
    ]
  },
  {
    version: '1.4.1',
    date: '13th May 2026',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'New: Home Screen shortcuts. Long-press ExpenseMate to scan a receipt or add an expense in two taps — never open the app first.'
      },
      {
        type: 'feature',
        description: 'Scanned receipts now know their own date — the expense date is filled in automatically from what\'s printed on the receipt, so back-dated expenses just work.'
      }
    ]
  },
  {
    version: '1.4.0',
    date: '5th May 2026',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'Group Reports — export any group as a clean PDF or CSV. Pick all-time, this month, last month, or a custom date range. Includes summary, member totals, balances, settlement suggestions, expense list, and category breakdown. Share via the native iOS share sheet.'
      },
      {
        type: 'improvement',
        description: 'Reports button is now in the Summary tab toolbar, so totals and exports are one tap away'
      },
      {
        type: 'feature',
        description: 'Insights, now centred on you — see Your share, You paid, and Net at a glance, each with period-over-period trends. New Highlights card surfaces your top category, your share trend, and your biggest expense in the period. The category donut now reflects your share, not group totals'
      },
      {
        type: 'feature',
        description: 'Back-date expenses — pick a past date and time when adding an expense, perfect for catching up after a trip'
      },
      {
        type: 'improvement',
        description: 'Pull-to-refresh on Groups, plus smooth skeleton placeholders while Groups and Expenses load'
      },
      {
        type: 'improvement',
        description: 'iOS Passwords / iCloud Keychain autofill on Login and Sign-up; Return advances email → password → submit'
      },
      {
        type: 'bugfix',
        description: 'Fixed reports occasionally rendering gray-on-white or white-on-white in some appearance modes'
      }
    ]
  },
  {
    version: '1.3.1',
    date: '25th April 2026',
    platform: 'iOS',
    changes: [
      {
        type: 'improvement',
        description: 'Clearer maintenance and service unavailable screens with retry, so you always know what\'s happening if the app can\'t reach our servers'
      },
      {
        type: 'improvement',
        description: 'Performance and reliability improvements'
      }
    ]
  },
  {
    version: '1.3.0',
    date: '27th February 2026',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'Spending Insights, Explore your spending patterns by week, month, quarter, or year in the new Insights tab'
      },
      {
        type: 'improvement',
        description: 'Redesigned Summary with Overview and Insights tabs for a cleaner experience'
      },
      {
        type: 'improvement',
        description: 'Improved empty states and helpful prompts when getting started with groups and expenses'
      },
      {
        type: 'improvement',
        description: 'Smoother forms, refined Add Expense, Join Group, and Profile screens for easier use'
      },
      {
        type: 'improvement',
        description: 'Completed translations across all screens in all 5 supported languages'
      },
      {
        type: 'improvement',
        description: 'Bug fixes and performance improvements'
      }
    ]
  },
  {
    version: '1.2.4',
    date: '3rd January 2026',
    platform: 'iOS',
    changes: [
      {
        type: 'improvement',
        description: 'This update focuses on improvements under the hood to ensure a smoother and more stable experience. Thank you for your continued feedback, and enjoy using the app with even more reliability!'
      }
    ]
  },
  {
    version: '1.2.3',
    date: '16th November 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'Receipt Item Management - Add & Delete'
      }
    ]
  },
  {
    version: '1.2.2',
    date: '8th November 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'Group Balance Indicators'
      },
      {
        type: 'improvement',
        description: 'Localization - Action Center Renamed'
      },
      {
        type: 'improvement',
        description: 'Localization - German Translation Improvements'
      },
      {
        type: 'bugfix',
        description: 'User Personalization - Session-Based Trigger Fix'
      },
      {
        type: 'feature',
        description: 'User Personalization System ( only available for Premium Beta users)'
      }
    ]
  },
  {
    version: '1.2.1',
    date: 'September 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'improvement',
        description: 'Edit Expense – Save Button Loading State'
      },
      {
        type: 'bugfix',
        description: 'Edit Expense – Default Currency Fix'
      },
      {
        type: 'improvement',
        description: 'AI Receipt Extraction – Backend Fallback'
      },
      {
        type: 'improvement',
        description: 'AI Receipt Parsing - Numeric Formatting'
      },
      {
        type: 'bugfix',
        description: 'Receipt Editing – Amount Formatting Fix'
      },
      {
        type: 'improvement',
        description: 'Category Picker Haptics'
      },
      {
        type: 'improvement',
        description: 'Group Creation – Placeholder Info'
      },
      {
        type: 'feature',
        description: 'Placeholder Management & Claiming Flow Added'
      }
    ]
  },
  {
    version: '1.2.0',
    date: '26 August 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'Multi-currency expenses with automatic conversion to the group base currency and currency detection in receipt scanning'
      },
      {
        type: 'feature',
        description: 'Editable receipt items with live total recalculation and clear edited indicators'
      },
      {
        type: 'improvement',
        description: 'Unified currency and category pickers using sheets with search'
      },
      {
        type: 'improvement',
        description: 'Redesigned category picker (grid, emoji icons) plus recently used suggestions'
      },
      {
        type: 'improvement',
        description: 'Consistent category colors and localization updates (EN, DE, FR, ES, PT)'
      },
      {
        type: 'bugfix',
        description: 'Fixed incorrect totals after editing receipt items and improved number formatting'
      },
      {
        type: 'bugfix',
        description: 'More reliable AI category suggestions during receipt scanning'
      }
    ]
  },
  {
    version: '1.1.5',
    date: '29 July 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'improvement',
        description: 'Enhanced settlement display, shows both payer and recipient (e.g., "Settlement: John → Daniel")'
      },
      {
        type: 'improvement',
        description: 'Improved zero amount formatting, no more confusing "-0.00" in red, now displays as neutral "0.00"'
      },
      {
        type: 'improvement',
        description: 'Improved receipt processing reliability, added automatic fallback chain (Gemini → OpenAI → Server) when AI services are overloaded or fail'
      },
      {
        type: 'feature',
        description: 'Added drag-to-reorder functionality for groups (long press and drag)'
      },
      {
        type: 'bugfix',
        description: 'Added missing language localization keys for the language selection screen (settings.language.title, settings.language.description) across English, German, French'
      },
      {
        type: 'bugfix',
        description: 'Corrected net balance display to accurately reflect financial exposure'
      }
    ]
  },
  {
    version: '1.1.4',
    date: '2 July 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'Added comprehensive expense statistics including personal totals, group averages, and weekly spending summaries'
      }
    ]
  },
  {
    version: '1.1.3',
    date: '15 June 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'bugfix',
        description: 'Fixed authentication flow when email is not verified'
      },
      {
        type: 'bugfix',
        description: 'Fixed image picker not opening scan receipt view'
      },
      {
        type: 'bugfix',
        description: 'Fixed incorrect notification recipients for edited expenses'
      },
      {
        type: 'bugfix',
        description: 'Fixed group sharing link for users without ExpenseMate installed'
      },
      {
        type: 'bugfix',
        description: 'Fixed date and time editing functionality'
      }
    ]
  },
  {
    version: '1.1.2',
    date: '6 June 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'bugfix',
        description: 'Fixed wrong labels'
      }
    ]
  },
  {
    version: '1.1.1',
    date: '2 June 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'bugfix',
        description: 'Fixed "Paid by" information now correctly displays the payer\'s name in the expense list view across all supported languages'
      }
    ]
  },
  {
    version: '1.1.0',
    date: '29 May 2025',
    platform: 'iOS',
    changes: [
      {
        type: 'feature',
        description: 'Added one-tap sign-in with Google and Apple'
      },
      {
        type: 'feature',
        description: 'Added multi-language support in German and French'
      },
      {
        type: 'improvement',
        description: 'New default and compact view for Expenses'
      },
      {
        type: 'improvement',
        description: 'Redesigned sharing group view when pressing the group name'
      },
      {
        type: 'bugfix',
        description: 'Fixed dark mode bug'
      },
      {
        type: 'improvement',
        description: 'Improved onboarding experience for new users'
      },
      {
        type: 'improvement',
        description: 'Optimized data handling with image caching to reduce unnecessary refetching'
      }
    ]
  }
];

const ReleaseNotes: React.FC = () => {
  return (
    <>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Release Notes</h1>
      <p className="mt-6 text-base leading-8">
        Track the evolution of ExpenseMate with our detailed release notes. See what&apos;s new, what&apos;s improved, and what&apos;s been fixed in each version.
      </p>

      <div className="mt-10 max-w-2xl">
        {releaseNotes.map((release) => (
          <motion.div
            key={release.version}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="flex items-center gap-x-4">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Version {release.version}
              </h2>
              {release.date && (
                <span className="text-sm text-gray-500">
                  Released {release.date}
                </span>
              )}
              {release.platform && (
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary whitespace-nowrap">
                  {release.platform} only
                </span>
              )}
            </div>
            
            <div className="mt-6 space-y-4">
              {release.changes.map((change, changeIndex) => (
                <div key={changeIndex} className="flex gap-x-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-base leading-7 text-gray-600">
                    {change.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ReleaseNotes; 