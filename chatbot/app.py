import streamlit as st
import requests
import time

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

# Function to fetch random questions from the API
def fetch_random_questions(language):
    if language == 'français':
        response = requests.get('http://localhost:5000/random_questions?lang=fr').json()
    else:
        response = requests.get('http://localhost:5000/random_questions?lang=ar').json()
    return response["questions"]

# Sidebar for random questions
st.sidebar.title("Suggestions de questions / اقتراحات الأسئلة")
random_questions = fetch_random_questions(language)

# Function to simulate typing animation
def simulate_typing(text, delay=0.05):
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

    # Call Flask app to get response
    response = requests.post('http://localhost:5000/chat', json={"message": prompt, "language": language}).json()["response"]

    # Simulate typing animation for assistant response
    with st.chat_message("assistant"):
        response_text = simulate_typing(response)
    
    # Add assistant response to chat history
    st.session_state.messages.append({"role": "assistant", "content": response_text})

# Display random questions as clickable buttons
for question in random_questions:
    if st.sidebar.button(question):
        send_message(question)

# React to user input
if prompt := st.chat_input("Posez votre question / اطرح سؤالك"):
    send_message(prompt)
