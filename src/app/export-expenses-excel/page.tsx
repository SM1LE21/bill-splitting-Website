import { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

// PUBLISH GATE: noindex until Apple approves iOS 1.5.0. To publish: remove the robots
// line below and add '/export-expenses-excel' to src/app/sitemap.ts. Orphaned on
// purpose — no nav or footer link.
export const metadata: Metadata = {
  title: 'Export shared expenses to Excel or CSV — ExpenseMate',
  description:
    'How to export a group of shared expenses from ExpenseMate as a CSV file that opens in Excel, Numbers or Google Sheets, or as a PDF.',
  robots: { index: false, follow: false },
};

const columns = [
  ['Date', 'When the expense was recorded'],
  ['Type', 'Whether the row is an expense or a settlement'],
  ['Description', 'What it was'],
  ['Paid By', 'Who actually paid'],
  ['Recipient', 'Who received it, for settlements'],
  ['Amount', 'The total, in the group currency'],
  ['Category', 'The category the expense was filed under'],
  ['Splits', 'How the amount was divided, and between whom'],
];

const faqs = [
  {
    question: 'Can I export shared expenses to Excel?',
    answer:
      'Yes. ExpenseMate exports a group as a CSV file, which Excel opens directly, as do Numbers and Google Sheets. There is also a PDF option if you want something readable rather than something you can calculate with.',
  },
  {
    question: 'What time period does the export cover?',
    answer:
      'You choose before exporting: All Time, This Month, Last Month, or a custom date range you pick yourself.',
  },
  {
    question: 'Is exporting free?',
    answer:
      'Export is part of ExpenseMate Premium, which costs €2.99 a month or €24.99 a year. Splitting bills, scanning receipts and settling up are free.',
  },
  {
    question: 'Where does the file go?',
    answer:
      'The report is generated on your iPhone and handed to the normal iOS share sheet, so you can put it in Files, email it, drop it into a chat, or send it straight to another app. It is not generated on a server.',
  },
  {
    question: 'Which app opens the CSV?',
    answer:
      'Any spreadsheet app. On a Mac or PC, Excel and Google Sheets both open it without conversion. On the iPhone, Numbers opens it directly from the share sheet.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function ExportExpensesExcel() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Exporting shared expenses to Excel
          </h1>

          <div className="mt-8 rounded-2xl border-l-4 border-primary bg-primary/5 p-6">
            <p className="text-lg font-semibold text-gray-900">The short answer</p>
            <p className="mt-3">
              ExpenseMate exports any group as a CSV file, which opens straight in Excel,
              Numbers or Google Sheets. Open the group, go to Reports, pick a period, and
              choose CSV. Pick PDF instead if you want something to read or send on rather
              than something to calculate with. Export is a Premium feature.
            </p>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            How to export a group
          </h2>
          <ol className="mt-6 list-decimal space-y-3 pl-5">
            <li>Open the group you want to export.</li>
            <li>Open Reports from the toolbar on the group summary.</li>
            <li>
              Choose the period: All Time, This Month, Last Month, or a custom range.
            </li>
            <li>Choose CSV for a spreadsheet, or PDF for a document.</li>
            <li>
              The iOS share sheet opens. Save it to Files, mail it to yourself, or send it
              to whoever is doing the maths.
            </li>
          </ol>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            What is in the spreadsheet
          </h2>
          <p className="mt-4">
            The file opens with the group name, the period it covers and when it was
            generated. Below that, one row per transaction with these columns:
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[30rem] border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-left font-semibold text-gray-900">
                  <th className="px-4 py-3">Column</th>
                  <th className="px-4 py-3">What it holds</th>
                </tr>
              </thead>
              <tbody>
                {columns.map(([name, meaning]) => (
                  <tr key={name} className="border-t border-gray-200">
                    <th scope="row" className="px-4 py-3 text-left font-medium text-gray-900">
                      {name}
                    </th>
                    <td className="px-4 py-3 text-gray-700">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6">
            Settlements are included alongside expenses and marked in the Type column, so
            the file reconciles rather than just listing what was spent.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            CSV or PDF?
          </h2>
          <p className="mt-4">
            Take the CSV if anything downstream needs to do arithmetic — a reimbursement
            claim, a shared budget, your own spreadsheet of a trip. Take the PDF if
            somebody just needs to read it, or if you are attaching it to something. The
            two cover the same data over the same period.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Common questions
          </h2>
          <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="px-5 py-4">
                <h3 className="text-base font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm">
            Comparing options first?{' '}
            <Link href="/vs-splitwise" className="text-primary hover:underline">
              ExpenseMate vs Splitwise
            </Link>
            .
          </p>
          <p className="mt-6 text-sm text-gray-500">
            ExpenseMate is an iPhone app made by TK MEDIA S.à r.l.-S, with a companion web
            app at app.expensemate.app. There is no Android app.
          </p>
        </div>
      </div>
    </Layout>
  );
}
