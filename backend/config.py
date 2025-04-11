from dotenv import load_dotenv
import os

load_dotenv()

# News API configuration
NEWS_API_KEY = os.getenv("NEWS_API_KEY")

# Stock data configuration
STOCK_DATA_PROVIDER = "yfinance"  # Using Yahoo Finance for stock data

# Analysis configuration
MAX_NEWS_ARTICLES = 5  # Number of news articles to analyze
TIME_WINDOW_DAYS = 7   # Days to look back for news and stock data

# API configuration
API_PREFIX = "/api/v1"
HOST = "0.0.0.0"
PORT = 8000 