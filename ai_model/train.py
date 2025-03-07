
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

# Предполагается, что мы уже имеем данные о ценах и волатильности
data = pd.read_csv('crypto_market_data.csv')

X = data[['feature1', 'feature2']]  # Функции для обучения
y = data['risk_score']

model = RandomForestRegressor()
model.fit(X, y)

# Сохраняем модель
joblib.dump(model, 'model.pkl')

