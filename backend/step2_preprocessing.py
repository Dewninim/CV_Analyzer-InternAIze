"""
STEP 2: DATA PREPROCESSING (MAXIMUM RETENTION)
Purpose: Keep 500+ records by minimal filtering
"""

import pandas as pd
import re
import nltk

print("Downloading NLTK data...")
try:
    nltk.download('stopwords', quiet=True)
    nltk.download('punkt', quiet=True)
    nltk.download('wordnet', quiet=True)
    print("✅ NLTK data ready")
except:
    print("⚠️  NLTK download issue - continuing anyway")

from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

print("="*80)
print("STEP 2: DATA PREPROCESSING (MAXIMUM RETENTION VERSION)")
print("="*80)

# Initialize tools
stop_words = set(stopwords.words('english'))
lemmatizer = WordNetLemmatizer()

# Keep ALL technical terms
technical_terms = {
    'python', 'java', 'javascript', 'typescript', 'c', 'cpp', 'csharp', 'r', 'go', 'ruby', 'php', 'swift', 'kotlin',
    'sql', 'nosql', 'mongodb', 'mysql', 'postgresql', 'oracle', 'redis', 'elasticsearch',
    'data', 'machine', 'learning', 'ai', 'deep', 'neural', 'model', 'algorithm',
    'web', 'mobile', 'android', 'ios', 'frontend', 'backend', 'fullstack', 'devops',
    'cloud', 'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform', 'ansible',
    'react', 'angular', 'vue', 'node', 'express', 'django', 'flask', 'spring', 'boot',
    'git', 'github', 'jenkins', 'ci', 'cd', 'agile', 'scrum',
    'system', 'network', 'security', 'database', 'api', 'rest', 'graphql',
    'test', 'testing', 'qa', 'design', 'ux', 'ui', 'html', 'css'
}
stop_words = stop_words - technical_terms

def clean_text(text):
    """Minimal cleaning - preserve ALL useful information"""
    if pd.isna(text):
        return ""
    
    text = str(text)
    text = text.lower()
    
    # Remove only URLs and emails
    text = re.sub(r'http\S+|www\.\S+', '', text)
    text = re.sub(r'\S+@\S+', '', text)
    
    # Keep alphanumeric (preserve everything else)
    text = re.sub(r'[^a-z0-9\s]', ' ', text)
    
    # Remove extra spaces
    text = ' '.join(text.split())
    
    # MINIMAL stopword removal - keep most words
    words = text.split()
    # Only remove very common stopwords, keep everything else
    very_common = {'the', 'a', 'an', 'and', 'or', 'but', 'is', 'was', 'are', 'were', 'be', 'been'}
    words = [w for w in words if w not in very_common or w in technical_terms]
    
    # Quick lemmatization
    words = [lemmatizer.lemmatize(w) for w in words]
    
    return ' '.join(words)

# Load data
print("\n1. Loading data...")
df = pd.read_csv('Resume.csv')
original_count = len(df)
print(f"✅ Loaded {original_count} records")
print(f"   Columns: {df.columns.tolist()}")

# Auto-detect column names
print("\n2. Detecting columns...")
category_col = None
resume_col = None

for col in df.columns:
    col_lower = col.lower().strip()
    if 'category' in col_lower or 'class' in col_lower or 'label' in col_lower:
        category_col = col
    if 'resume' in col_lower or 'text' in col_lower or 'content' in col_lower:
        resume_col = col

if category_col and resume_col:
    df = df[[category_col, resume_col]].copy()
    df.columns = ['Category', 'Resume']
    print(f"✅ Detected: Category='{category_col}', Resume='{resume_col}'")
else:
    print("⚠️  Could not auto-detect columns, using first 2 columns")
    df.columns = ['Category', 'Resume']

# Remove ONLY completely missing values
print("\n3. Removing NULL values...")
before = len(df)
df = df.dropna(subset=['Category', 'Resume'])
print(f"✅ Removed {before - len(df)} NULL records")
print(f"✅ {len(df)} records remaining")

# NO duplicate removal - keep all resumes even if they look similar
print("\n4. Keeping all resumes (NO duplicate removal)...")
print(f"✅ Keeping all {len(df)} records")

# Clean categories
print("\n5. Processing categories...")
df['Category'] = df['Category'].astype(str).str.strip()

# Show initial distribution
cat_counts = df['Category'].value_counts()
print(f"\n   Initial category distribution:")
print(f"   - Total categories: {len(cat_counts)}")
print(f"   - Total records: {len(df)}")

# Keep ALL categories with at least 2 samples
print("\n6. Filtering categories...")
valid_categories = cat_counts[cat_counts >= 2].index
df = df[df['Category'].isin(valid_categories)]
removed_cats = len(cat_counts) - len(valid_categories)
print(f"✅ Removed {removed_cats} categories with only 1 sample")
print(f"✅ Kept {len(valid_categories)} categories")
print(f"✅ {len(df)} records remaining ({(len(df)/original_count*100):.1f}% of original)")

# Show top categories
cat_counts = df['Category'].value_counts()
print(f"\n   Top 10 categories:")
for i, (cat, count) in enumerate(cat_counts.head(10).items(), 1):
    pct = (count/len(df))*100
    print(f"   {i:2d}. {cat[:35]:<35} {count:4d} ({pct:5.2f}%)")

# MINIMAL length filtering - keep almost everything
print("\n7. Minimal length filtering...")
df['original_length'] = df['Resume'].str.len()
before = len(df)
df = df[df['original_length'] > 5]  # Only remove completely empty
print(f"✅ Removed {before - len(df)} completely empty resumes")
print(f"✅ {len(df)} records remaining")

# Clean text
print("\n8. Cleaning resume text...")
print("   Processing...")

total = len(df)
cleaned_resumes = []

for idx, resume in enumerate(df['Resume']):
    if (idx + 1) % 100 == 0:
        print(f"   Progress: {idx + 1}/{total} ({((idx+1)/total*100):.0f}%)")
    
    cleaned = clean_text(resume)
    cleaned_resumes.append(cleaned)

df['Resume_Clean'] = cleaned_resumes
print(f"✅ Cleaned {len(df)} resumes")

# MINIMAL post-cleaning filter - only remove completely empty
print("\n9. Final quality check...")
df['clean_length'] = df['Resume_Clean'].str.len()
df['word_count'] = df['Resume_Clean'].str.split().str.len()

before = len(df)
df = df[(df['clean_length'] > 5) & (df['word_count'] > 2)]  # Very minimal threshold
print(f"✅ Removed {before - len(df)} resumes that became empty")
print(f"✅ {len(df)} final records")

# Final category check
cat_counts = df['Category'].value_counts()
valid_categories = cat_counts[cat_counts >= 2].index
df = df[df['Category'].isin(valid_categories)]
print(f"✅ Final: {len(df)} records across {len(valid_categories)} categories")

# Select columns
df_final = df[['Category', 'Resume_Clean']].copy()
df_final.columns = ['Category', 'Resume']

# Save
print("\n10. Saving preprocessed data...")
df_final.to_csv('Resume_Preprocessed.csv', index=False)
print("✅ Saved: Resume_Preprocessed.csv")

# Detailed statistics
print("\n" + "="*80)
print("PREPROCESSING COMPLETE - DETAILED REPORT")
print("="*80)

retention_rate = (len(df_final)/original_count*100)
print(f"\n📊 Data Retention:")
print(f"   Original records:     {original_count}")
print(f"   Final records:        {len(df_final)}")
print(f"   Retention rate:       {retention_rate:.1f}%")
print(f"   Records removed:      {original_count - len(df_final)}")

if len(df_final) >= 500:
    print(f"\n   ✅ SUCCESS! Got {len(df_final)} records (target: 500+)")
else:
    print(f"\n   ⚠️  Only {len(df_final)} records (target: 500+)")

cat_counts = df_final['Category'].value_counts()
print(f"\n📁 Categories:")
print(f"   Total categories:     {len(cat_counts)}")
print(f"   Largest class:        {cat_counts.max()} samples")
print(f"   Smallest class:       {cat_counts.min()} samples")
print(f"   Average per class:    {cat_counts.mean():.1f} samples")
print(f"   Median per class:     {cat_counts.median():.0f} samples")

print(f"\n📝 Resume Statistics:")
avg_length = df_final['Resume'].str.len().mean()
avg_words = df_final['Resume'].str.split().str.len().mean()
print(f"   Avg character length: {avg_length:.0f}")
print(f"   Avg word count:       {avg_words:.0f}")

print(f"\n🏆 All Categories (showing all {len(cat_counts)}):")
for i, (cat, count) in enumerate(cat_counts.items(), 1):
    pct = (count/len(df_final))*100
    bar = "█" * max(1, int(pct/2))
    print(f"   {i:2d}. {cat[:35]:<35} {count:4d} ({pct:5.2f}%) {bar}")

# Save report
with open('preprocessing_report.txt', 'w') as f:
    f.write("PREPROCESSING DETAILED REPORT\n")
    f.write("="*80 + "\n\n")
    f.write(f"Original records:        {original_count}\n")
    f.write(f"Final records:           {len(df_final)}\n")
    f.write(f"Retention rate:          {retention_rate:.1f}%\n")
    f.write(f"Total categories:        {len(cat_counts)}\n\n")
    f.write("Full Category Distribution:\n")
    f.write("-"*80 + "\n")
    for i, (cat, count) in enumerate(cat_counts.items(), 1):
        f.write(f"{i:3d}. {cat:<45} {count:>5d} samples\n")

print("\n✅ Saved: preprocessing_report.txt")

print("\n" + "="*80)
if len(df_final) >= 500:
    print("🎉 SUCCESS! Ready for training with good data volume!")
elif len(df_final) >= 300:
    print("✅ ACCEPTABLE! Can proceed with training (consider getting more data)")
else:
    print("⚠️  WARNING: Low data volume - results may not be optimal")
    print("   Consider: getting more data or reducing categories")

print("\n🔜 Next: Run step3_feature_extraction_FIXED.py")
print("="*80)