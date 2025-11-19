"""
STEP 3: FEATURE EXTRACTION (FIXED)
Purpose: Convert text to numerical features with proper handling
"""

import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
import joblib

print("="*80)
print("STEP 3: FEATURE EXTRACTION")
print("="*80)

# Load preprocessed data
print("\n1. Loading preprocessed data...")
df = pd.read_csv('Resume_Preprocessed.csv')
print(f"✅ Loaded {len(df)} records")
print(f"✅ {df['Category'].nunique()} categories")

# Check category distribution
cat_counts = df['Category'].value_counts()
print(f"\n   Category distribution:")
print(f"   - Min samples per category: {cat_counts.min()}")
print(f"   - Max samples per category: {cat_counts.max()}")
print(f"   - Categories with only 1 sample: {(cat_counts == 1).sum()}")

# Remove categories with only 1 sample (can't stratify)
if (cat_counts == 1).sum() > 0:
    print(f"\n⚠️  Removing {(cat_counts == 1).sum()} categories with only 1 sample...")
    valid_categories = cat_counts[cat_counts >= 2].index
    df = df[df['Category'].isin(valid_categories)]
    print(f"✅ {len(df)} records across {df['Category'].nunique()} categories")

# Prepare X and y
print("\n2. Preparing features and labels...")
X = df['Resume'].values
y = df['Category'].values
print(f"✅ X shape: {X.shape}")
print(f"✅ y shape: {y.shape}")
print(f"✅ Unique classes: {len(np.unique(y))}")

# Adjust TF-IDF parameters based on dataset size
n_samples = len(X)
max_features = min(3000, n_samples)  # Don't exceed number of samples

print("\n3. Creating TF-IDF vectorizer...")
print("   Parameters (auto-adjusted for dataset size):")
print(f"      - max_features: {max_features}")
print(f"      - min_df: 2 (word must appear in at least 2 documents)")
print(f"      - max_df: 0.8 (word can't appear in more than 80% of documents)")
print(f"      - ngram_range: (1, 2) (unigrams and bigrams)")

vectorizer = TfidfVectorizer(
    max_features=max_features,
    min_df=2,
    max_df=0.8,
    ngram_range=(1, 2),
    stop_words='english',
    sublinear_tf=True  # Use log scaling
)

# Fit and transform
print("\n4. Extracting TF-IDF features...")
print("   This may take 1-3 minutes...")
X_tfidf = vectorizer.fit_transform(X)
print(f"✅ TF-IDF shape: {X_tfidf.shape}")
print(f"   {X_tfidf.shape[0]} resumes")
print(f"   {X_tfidf.shape[1]} features")

# Show top features (skip numbers)
print("\n5. Top 30 meaningful features:")
feature_names = vectorizer.get_feature_names_out()
# Filter out pure numbers and very short tokens
meaningful_features = [f for f in feature_names if not f.isdigit() and len(f) > 2][:30]
for i, feature in enumerate(meaningful_features, 1):
    print(f"   {i:2d}. {feature}")

# Determine stratification strategy
cat_counts = pd.Series(y).value_counts()
can_stratify = (cat_counts >= 2).all()

# Train-test split
print("\n6. Splitting data into train and test sets...")
print(f"   Strategy: {'Stratified' if can_stratify else 'Random'} split")

try:
    if can_stratify:
        X_train, X_test, y_train, y_test = train_test_split(
            X_tfidf, y, 
            test_size=0.2, 
            random_state=42,
            stratify=y
        )
    else:
        # Random split if stratification fails
        X_train, X_test, y_train, y_test = train_test_split(
            X_tfidf, y, 
            test_size=0.2, 
            random_state=42
        )
except ValueError as e:
    print(f"   ⚠️  Stratification failed, using random split")
    X_train, X_test, y_train, y_test = train_test_split(
        X_tfidf, y, 
        test_size=0.2, 
        random_state=42
    )

print(f"✅ Train set: {X_train.shape[0]} samples")
print(f"✅ Test set:  {X_test.shape[0]} samples")

# Verify split
train_cats = len(np.unique(y_train))
test_cats = len(np.unique(y_test))
print(f"\n   Categories in train: {train_cats}")
print(f"   Categories in test:  {test_cats}")

# Save everything
print("\n7. Saving feature extraction artifacts...")

# Save vectorizer
joblib.dump(vectorizer, 'tfidf_vectorizer.pkl')
print("✅ Saved: tfidf_vectorizer.pkl")

# Save splits
joblib.dump(X_train, 'X_train.pkl')
joblib.dump(X_test, 'X_test.pkl')
joblib.dump(y_train, 'y_train.pkl')
joblib.dump(y_test, 'y_test.pkl')
print("✅ Saved: X_train.pkl, X_test.pkl, y_train.pkl, y_test.pkl")

# Save feature names
with open('feature_names.txt', 'w') as f:
    for feature in feature_names:
        f.write(feature + '\n')
print("✅ Saved: feature_names.txt")

# Summary
print("\n" + "="*80)
print("FEATURE EXTRACTION SUMMARY")
print("="*80)
print(f"Total samples:        {len(df)}")
print(f"Feature dimension:    {X_tfidf.shape[1]}")
print(f"Train samples:        {X_train.shape[0]}")
print(f"Test samples:         {X_test.shape[0]}")
print(f"Number of classes:    {len(np.unique(y))}")
print(f"Sparsity:             {(1 - X_tfidf.nnz / (X_tfidf.shape[0] * X_tfidf.shape[1])) * 100:.2f}%")

print("\n📊 Class distribution in train set:")
train_dist = pd.Series(y_train).value_counts()
print(f"   Total classes: {len(train_dist)}")
print(f"   Largest class: {train_dist.max()} samples")
print(f"   Smallest class: {train_dist.min()} samples")

print(f"\n   Top 15 classes:")
for i, (cat, count) in enumerate(train_dist.head(15).items(), 1):
    pct = (count/len(y_train))*100
    print(f"   {i:2d}. {cat[:35]:<35} {count:4d} ({pct:5.2f}%)")

print("\n" + "="*80)
print("✅ FEATURE EXTRACTION COMPLETE!")
print("="*80)
print("\n🔜 Next: Run step4_train_model.py")
print("="*80)