import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { alumniStories } from '../data/alumniStories';

const StoryDetail = () => {
  // 1. Get the slug from the URL (e.g., 'ahmed-hassan')
  const { slug } = useParams();

  // 2. Find the specific story in our data
  const story = alumniStories.find((s) => s.slug === slug);

  // 3. Error handling if story doesn't exist
  if (!story) {
    return (
      <div className="error-container">
        <h2>Story not found</h2>
        <Link to="/success-stories">Back to Success Stories</Link>
      </div>
    );
  }

  // 4. Render the dynamic content
  return (
    <div className="page-wrapper">
      <div className="container">
        <Link to="/success-stories" className="back-link">Back to Success Stories</Link>
        
        <div className="content-layout">
          {/* Main Story Content */}
          <main className="main-content">
            <div className="story-header">
              <span className="badge category">{story.category}</span>
              <span className="badge featured">Featured Story</span>
              <h1 className="story-title">{story.storyTitle}</h1>
              
              <div className="author-meta">
                <div className="avatar-circle">{story.initials}</div>
                <div className="author-info">
                  <span className="author-name">{story.name}</span>
                  <span className="author-role">{story.role}</span>
                </div>
                <div className="publish-meta">
                  <span>{story.date}</span>
                  <span className="separator">•</span>
                  <span>{story.readTime}</span>
                </div>
              </div>
            </div>

            <article className="article-body">
              <p className="lead-text">{story.summary}</p>
              
              {story.sections.map((section, index) => (
                <div key={index} className="story-section">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              ))}

              <blockquote className="pull-quote">
                "{story.quote}"
                <footer>— {story.name}</footer>
              </blockquote>

              <div className="tags-container">
                {story.tags.map(tag => (
                  <span key={tag} className="tag-pill">#{tag}</span>
                ))}
              </div>
            </article>
          </main>

          {/* Sidebar with Profile */}
          <aside className="sidebar">
            <div className="profile-card">
              <div className="profile-initials">{story.initials}</div>
              <h3>{story.name}</h3>
              <p className="sidebar-role">{story.role}</p>
              <p className="sidebar-bio">"{story.bio}"</p>
              
              <div className="profile-details">
                <div className="detail-item"><strong>Company</strong> {story.company}</div>
                <div className="detail-item"><strong>Location</strong> {story.location}</div>
              </div>
            </div>

            <div className="cta-box">
              <h4>Ready to start your journey?</h4>
              <p>Join {story.name.split(' ')[0]} and thousands of others who transformed their careers.</p>
              <button className="cta-button">Apply Now</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;