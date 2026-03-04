from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()

classifier = pipeline(
    "text-classification",
    model="jy46604790/Fake-News-Bert-Detect"
)

class News(BaseModel):
    text: str

@app.post("/predict")
def predict(news: News):

    result = classifier(news.text)

    label = result[0]["label"]
    score = result[0]["score"]

    if label == "LABEL_1":
        prediction = "REAL"
    else:
        prediction = "FAKE"

    return {
        "prediction": prediction,
        "confidence": score
    }