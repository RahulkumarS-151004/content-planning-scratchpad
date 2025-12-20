import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../config";


function ViewContents() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/contents`)
      .then(res => setIdeas(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h3>All Contents</h3>

      {ideas.length === 0 ? (
        <p>No contents available</p>
      ) : (
        <div className="table-wrapper">
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ideas.map(i => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.description}</td>
                <td>{i.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
      <a href="/"><button>Home</button></a>
      <a href="/update"><button id="b">Update Content</button></a>
    </div>
  );
}

export default ViewContents;
