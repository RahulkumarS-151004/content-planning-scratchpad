import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

function UpdateContent() {
  const [ideas, setIdeas] = useState([]);

  const fetchIdeas = () => {
    axios.get(`${API_URL}/contents`)
      .then(res => setIdeas(res.data));
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <div style={{ padding: "20px" }} >
      <h3>Update Content Status</h3>

      {ideas.map(idea => (
        <div key={idea.id} style={{ marginBottom: "10px" }} class="update">
          <strong>{idea.title}</strong>

          <select
            value={idea.status}
            onChange={(e) => {
              axios.put(`${API_URL}/contents/${idea.id}`, {
                status: e.target.value
              }).then(fetchIdeas);
            }}
          >
            <option value="Draft">Draft</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Published">Published</option>
          </select>
        </div>
      ))}
      <a href="/view"><button id="b">View Contents</button></a>
      <a href="/"><button>Home</button></a>
    </div>
  );
}

export default UpdateContent;
