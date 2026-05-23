import React from 'react';
import { Link } from 'react-router-dom';
import { alumniStories } from '../data/alumniStories';

const SuccessStories = () => {
  return (
    <div className="stories-grid">
      {alumniStories.map((story) => (
        <div key={story.id} className="story-card">
          <h3>{story.name}</h3>
          <p className="company">{story.company}</p>
          <p className="role">{story.role}</p>
          <p className="summary">"{story.summary}"</p>
          {/* FIX: Link to the dynamic slug instead of a static page */}
          <Link to={`/success-stories/${story.slug}`} className="read-more">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SuccessStories;