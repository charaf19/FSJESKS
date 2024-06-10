from flask import Flask, request, jsonify
import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import random
from dataset import dataset_arabic,df_french

app = Flask(__name__)


# Download necessary NLTK data files
nltk.download('punkt')
nltk.download('stopwords')

# Define French stopwords
stop_words_french = set(stopwords.words('french'))

# Preprocess the text for French
def preprocess_french(text):
    tokens = word_tokenize(text.lower(), language='french')
    filtered_tokens = [word for word in tokens if word.isalnum() and word not in stop_words_french]
    return filtered_tokens

df_french['processed_question'] = df_french['question'].apply(preprocess_french)

# Tokenizer function for Arabic
def tokenize_arabic(text):
    return nltk.word_tokenize(text)

# Function to find the best matching response in French
def get_response_french(user_input):
    user_input_processed = preprocess_french(user_input)
    max_overlap = 0
    best_response = "Je ne connais pas la réponse à cette question."

    for i, row in df_french.iterrows():
        question_tokens = row['processed_question']
        overlap = len(set(user_input_processed) & set(question_tokens))
        if overlap > max_overlap:
            max_overlap = overlap
            best_response = row['answer']
    
    return best_response

# Function to find the best matching response in Arabic
def get_response_arabic(user_input):
    tokens = tokenize_arabic(user_input)
    for question, answer in dataset_arabic.items():
        if all(word in question for word in tokens):
            return answer
    return "عذراً، لم أفهم سؤالك."

# Function to fetch multiple random questions
def get_random_questions(language, num_questions=5):
    if language == 'français':
        questions = random.sample(df_french['question'].tolist(), num_questions)
    else:
        questions = random.sample(list(dataset_arabic.keys()), num_questions)
    return questions

# Define a route for handling chat requests
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_input = data['message']
    language = data['language']
    
    if language == 'français':
        response = get_response_french(user_input)
    else:
        response = get_response_arabic(user_input)
    
    return jsonify({'response': response})

# Define a route for fetching random questions
@app.route('/random_questions', methods=['GET'])
def random_questions():
    language = request.args.get('lang')
    questions = get_random_questions(language)
    return jsonify({'questions': questions})

if __name__ == '__main__':
    app.run(debug=True)