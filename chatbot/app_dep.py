import streamlit as st
import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import random
import time

# Load French dataset
df_french = pd.read_csv('qa_data.csv')
df_french['question'] = df_french['question'].str.strip('"')
df_french['answer'] = df_french['answer'].str.strip('"')

# Load Arabic dataset
from dataset import dataset_arabic

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

# Custom CSS to align Arabic text to the right
st.markdown("""
<style>
.arabic-text {
    direction: rtl;
    text-align: right;
}
</style>
""", unsafe_allow_html=True)

st.markdown(f"""
<div style="display: flex; justify-content: center;">
  <img src="https://raw.githubusercontent.com/charaf19/FSJESKS/main/logo.png" alt="FSJES KS" style="width: 200px; height: auto;">
</div>
""", unsafe_allow_html=True)
st.title("FSJES KS")

# Language selection
language = st.selectbox('Choisissez la langue / اختر اللغة', ['français', 'العربية'])

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display chat messages from history on app rerun
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        if language == 'العربية' and message["role"] == "user":
            st.markdown(f"<div class='arabic-text'>{message['content']}</div>", unsafe_allow_html=True)
        else:
            st.markdown(message["content"])

# Function to simulate typing animation
def simulate_typing(text, delay=0.01):
    typing_placeholder = st.empty()
    typed_text = ""
    for char in text:
        typed_text += char
        typing_placeholder.markdown(typed_text)
        time.sleep(delay)
    return typed_text

# Function to handle sending messages and updating chat history
def send_message(prompt):
    # Display user message in chat message container
    if language == 'العربية':
        st.chat_message("user").markdown(f"<div class='arabic-text'>{prompt}</div>", unsafe_allow_html=True)
    else:
        st.chat_message("user").markdown(prompt)

    # Add user message to chat history
    st.session_state.messages.append({"role": "user", "content": prompt})

    # Get response based on language
    if language == 'français':
        response = get_response_french(prompt)
    else:
        response = get_response_arabic(prompt)

    # Simulate typing animation for assistant response
    with st.chat_message("assistant"):
        response_text = simulate_typing(response)
    
    # Add assistant response to chat history
    st.session_state.messages.append({"role": "assistant", "content": response_text})

# Sidebar for random questions
st.sidebar.title("Suggestions de questions / اقتراحات الأسئلة")
random_questions = get_random_questions(language)

# Display random questions as clickable buttons
for question in random_questions:
    if st.sidebar.button(question):
        send_message(question)

# React to user input
if prompt := st.chat_input("Posez votre question / اطرح سؤالك"):
    send_message(prompt)
