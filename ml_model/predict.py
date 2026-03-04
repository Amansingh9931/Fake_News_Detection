import pandas as pd

fake = pd.read_csv("../dataset/Fake.csv")
real = pd.read_csv("../dataset/True.csv")

fake["label"] = 0
real["label"] = 1

data = pd.concat([fake, real])
data = data[["text", "label"]]

print(data.head())