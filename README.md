## Track Chosen + Why

**Track A — Content Scratchpad + Planning Queue**

I chose this track because it closely reflects real-world content workflow tools (like Buffer). It allowed me to demonstrate CRUD operations, state transitions, and clean separation between frontend, backend, and persistence within a limited time.

---

## Features Implemented ✅

* [x] Create new content ideas
* [x] View all content ideas in a table
* [x] Update content status (Draft → Scheduled → Published)
* [x] Delete content (separate page with confirmation)
* [x] REST API with validation and clear error messages
* [x] SQLite persistence using SQLAlchemy
* [x] Responsive UI (mobile + desktop)
* [x] Home page navigation controlling all actions
* [x] User confirmation messages for create/update/delete

---

## Tech Stack 🛠️

**Frontend**

* React
* React Router DOM
* CSS (custom, responsive)

**Backend**

* Python
* Flask
* Flask-SQLAlchemy
* Flask-CORS

**Database**

* SQLite

**Tools**

* VS Code
* Thunder Client (API testing)

---

## How to Run Locally ▶️

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate      # Windows
# source venv/bin/activate # macOS/Linux

pip install -r requirements.txt
python app.py
```

Backend runs at:

```
http://127.0.0.1:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## API Endpoints List 🔌

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| GET    | `/contents`      | List all contents     |
| POST   | `/contents`      | Create new content    |
| PUT    | `/contents/<id>` | Update content status |
| DELETE | `/contents/<id>` | Delete content        |

---

## Data Model 📊

### Table: `Content`

| Field       | Type         | Description                   |
| ----------- | ------------ | ----------------------------- |
| id          | Integer (PK) | Unique content ID             |
| title       | String       | Content title                 |
| description | String       | Optional description          |
| status      | String       | Draft / Scheduled / Published |

---

## AI Usage Log 🤖

### AI Tool(s) Used

* ChatGPT

### How AI Helped (3–5 points)

* Generated initial Flask API boilerplate
* Helped structure React components cleanly
* Suggested REST endpoint design and validation patterns
* Assisted in responsive CSS improvements
* Helped review and improve error handling

### Example Prompt Used

> “Design a beginner-friendly Flask + React CRUD app for a content planning workflow with production-minded practices.”

### Example of AI Output I Corrected / Refactored

* AI initially suggested combining delete functionality into the list page.
* I refactored this into a **separate Delete page** to avoid accidental destructive actions and improve UX clarity.
* I also manually validated API responses and adjusted error handling based on actual backend behavior.

---

## Trade-offs + Next Improvements 🚀

* Pagination is not implemented due to time constraints
* Authentication/authorization is not included
* No soft-delete (hard delete only)
* No loading spinners for API calls
* Next improvements:

  * Add pagination & search
  * Add user authentication
  * Add soft-delete with restore
  * Add toast notifications
  * Deploy backend and frontend

---

## Sample Data 📦

```json
[
  {
    "id": 1,
    "title": "Post about AI tools",
    "description": "Short LinkedIn post on productivity tools",
    "status": "Draft"
  },
  {
    "id": 2,
    "title": "Instagram Reel idea",
    "description": "Reel explaining content planning",
    "status": "Scheduled"
  }
]
```

---

## 🎯 Final Notes

This project focuses on clean architecture, responsible AI usage, and production-minded decisions within a strict time limit.

---

If you want, I can also:

* Shorten this README (if they want concise)
* Help you record a **2–3 min demo script**
* Prepare **interview answers based on this README**

Just tell me 👍
