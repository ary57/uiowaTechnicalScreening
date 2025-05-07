import logging
import os
from datetime import datetime

def get_logger(logger_name: str = __name__) -> logging.Logger:
    """
    Creates or returns a logger with both file and console handlers.
    
    Args:
        logger_name (str): Name of the logger (defaults to module name)
        
    Returns:
        logging.Logger: Configured logger instance
    """
    # Get or create logger
    logger = logging.getLogger(logger_name)
    
    # Only add handlers if the logger doesn't have any
    if not logger.handlers:
        logger.setLevel(logging.INFO)
        # info, warning, errors
        
        # Create logs directory if it doesn't exist
        log_dir = "logs"
        os.makedirs(log_dir, exist_ok=True)
        
        # Create log filename with current date
        current_date = datetime.now().strftime("%m_%d_%Y")
        log_file = os.path.join(log_dir, f"log_{current_date}.log")
        
        # File handler
        file_handler = logging.FileHandler(log_file)
        file_handler.setLevel(logging.INFO)
        file_formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        file_handler.setFormatter(file_formatter)
        
        # Console handler
        console_handler = logging.StreamHandler()
        console_handler.setLevel(logging.INFO)
        console_formatter = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
        console_handler.setFormatter(console_formatter)
        
        # Add handlers to logger
        logger.addHandler(file_handler)
        logger.addHandler(console_handler)
    
    return logger