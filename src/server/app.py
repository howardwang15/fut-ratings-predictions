import os
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import requests
import json
import numpy as np
import pprint

load_dotenv()
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
pp = pprint.PrettyPrinter(indent=2)

@app.route('/', methods=['GET'])
@cross_origin()
def test():
    return json.dumps("hello world")

@app.route('/predict', methods=['POST'])
def predict():
    '''
    ATTACKER = 1
    LEFT_WING = 2
    RIGHT_WING = 3
    CENTER_MID = 4
    DEFENSIVE_MID = 5
    CENTER_BACK = 6
    FULL_BACK = 7
    KEEPER = 8
    '''

    data = request.get_json()
    stats = [int(data["pace"]), int(data["shot"]), int(data["pass"]), int(data["dribble"]), int(data["defense"]), int(data["physical"])]
    stats.append(1)
    print(stats)
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