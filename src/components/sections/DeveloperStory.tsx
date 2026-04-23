import {
  ChevronDownIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'When is the Android version coming?',
    answer:
      'The Android version is currently in development. As a solo developer, I\'m focusing on delivering a high-quality experience one platform at a time.',
  },
  {
    question: 'Are there any new features planned?',
    answer:
      'Absolutely! I\'m constantly working on new features based on user feedback and personal experience. The app evolves with the needs of its users.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'Your data is securely stored on Google Cloud infrastructure. I prioritise data security and privacy in every development decision, utilising Google Cloud\'s enterprise-grade security features to protect your information.',
  },
  {
    question: 'Can I contribute to this project?',
    answer:
      'Absolutely! I\'d love your help. Please reach out via the contact section.',
  },
];

export default function DeveloperStory() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32 lg:py-40" id="developer-story">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Behind the app
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A developer&apos;s journey
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg leading-8 text-gray-700">
          <p>
            Hi, I&apos;m Tun. ExpenseMate is the expense-tracking app I always
            wanted to use myself. Every feature grows out of a real need: how
            people actually split money in everyday life, and the friction that
            shows up when the numbers stop being round.
          </p>
          <p>
            It&apos;s built in the open, shipped in the open, and shaped by the
            people who use it. If something feels off, if something is missing,
            or if there&apos;s a bill you can&apos;t split the way you want,
            tell me. That&apos;s how the next version gets written.
          </p>
        </div>

        <div
          id="contact"
          className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 scroll-mt-24 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <UserCircleIcon className="h-8 w-8 flex-none text-primary" />
            <div>
              <p className="text-base font-semibold text-gray-900">
                Questions, bugs, ideas?
              </p>
              <p className="text-sm text-gray-600">
                Your input directly shapes the roadmap.
              </p>
            </div>
          </div>
          <a
            href="mailto:contact@tkmedia.lu"
            className="inline-flex items-center gap-x-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5" />
            Get in touch
          </a>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-gray-900">
            Common questions
          </h3>
          <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group px-5 py-4 open:bg-gray-50/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gray-900 marker:hidden">
                  <span>{faq.question}</span>
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-500 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
