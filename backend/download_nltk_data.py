# download_nltk_data.py
import nltk

print("Downloading NLTK data...")
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('averaged_perceptron_tagger')
nltk.download('brown')
print("NLTK data downloaded successfully!")