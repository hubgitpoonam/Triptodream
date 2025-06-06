import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchBlogPost, clearCurrentBlogPost } from '../../features/blog/blogSlice';
import '../../styles/BlogStyles.css';

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentBlogPost, status, error } = useSelector((state) => state.blog);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    dispatch(fetchBlogPost(id));

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      dispatch(clearCurrentBlogPost());
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, id]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-64 mt-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: '#730664' }}></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex justify-center items-center h-64 mt-8">
        <div className="text-red-500 text-xl">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!currentBlogPost) {
    return null;
  }

  // Format description to add bullet points if the text contains newlines
  const formatDescription = (text) => {
    if (!text) return '';
    
    // Split by newlines and create formatted content
    const paragraphs = text.split('\n').filter(line => line.trim() !== '');
    
    return (
      <div className="blog-content">
        {paragraphs.map((paragraph, index) => {
          // Check if paragraph starts with - or * to make it a bullet point
          if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('*')) {
            return (
              <li key={index} className="ml-5 list-disc mb-3 text-gray-700">
                {paragraph.replace(/^[-*]\s*/, '')}
              </li>
            );
          }
          return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl blog-detail-container">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-3" style={{ color: '#730664' }}>{currentBlogPost.title}</h1>
          <div className="text-sm text-gray-500 mb-6">
            Posted on: {new Date(currentBlogPost.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          
          <div className="blog-content-container" style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '400px 1fr',
            gap: '24px',
            marginBottom: '32px',
            alignItems: 'start'
          }}>
            {/* Left side - Image (always at top) */}
            <div className="image-container" style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'start',
              marginBottom: isMobile ? '20px' : '0',
              position: 'sticky',
              top: '20px'
            }}>
            <img 
              src={currentBlogPost.image_url} 
              alt={currentBlogPost.title} 
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '8px'
                }}
            />
          </div>

            {/* Right side - Description */}
            <div className="content-container">
          <div className="prose max-w-none">
            {formatDescription(currentBlogPost.description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 