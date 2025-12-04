from flask import Flask, render_template, request, jsonify
import json
from openai import OpenAI
from flask_cors import CORS
import os
from dotenv import load_dotenv
load_dotenv()


from flask import Flask, render_template

app = Flask(__name__, template_folder="templates", static_folder="static")

CORS(app)  # Allow cross-origin requests from frontend

# Load predefined responses
with open("responses.json", "r") as f:
    predefined_responses = json.load(f)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get", methods=["POST"])
def get_bot_response():
    user_text = request.json.get("message", "").lower()

    # Check predefined responses first
    if user_text in predefined_responses:
        reply = predefined_responses[user_text]
    else:
        try:
            completion = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": user_text}]
            )
            reply = completion.choices[0].message.content
        except Exception as e:
            reply = f"⚠ Error with AI: {e}"

    return jsonify({"reply": reply})

@app.route("/reset", methods=["POST"])
def reset():
    # This just sends a system message back
    return jsonify({"msg": "Conversation reset. Say hi to start again!"})

if __name__ == "__main__":
    app.run(debug=True, port=5001)

