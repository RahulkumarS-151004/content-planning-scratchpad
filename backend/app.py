from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Content

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contents.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()  # Creates the table

@app.route('/')
def home():
    return {"message": "Content Planner API Running"}

@app.route('/contents', methods=['POST'])

def create_content():
    data = request.get_json()
    title = data.get("title")

    if not title:
        return jsonify({"error": "Title is required"}), 400

    content = Content(
        title=title,
        description=data.get("description", "")
    )
    db.session.add(content)
    db.session.commit()

    return jsonify({"message": "Content created"}), 201

@app.route("/contents", methods=["GET"])
def list_ideas():
    contents = Content.query.all()
    result = []

    for i in contents:
        result.append({
            "id": i.id,
            "title": i.title,
            "description": i.description,
            "status": i.status
        })

    return jsonify(result)

@app.route("/contents/<int:id>", methods=["PUT"])
def update_status(id):
    data = request.get_json()
    content = Content.query.get(id)

    if not content:
        return jsonify({"error": "Content not found"}), 404

    if data.get("status") not in ["Draft", "Scheduled", "Published"]:
        return jsonify({"error": "Invalid status"}), 400

    content.status = data["status"]
    db.session.commit()

    return jsonify({"message": "Status updated"})

@app.route("/contents/<int:id>",methods=["DELETE"])
def delete_content(id):
    user = Content.query.get(id)

    if not user:
        return jsonify({"error": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({"message": "User deleted successfully"}), 200





if __name__ == "__main__":
    app.run(debug=True)
