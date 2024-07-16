from flask import Flask, send_from_directory
from flask_ngrok import run_with_ngrok

app = Flask(__name__)
run_with_ngrok(app)  # Start ngrok when app is run

@app.route("/")
def home():
    return send_from_directory('.', 'index.html')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')