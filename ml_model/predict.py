from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()

# Load model once when server starts
classifier = pipeline(
    "text-classification",
    model="jy46604790/Fake-News-Bert-Detect"
)

class News(BaseModel):
    text: str

@app.post("/predict")
def predict(news: News):

    # limit raw text size
    text = news.text[:2000]

    # pass truncation here
    result = classifier(
        text,
        truncation=True,
        max_length=512
    )

    label = result[0]["label"]
    score = result[0]["score"]

    prediction = "REAL" if label == "LABEL_1" else "FAKE"

    return {
        "prediction": prediction,
        "confidence": score
    }