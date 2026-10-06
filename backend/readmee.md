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


# Windows Optimised
no .venv follow this
```
PowerShell Terminal
```
python -m venv .venv
.\.venv\Scripts\Activate
pip install -r requirements.txt
```
if you already have a venv folder turn it on
```
.\.venv\Scripts\Activate
```
Check command line for (.venv) at start
```
To deactivate .venv
```
deactivate
```

# Common Errors
(1) python command not found- python wasn't added to system PATH during installation
```
Try
```
Re-run python installer and check "Add python.exe to PATH"
Verify installation
```
python --version 
```
Or
```
In Powershell Terminal
```
py -m venv .venv
```
(2) Script Execution Error
```
Temporary Fix for current session
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process