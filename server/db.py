import sqlite3

database_path = 'database.db'

def init_db() -> None:
    with sqlite3.connect(database_path) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS reimbursements (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                hawkID TEXT NOT NULL,
                date TEXT NOT NULL,
                amount REAL NOT NULL,
                receipt BLOB NOT NULL,
                description TEXT
            )
        ''')
        conn.commit()

def insert_into_db(hawkID: str, date: str, amount: float, receipt: bytes, description: str = "") -> None:
    with sqlite3.connect(database_path) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO reimbursements (hawkID, date, amount, receipt, description)
            VALUES (?, ?, ?, ?, ?)
        ''', (hawkID, date, amount, receipt, description))
        conn.commit()






if __name__ == "__main__":
    init_db()
    print("Database initialized.")