import axios from "axios";
import {JSDOM} from "jsdom";
import {Readability } from "@mozilla/readability";

export const predictNews = async (req, res) => {
  try {

    let { text, url } = req.body;

    // If URL is provided → extract article
    if (url && url.length > 0) {

      const response = await axios.get(url, {
        timeout: 7000,
        headers: {
           "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
            "Accept":
                "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
            "Connection": "keep-alive"
        }
      });

      const dom = new JSDOM(response.data, { url });

      const reader = new Readability(dom.window.document);

      const article = reader.parse();

      if (!article) {
        return res.status(400).json({
          error: "Could not extract article content"
        });
      }

      text = article.textContent;

      // limit text size for BERT
      text = article.textContent.substring(0, 2000);
    }

    if (!text) {
      return res.status(400).json({
        error: "No text provided"
      });
    }

    // Send text to ML model
    const mlResponse = await axios.post(
      "http://localhost:8000/predict",
      { text }
    );

    res.json(mlResponse.data);

  } catch (error) {
    console.error("ERROR:", error.response?.status);
    console.error(error.message);

    res.status(500).json({
      error: "Prediction failed"
    });

  }
};