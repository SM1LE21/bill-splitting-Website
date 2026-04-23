import { EnvelopeIcon, QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'When is the Android version coming?',
    answer: 'The Android version is currently in development. As a solo developer, I\'m focusing on delivering a high-quality experience one platform at a time.'
  },
  {
    question: 'Are there any new features planned?',
    answer: 'Absolutely! I\'m constantly working on new features based on user feedback and personal experience. The app evolves with the needs of its users.'
  },
  {
    question: 'Where is my data stored?',
    answer: 'Your data is securely stored on Google Cloud infrastructure. I prioritize data security and privacy in every development decision, utilizing Google Cloud\'s enterprise-grade security features to protect your information.'
  },
  {
    question: 'Can I contribute to this project?',
    answer: 'Absolutely! I\'d love your help. Please reach out via the contact section.'
  }
];

export default function DeveloperStory() {
  return (
    <div className="bg-white py-24 sm:py-32" id="developer-story">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Behind The App
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Developer&apos;s Journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hi! I&apos;m Tun, and I&apos;m building ExpenseMate as the expense tracking app I&apos;ve always wanted to use myself.
            Every feature grows out of a real-world need — driven by how people actually split money in everyday life,
            and shaped by feedback from the people who use it.
          </p>
        </div>

        <div
          id="contact"
          className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white/5 ring-1 ring-primary/10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none scroll-mt-24"
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="flex items-center gap-x-4">
              <UserCircleIcon className="h-8 w-8 flex-none text-primary" />
              <h4 className="flex-auto text-lg font-semibold leading-8 text-gray-900">
                A Personal Project
              </h4>
            </div>
            <p className="mt-4 text-base leading-7 text-gray-600">
              This is an ongoing project that I&apos;m constantly improving. I welcome all feedback and
              criticism - every bug report and design suggestion helps make ExpenseMate better.
              Your input directly shapes the future of this app.
            </p>
            <div className="mt-6">
              <a
                href="mailto:contact@tkmedia.lu"
                className="inline-flex items-center gap-x-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-primary ring-1 ring-primary hover:ring-2 transition-all"
              >
                <EnvelopeIcon className="h-5 w-5" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            Common Questions
          </h3>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <QuestionMarkCircleIcon className="h-5 w-5 flex-none text-primary" />
                  {faq.question}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
