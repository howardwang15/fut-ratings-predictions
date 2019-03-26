
SHELL := /bin/bash

REQUIREMENTS=requirements.txt


install: $(REQUIREMENTS)
	pip3 install -r $(REQUIREMENTS)

export:
	python3 model/export_model.py

serve:
	tensorflow_model_server --model_base_path=/mnt/c/workspace/fut-players/src/server/model --rest_api_port=9000 --model_name=fut

env: set_environment.sh
	source set_environment.sh

run: env
	flask run
