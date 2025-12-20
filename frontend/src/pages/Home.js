import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="home-header">
        <h2>Content Planning Scratchpad</h2>
        <p className="subtitle">
          Create, manage, update, and delete your content ideas
        </p>
      </div>

      <div className="home-cards">
        <Link to="/create" className="home-card">
          <h3>Create Content</h3>
          <p>Add new content ideas</p>
        </Link>

        <Link to="/view" className="home-card">
          <h3>View Contents</h3>
          <p>Browse all content ideas</p>
        </Link>

        <Link to="/update" className="home-card">
          <h3>Update Status</h3>
          <p>Move content through workflow</p>
        </Link>

        <Link to="/delete" className="home-card">
          <h3>Delete Content</h3>
          <p>Remove unwanted or outdated content</p>
        </Link>
      </div>
    </div>
  );
}
