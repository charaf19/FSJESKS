#!/bin/bash

# Start Flask API
echo "Starting Flask API..."
python chat_app.py &

# Start Streamlit app
echo "Starting Streamlit app..."

streamlit run app.py
