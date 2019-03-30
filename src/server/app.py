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
    error, stats = sanitize(data)
    if error:
        return json.dumps({"error": error})

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
    if prediction > 99:
        prediction = 99
    return json.dumps({"error": None, "prediction": prediction})


def sanitize(json):
    for stat, rating in json.items():
        if stat != 'Position':
            try:
                rating = int(rating)
                if rating < 0 or rating > 99:
                    return ("Error: " + stat + " needs to be a number between 0 and 99", None)
            except ValueError:
                return ("Error: " + stat + " needs to be an integer", None)
    
    if not json["Position"]:
        return ("Error: Please choose a position for the player", None)

    position = json["Position"]
    position_num = None
    if position == "ST" or position == "CF":
        position_num = 1
    elif position == "LW" or position == "LF" or position == "LM":
        position_num = 2
    elif position == "RW" or position == "RF" or position == "RM":
        position_num = 3
    elif position == "CM" or position == "CAM":
        position_num = 4
    elif position == "CDM":
        position_num = 5
    elif position == "CB":
        position_num = 6
    elif position == "LB" or position == "LWB" or position == "RB" or position == "RWB":
        position_num = 7

    stats = [int(json["Pace"]), int(json["Shot"]), int(json["Pass"]), int(json["Dribble"]), int(json["Defense"]), int(json["Physical"]), position_num]
    return (None, stats)
