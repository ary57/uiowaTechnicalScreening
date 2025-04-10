
from flask import Flask, Response, request, send_from_directory
from flask_cors import CORS
from werkzeug.datastructures import FileStorage
from datetime import datetime
import db
import uuid
import os

# Constants - Ensure receipts folder exists
RECEIPT_DIR = "receipts"
FRONTEND_BUILD_DIR = os.path.join(os.path.dirname(__file__), "../client/dist")

app = Flask(__name__, static_folder=FRONTEND_BUILD_DIR, static_url_path="")
CORS(app)

# Initialize the database if it doesn't exist
db.init_db()


@app.route('/')
def serve_react():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/api/submitReimbursement", methods=['POST'])
def submit_reimbursement():
    try:

        hawkID_init = request.form.get('hawkID')
        date_init = request.form.get('date')
        amount_init = request.form.get('amount')
        receipt_init = request.files.get('receipt')
        description_init = request.form.get('description')

        hawkID, date, amount, receipt, description = parse_inputs(
            hawkID_init, date_init, amount_init, receipt_init, description_init
        )
        # Save the receipt to local storage
        save_receipt(hawkID, date_init, amount_init, receipt)
        
        # Insert into the database
        db.insert_into_db(
            hawkID=hawkID,
            date=date,
            amount=amount,
            receipt=receipt.read(),
            description=description
        )

        return Response(status=200, mimetype="application/json")
    except Exception as err:
        print(f"Error: {err}")
        return Response(status=500, mimetype="application/json")
    
def save_receipt(hawkID:str,date:str, amount:str, receipt: FileStorage) -> None:
    """
    Saves the receipt to a file and returns the file path.
    """
    if receipt:
        filename = f"{hawkID}_{date}_{amount}_{uuid.uuid4()}.{receipt.filename.split('.')[-1]}"
        filepath = f"{RECEIPT_DIR}/{filename}"
        receipt.save(filepath)

# Helper function to parse inputs to correct types
def parse_inputs(
        hawkID:str, 
        date:str, 
        amount:str, 
        receipt:FileStorage, 
        description:str) -> tuple[str, datetime.date, float, FileStorage, str]:
    """
    Takes input parameters and converts them to appropriate types.
    Returns tuple of converted values or raises ValueError if conversion fails.
    """
    try:
        hawkID = str(hawkID)
        date = datetime.strptime(date, '%Y-%m-%d').date()
        amount = float(amount)
        receipt = receipt
        description = str(description)

        return hawkID, date, amount, receipt, description
    except ValueError as e:
        raise ValueError(f"Error parsing inputs: {e}")

if __name__ == "__main__":
    app.run(debug=True, port=5000)