"""
STEP 4: MODEL TRAINING
Purpose: Train multiple ML models and select the best one
"""

import pandas as pd
import numpy as np
import joblib
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import LinearSVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import warnings
warnings.filterwarnings('ignore')

print("="*80)
print("STEP 4: MODEL TRAINING")
print("="*80)

# Load data
print("\n1. Loading training data...")
X_train = joblib.load('X_train.pkl')
X_test = joblib.load('X_test.pkl')
y_train = joblib.load('y_train.pkl')
y_test = joblib.load('y_test.pkl')

print(f"✅ Train: {X_train.shape[0]} samples")
print(f"✅ Test:  {X_test.shape[0]} samples")
print(f"✅ Features: {X_train.shape[1]}")
print(f"✅ Classes: {len(np.unique(y_train))}")

# Define models
print("\n2. Defining models to train...")
models = {
    'Naive Bayes': MultinomialNB(),
    'Logistic Regression': LogisticRegression(max_iter=1000, random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'Linear SVM': LinearSVC(max_iter=1000, random_state=42)
}

print(f"✅ Will train {len(models)} models:")
for name in models.keys():
    print(f"   - {name}")

# Train and evaluate
print("\n3. Training models...")
results = {}

for name, model in models.items():
    print(f"\n   Training {name}...")
    
    # Train
    model.fit(X_train, y_train)
    
    # Predict
    y_pred_train = model.predict(X_train)
    y_pred_test = model.predict(X_test)
    
    # Calculate metrics
    train_acc = accuracy_score(y_train, y_pred_train)
    test_acc = accuracy_score(y_test, y_pred_test)
    
    results[name] = {
        'model': model,
        'train_accuracy': train_acc,
        'test_accuracy': test_acc,
        'predictions': y_pred_test
    }
    
    print(f"   ✅ Train Accuracy: {train_acc*100:.2f}%")
    print(f"   ✅ Test Accuracy:  {test_acc*100:.2f}%")

# Find best model
print("\n4. Comparing models...")
print("\n   " + "="*60)
print(f"   {'Model':<25} {'Train Acc':<15} {'Test Acc':<15}")
print("   " + "="*60)

best_model_name = None
best_test_acc = 0

for name, result in results.items():
    train_acc = result['train_accuracy'] * 100
    test_acc = result['test_accuracy'] * 100
    
    print(f"   {name:<25} {train_acc:>6.2f}%         {test_acc:>6.2f}%")
    
    if result['test_accuracy'] > best_test_acc:
        best_test_acc = result['test_accuracy']
        best_model_name = name

print("   " + "="*60)
print(f"\n   🏆 Best Model: {best_model_name}")
print(f"   🎯 Test Accuracy: {best_test_acc*100:.2f}%")

# Save best model
print("\n5. Saving best model...")
best_model = results[best_model_name]['model']
joblib.dump(best_model, 'best_model.pkl')
print(f"✅ Saved: best_model.pkl ({best_model_name})")

# Detailed evaluation of best model
print(f"\n6. Detailed evaluation of {best_model_name}...")
y_pred = results[best_model_name]['predictions']

print("\n   Classification Report:")
print("   " + "="*70)
report = classification_report(y_test, y_pred, output_dict=True)
print(f"   {'Category':<30} {'Precision':<12} {'Recall':<12} {'F1-Score':<12}")
print("   " + "-"*70)

# Show top 10 classes
classes = sorted(report.keys())[:-3]  # Exclude accuracy, macro avg, weighted avg
for cls in classes[:10]:
    if cls in report:
        metrics = report[cls]
        print(f"   {cls[:28]:<30} {metrics['precision']:>6.2f}      {metrics['recall']:>6.2f}      {metrics['f1-score']:>6.2f}")

print("   " + "="*70)
print(f"   Overall Accuracy: {report['accuracy']*100:.2f}%")

# Save model info
print("\n7. Saving model information...")
model_info = {
    'model_name': best_model_name,
    'model_type': str(type(best_model).__name__),
    'train_accuracy': results[best_model_name]['train_accuracy'],
    'test_accuracy': results[best_model_name]['test_accuracy'],
    'num_features': X_train.shape[1],
    'num_classes': len(np.unique(y_train)),
    'classes': list(np.unique(y_train))
}

joblib.dump(model_info, 'model_info.pkl')
print("✅ Saved: model_info.pkl")

# Save all results
with open('training_results.txt', 'w') as f:
    f.write("MODEL TRAINING RESULTS\n")
    f.write("="*80 + "\n\n")
    
    for name, result in results.items():
        f.write(f"\n{name}:\n")
        f.write(f"  Train Accuracy: {result['train_accuracy']*100:.2f}%\n")
        f.write(f"  Test Accuracy:  {result['test_accuracy']*100:.2f}%\n")
    
    f.write(f"\n\nBest Model: {best_model_name}\n")
    f.write(f"Test Accuracy: {best_test_acc*100:.2f}%\n")

print("✅ Saved: training_results.txt")

# Summary
print("\n" + "="*80)
print("TRAINING SUMMARY")
print("="*80)
print(f"Models trained:    {len(models)}")
print(f"Best model:        {best_model_name}")
print(f"Test accuracy:     {best_test_acc*100:.2f}%")
print(f"Training samples:  {X_train.shape[0]}")
print(f"Test samples:      {X_test.shape[0]}")
print(f"Number of classes: {len(np.unique(y_train))}")

print("\n" + "="*80)
print("✅ MODEL TRAINING COMPLETE!")
print("="*80)
print("\n🔜 Next: Run step5_predict.py to test predictions")
print("="*80)