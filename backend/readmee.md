# Command line
1. top left menu open terminal
2. Use Bash terminal (click the down arrow next to the plus sign)
3. Find your directory 
4. navigate to Movie_picker/backend (cd folder_name)
5. start process below

# first load
if no .venv follow this (this currently mac optimised)
```
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```
if you have venv folder to turn on virtual env
```
source .venv/bin/activate
```
Is the venv on? check you command line and find (.venv)

laslty to deactivate
```
deactivate
```

# Test
to test if flask is working do below:
```
flask --app hello run
```
open http://127.0.0.1:5000
if you see hello world your set up is successful
