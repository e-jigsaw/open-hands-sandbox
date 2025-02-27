from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    numbers = list(range(1, 11))
    return jsonify(numbers)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=52358)