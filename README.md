# Web application to predict player ratings in the EA Sports FIFA 19 game

## Frontend 
Created using Angular 7 following the MVC design principle

## Backend 
Uses Flask to create API endpoints and Keras to create a regression neural network based on the 6 high-level attributes of a player:
- Pace: how fast a player is
- Shot: how good a player is at shooting
- Pass: how good a player is at passing
- Dribble: how good a player is at dribbling
- Defense: how good a player is at defending
- Physical: how aggresive, strong, etc a player is

The neural network is hosted using TensorFlow Serving


## Development
1) Run ```npm i``` in the ```client``` directory to install all packages required for the frontend
2) In the ```server``` directory, install ```venv```. Then, run ```python3 -m venv fut-env ```. This creates a virtual environment that will be used to install packages local to this project.
3) After running the above, run ```source fut-env/bin/activate```. This activates the virtual environment. Next, run ```make install```. This installs all the packages needed by the server
4) Start the jupyter server by running ```jupyter notebook```. Open up the ```fut``` notebook and run all cells. This will fetch the data from the EA Sports FIFA endpoint, preprocess each JSON object, create the regression model, trains/evaluates it, and exports the trained model in HDF5 format.
5) Run ```make export```. This converts the HDF5 model into a TensorFlow model graph, which can be used for serving.