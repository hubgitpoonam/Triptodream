import React from 'react';
import BlogList from './BlogList';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with new color scheme */}
      <div style={{ backgroundColor: '#730664' }} className="py-16 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center font-serif">
            Travel Blog
          </h1>
          <p className="text-white text-center mt-6 max-w-2xl mx-auto text-lg">
            Explore our collection of travel stories, tips, and guides to inspire your next adventure.
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </div>
      
      {/* Featured posts section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: '#730664' }}>
            Latest Travel Stories
          </h2>
          <p className="text-gray-600 mt-3">
            Discover exotic destinations, travel tips, and cultural insights from our experts
          </p>
        </div>
        <BlogList />
      </div>
    </div>
  );
};

export default BlogPage; 