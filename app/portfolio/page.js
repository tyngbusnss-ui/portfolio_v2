'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import PortfolioCard from '@/components/PortfolioCard';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration',
    image: '/images/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat app powered by AI',
    image: '/images/project2.jpg',
    tags: ['Next.js', 'WebSocket', 'AI']
  },
  {
    id: 3,
    title: '3D Portfolio',
    description: 'Interactive 3D portfolio using Three.js',
    image: '/images/project3.jpg',
    tags: ['Three.js', 'React', 'WebGL']
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Feature-rich social platform',
    image: '/images/project4.jpg',
    tags: ['React', 'Firebase', 'Tailwind']
  },
  {
    id: 5,
    title: 'Data Visualization Dashboard',
    description: 'Analytics dashboard with real-time data',
    image: '/images/project5.jpg',
    tags: ['D3.js', 'React', 'Node.js']
  },
  {
    id: 6,
    title: 'Mobile App',
    description: 'Cross-platform mobile application',
    image: '/images/project6.jpg',
    tags: ['React Native', 'Firebase']
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}