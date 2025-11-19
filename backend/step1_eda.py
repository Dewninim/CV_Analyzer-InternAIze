"""
STEP 1: EXPLORATORY DATA ANALYSIS (EDA)
Purpose: Understand your data before processing
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
warnings.filterwarnings('ignore')

print("="*80)
print("STEP 1: EXPLORATORY DATA ANALYSIS")
print("="*80)

# Load data
print("\n1. Loading data...")
df = pd.read_csv('Resume.csv')
print(f"✅ Loaded {len(df)} records")
print(f"✅ Columns: {df.columns.tolist()}")

# Check shape
print(f"\n2. Dataset Shape:")
print(f"   Rows: {df.shape[0]}")
print(f"   Columns: {df.shape[1]}")

# Check missing values
print(f"\n3. Missing Values:")
missing = df.isnull().sum()
if missing.sum() == 0:
    print("   ✅ No missing values!")
else:
    for col, count in missing[missing > 0].items():
        print(f"   {col}: {count} ({(count/len(df)*100):.2f}%)")

# Check duplicates
print(f"\n4. Duplicates:")
print(f"   Total duplicates: {df.duplicated().sum()}")
print(f"   Resume duplicates: {df.duplicated(subset=['Resume']).sum()}")

# Category analysis
print(f"\n5. Category Analysis:")
print(f"   Unique categories: {df['Category'].nunique()}")
print(f"\n   Top 15 categories:")
category_counts = df['Category'].value_counts()
for i, (cat, count) in enumerate(category_counts.head(15).items(), 1):
    pct = (count/len(df))*100
    bar = "█" * int(pct)
    print(f"   {i:2d}. {cat[:35]:<35} {count:4d} ({pct:5.2f}%) {bar}")

# Resume length analysis
print(f"\n6. Resume Length Analysis:")
df['length'] = df['Resume'].str.len()
df['words'] = df['Resume'].str.split().str.len()
print(f"   Character Length:")
print(f"      Mean:   {df['length'].mean():.0f}")
print(f"      Median: {df['length'].median():.0f}")
print(f"      Min:    {df['length'].min():.0f}")
print(f"      Max:    {df['length'].max():.0f}")
print(f"\n   Word Count:")
print(f"      Mean:   {df['words'].mean():.0f}")
print(f"      Median: {df['words'].median():.0f}")

# Check for very short resumes
short = (df['length'] < 100).sum()
print(f"\n   ⚠️  Very short resumes (<100 chars): {short}")

# Class imbalance
max_count = category_counts.max()
min_count = category_counts.min()
imbalance = max_count / min_count
print(f"\n7. Class Imbalance:")
print(f"   Max samples: {max_count}")
print(f"   Min samples: {min_count}")
print(f"   Imbalance ratio: {imbalance:.2f}")
if imbalance > 10:
    print("   ⚠️  High imbalance - need balancing!")

# Save visualizations
print(f"\n8. Creating visualizations...")
fig, axes = plt.subplots(1, 2, figsize=(15, 5))

# Plot 1: Top categories
category_counts.head(15).plot(kind='barh', ax=axes[0], color='skyblue')
axes[0].set_title('Top 15 Job Categories')
axes[0].set_xlabel('Count')

# Plot 2: Resume length
axes[1].hist(df['length'], bins=50, color='lightgreen', edgecolor='black')
axes[1].set_title('Resume Length Distribution')
axes[1].set_xlabel('Characters')
axes[1].set_ylabel('Frequency')
axes[1].axvline(df['length'].mean(), color='red', linestyle='--', label='Mean')
axes[1].legend()

plt.tight_layout()
plt.savefig('eda_report.png', dpi=150)
print("✅ Saved: eda_report.png")

# Save text report
with open('eda_summary.txt', 'w') as f:
    f.write("EDA SUMMARY\n")
    f.write("="*80 + "\n\n")
    f.write(f"Total Records: {len(df)}\n")
    f.write(f"Unique Categories: {df['Category'].nunique()}\n\n")
    f.write("Category Distribution:\n")
    for cat, count in category_counts.items():
        f.write(f"  {cat}: {count}\n")

print("✅ Saved: eda_summary.txt")

print("\n" + "="*80)
print("✅ EDA COMPLETE!")
print("="*80)
print("\nRecommendations:")
print("  1. Remove duplicates")
print("  2. Filter short resumes")
print("  3. Handle class imbalance")
print("  4. Clean text data")
print("\n🔜 Next: Run step2_preprocessing.py")
print("="*80)