import os
from flask import Flask, jsonify
from dotenv import load_dotenv
import json
import requests
import numpy as np

load_dotenv()
app = Flask(__name__)

@app.route('/', methods=['GET'])
def test():
    return 'hello world!'

@app.route('/predict', methods=['POST'])
def predict():
    # TODO: update the model to take in numpy arrays
    stats = np.array([90, 92, 84, 91, 40, 76, 3])
    stats = stats.reshape(1, 7)
    list_stats = stats.tolist()
    print(list_stats)
    print(np.array(list_stats))
    payload = {
        "instances": [
            {
                "stats": list_stats
            }
        ]
    }
    
    api_url = os.getenv("API_URL")
    model_path = api_url + "/v1/models/fut:predict"
    print(model_path)
    r = requests.post(model_path, json=payload)
    print(r.status_code)
    print(r.json())
    print(r.content)
    # response = json.loads(r.content)
    # print(response)
    return api_url 