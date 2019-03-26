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
    payload = {
        "instances": [
            {
                "stats": [90, 92, 84, 91, 40, 76]
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