
REQUIREMENTS=requirements.txt
APP=app.py


install: $(REQUIREMENTS)
	pip3 install -r $(REQUIREMENTS)

serve:
	flask run --host=0.0.0.0
