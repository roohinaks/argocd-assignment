from flask import Flask, jsonify, request
from business import get_data

app=Flask(__name__)

@app.route('/')
def hello():
    return "Hello from kubernetes"

@app.route('/api', methods=['GET'])
def api():
    data=get_data()
    data={
        'data': data
    }

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=8000, host='0.0.0.0')
