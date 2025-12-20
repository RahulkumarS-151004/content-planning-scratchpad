import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://127.0.0.1:5000";

function CreateContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required");
      return;
    }

    axios.post(`${API_URL}/contents`, { title, description })
      .then(() => {
        alert("Content created");
        navigate("/");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Create New Content</h3>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br /><br />

        <button type="submit" id="b" class="create">Create</button>
      </form>
      <a href="/"><button>Home</button></a>
    </div>
  );
}

export default CreateContent;
