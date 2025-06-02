import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../../features/blog/blogSlice';
import '../../styles/BlogStyles.css';

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogPosts, status, error } = useSelector((state) => state.blog);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: '#730664' }}></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500 text-xl">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  // Function to get a short excerpt from description
  const getExcerpt = (text, maxLength = 100) => {
    if (!text) return '';
    
    // Get first few lines (up to 3)
    const lines = text.split('\n').filter(line => line.trim() !== '').slice(0, 3);
    const excerpt = lines.join(' ').trim();
    
    if (excerpt.length <= maxLength) return excerpt;
    
    // If longer than maxLength, truncate and add ellipsis
    return excerpt.substring(0, maxLength) + '...';
  };

  // Styles for line clamping
  const descriptionStyle = {
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={post.id} 
            className="blog-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1 duration-300" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="blog-image-wrapper">
              <img 
                src={post.image_url} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2" style={{ color: '#730664' }}>{post.title}</h3>
              <div className="text-xs text-gray-500 mb-2">
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <p className="text-gray-700 mb-3 text-sm" style={descriptionStyle}>
                {getExcerpt(post.description)}
              </p>
              <Link 
                to={`/blog/${post.id}`} 
                className="read-more-btn text-sm inline-block px-3 py-1 rounded transition-colors hover:bg-opacity-90"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList; 