import sqlite3
import logger

# Logger setup
logger = logger.get_logger(__name__)

database_path = 'database.db'

def init_db() -> None:
    try:
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
    except Exception as e:
        logger.error(f"Error initializing database: {e}")
        raise

def insert_into_db(hawkID: str, date: str, amount: float, receipt: bytes, description: str = "") -> None:
    try:
        logger.info(f"Inserting into database: {hawkID}, {date}, {amount}, {description}")
        with sqlite3.connect(database_path) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO reimbursements (hawkID, date, amount, receipt, description)
                VALUES (?, ?, ?, ?, ?)
            ''', (hawkID, date, amount, receipt, description))
            conn.commit()
            logger.info("Insert successful.")
    except Exception as e:
        logger.error(f"Error inserting into database: {e}")
        raise