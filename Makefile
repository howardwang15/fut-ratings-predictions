
REQUIREMENTS=requirements.txt
APP=app.py


install: $(REQUIREMENTS)
	pip3 install -r $(REQUIREMENTS)

serve:
	tensorflow_model_server --model_base_path=/mnt/c/workspace/fut-players/src --rest_api_port=9000 model_name=fut

env: set_environment.sh
	./set_environment.sh

run: env
	flask run
