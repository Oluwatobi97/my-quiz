// app/services/page.tsx
import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI-Powered Quiz Creation',
      description:
        'Create quizzes from any text, document, image, or URL using advanced AI technology.',
      icon: '🤖',
    },
    {
      title: 'Multiple Question Types',
      description:
        'Support for multiple choice, short answer, true/false, and custom question formats.',
      icon: '📝',
    },
    {
      title: 'Real-Time Analytics',
      description:
        'Track student performance, view detailed results, and export data for analysis.',
      icon: '📊',
    },
    {
      title: 'Secure Access Control',
      description:
        'Generate unique access codes and links to control who can take your quizzes.',
      icon: '🔒',
    },
    {
      title: 'Time Management',
      description:
        'Set time limits per question or for the entire quiz with automatic submission.',
      icon: '⏱️',
    },
    {
      title: 'Easy Sharing',
      description:
        'Share quizzes with students via access codes or direct links. No complicated setup required.',
      icon: '🔗',
    },
  ];

  const features = [
    'Create unlimited quizzes',
    'Support for all question types',
    'Real-time result tracking',
    'Export results to CSV/PDF',
    'Custom branding options',
    'API access for integrations',
    'Secure and private',
    'Mobile-friendly interface',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-blue-600">
            Magic Quiz
          </Link>
          <nav className="flex gap-4 items-center">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-600 font-semibold">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-blue-600">
              Pricing
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Everything you need to create, manage, and analyze quizzes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of educators using Magic Quiz
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signup"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Sign Up Free
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

