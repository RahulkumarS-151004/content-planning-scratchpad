import { useEffect, useState } from "react";

export default function DeleteContent() {
  const [contents, setContents] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/contents")
      .then(res => res.json())
      .then(data => setContents(data));
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!selectedId) {
      setMessage("❌ Please select content to delete");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this content?"
    );

    if (!confirmDelete) return;

    const res = await fetch(
      `http://127.0.0.1:5000/contents/${selectedId}`,
      { method: "DELETE" }
    );

    const data = await res.json();

    if (res.ok) {
      setMessage("✅ Content deleted successfully");

      // Update UI after delete
      setContents(contents.filter(item => item.id !== Number(selectedId)));
      setSelectedId("");
    } else {
      setMessage(`❌ ${data.error}`);
    }
  };

  return (
    <div className="container">
      <h2>Delete Content</h2>

      {message && <p style={{ textAlign: "center" }}>{message}</p>}

      <form onSubmit={handleDelete}>
        <select
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
        >
          <option value="">Select content</option>
          {contents.map(item => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>

        <div className="action-row">
          <button
            type="submit"
            style={{ backgroundColor: "#dc2626" }}
          >
            Delete
          </button>
        </div>
      </form>
      <a href="/"><button>Home</button></a>
      <a href="/view"><button id="b">View Contents</button></a>

    </div>
  );
}
