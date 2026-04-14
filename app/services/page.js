'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: '🌐'
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces',
    icon: '🎨'
  },
  {
    id: 3,
    title: '3D Web Graphics',
    description: 'Interactive 3D experiences using Three.js',
    icon: '🎭'
  },
  {
    id: 4,
    title: 'Performance Optimization',
    description: 'Fast, efficient, and scalable applications',
    icon: '⚡'
  },
  {
    id: 5,
    title: 'Consulting',
    description: 'Technical guidance and architecture planning',
    icon: '💡'
  },
  {
    id: 6,
    title: 'Maintenance & Support',
    description: 'Ongoing support and feature updates',
    icon: '🔧'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}