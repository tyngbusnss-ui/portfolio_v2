'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Professional Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am a passionate full-stack developer with expertise in modern web technologies. 
              With years of experience in building scalable applications, I bring innovation and 
              precision to every project.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Skills & Tools</h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>✓ JavaScript / TypeScript</li>
              <li>✓ React & Next.js</li>
              <li>✓ Three.js & WebGL</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ Node.js & Express</li>
              <li>✓ Database Design</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}