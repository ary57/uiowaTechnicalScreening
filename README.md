# Setup Instruction

## Notes:

- Note: This project was done on a macOS, so commands may be different if on a different OS.

  - I have included equivalent commands for Windows, but haven't tested them myself.

- I recommend installing SQLite3 Editor Extension on VSCode to visualize the database.

- (see below) I have bundled my frontend production build and included them in this repository. So there is no need to install nodejs.
  - However, I have included steps to run the frontend if you'd like to run it separately.

## Pre-work: Installations

### Python

- Make sure you have python installed on your machine.
  - [Download python](https://www.python.org/downloads/)
  - For reference I have python version `3.9.6`

### Node -- Optional

- I have included production build in github repo in `client/dist` and have hosted the frontend from the flask API.
- So there is no need to run the frontend separately.

- Make sure you have node installed.
  - [Download node](https://nodejs.org/en/download)
  - For reference I have node version `22.12.0`

## Running the application

### Server

0. Make sure you have python installed (see above)
1. Navigate to the repository.
1. Inside the server folder create a python virtual environment
   ```bash
   # same for macos and windows
   # the name for the python instance may be different.
   # for me it's python3, you may have py, python ...etc
   # .env is the name for your virtual environment, you can name is anything you'd like
   python3 -m venv .env
   ```
1. Activate the virtual environment

   ```bash
   # macos
   source .env/bin/activate

   # windows
   .env/Scripts/activate
   ```

1. Install python dependencies
   ```bash
   # I have included a requirements.txt in the server folder.
   pip install -r requirements.txt
   ```
1. run the server
   ```bash
   python3 app.py
   ```
1. open a web browser and navigate to `127.0.0.1:5000`

### Client

- Note: this is not mandatory to see the frontend. <br>
  However, if you'd like to run the frontend separately, feel free to continue ahead.

0. Make sure you have node.js installed (see above).
1. Navigate to the repository folder
1. Navigate to client folder
1. Install frontend dependencies
   ```bash
   npm install
   ```
1. start the frontend
   ```bash
   npm run dev
   ```
1. your default web browser should open up `http://localhost:5173/`.
   - If it doesn't, please manually navigate to `http://localhost:5173/` to see the frontend.
