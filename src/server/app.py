import os
from flask import Flask, jsonify
from dotenv import load_dotenv
import requests
import json
import numpy as np

load_dotenv()
app = Flask(__name__)

@app.route('/', methods=['GET'])
def test():
    return 'hello world!'

@app.route('/predict', methods=['POST'])
def predict():
    stats = [90, 98, 84, 91, 40, 76, 2]
    payload = {
        "instances": [
            {
                "stats": stats
            }
        ]
    }
    
    api_url = os.getenv("API_URL")
    model_path = api_url + "/v1/models/fut:predict"
    response = requests.post(model_path, json=payload)
    res = response.json()
    prediction = round(res['predictions'][0][0])
    return json.dumps(prediction)