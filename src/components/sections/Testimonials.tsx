'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Travel Enthusiast',
    rating: 5,
    content: 'This app made our group vacation so much easier! No more awkward conversations about money - everything was clear and simple.',
    imageUrl: '/avatars/avatar-1.jpg',
  },
  {
    name: 'Mike Chen',
    role: 'Roommate',
    rating: 5,
    content: 'Perfect for managing apartment expenses. We use it every month for rent, utilities, and groceries. Highly recommended!',
    imageUrl: '/avatars/avatar-2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student',
    rating: 5,
    content: 'Great for splitting costs with friends. Whether it\'s dinner, movie night, or group activities, this app handles it all.',
    imageUrl: '/avatars/avatar-3.jpg',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Loved by users everywhere
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="flex items-center gap-x-4 mb-4">
                <div className="relative h-12 w-12 rounded-full bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {testimonial.name[0]}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      testimonial.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600">{testimonial.content}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 