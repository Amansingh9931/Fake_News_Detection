import axios from "axios";

export const predictNews = async (req, res) => {
  try {
    const text = req.body.text;

    const response = await axios.post(
      "http://localhost:8000/predict",
      { text: text }
    );

    res.json(response.data);

  } catch (error) {
    res.status(500).json({
      error: "Prediction failed"
    });
  }
};