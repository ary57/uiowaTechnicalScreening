
from flask import Flask, Response, request
from flask_cors import CORS
from werkzeug.datastructures import FileStorage
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route("/api/submitReimbursement", methods=['POST'])
def submit_reimbursement():
    try:
        
        print("Received reimbursement request")

        hawkID = request.form.get('hawkID')
        date = request.form.get('date')
        amount = request.form.get('amount')
        receipt = request.files.get('receipt')
        description = request.form.get('description')
        
        print(f"hawkID: {hawkID}, type: {type(hawkID)}")
        print(f"date: {date}, type: {type(date)}")
        print(f"amount: {amount}, type: {type(amount)}")
        print(f"receipt: {receipt}, type: {type(receipt)}")
        print(f"description: {description}, type: {type(description)}")

        hawkId, date, amount, receipt, description = parse_inputs(
            hawkID, date, amount, receipt, description
        )
        print(f"Parsed inputs: {hawkId}, {date}, {amount}, {receipt}, {description}")

        return Response(status=200, mimetype="application/json")
    except Exception:
        return Response(status=500, mimetype="application/json")
    


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