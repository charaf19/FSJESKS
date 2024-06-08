import streamlit as st
import requests
st.markdown(f"""
<div style="text-align: center">
  <img src="logo.png" alt="Your Company Logo" style="width: 200px; height: auto;">
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

# Function to handle sending messages and updating chat history
def send_message(prompt):
    # Display user message in chat message container
    st.chat_message("user").markdown(prompt)
    # Add user message to chat history
    st.session_state.messages.append({"role": "user", "content": prompt})

    # Call Flask app to get response
    response = requests.post('http://localhost:5000/chat', json={"message": prompt, "language": language}).json()["response"]

    # Display assistant response in chat message container
    with st.chat_message("assistant"):
        st.markdown(response)
    # Add assistant response to chat history
    st.session_state.messages.append({"role": "assistant", "content": response})

# Display random questions as clickable buttons
for question in random_questions:
    if st.sidebar.button(question):
        send_message(question)

# React to user input
if prompt := st.chat_input("Posez votre question / اطرح سؤالك"):
    send_message(prompt)
