import { useState } from "react";
import axios from "axios";
import AnimatedBackground from "./AnimatedBackground";
import Loader from "./Loader";
import TypingText from "./TypingText";

export default function News_Form() {

  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkNews = async () => {

    setLoading(true);

    const res = await axios.post(
      "http://localhost:5000/api/predict",
      { text, url }
    );

    setResult(res.data);

    setLoading(false);
  };

  return (

    <div className="min-h-screen flex items-center justify-center">

      <AnimatedBackground />

      <div className="bg-white shadow-2xl rounded-xl p-8 w-[650px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Fake News Detector
        </h1>

        <input
          placeholder="Paste news URL (optional)"
          className="w-full border p-3 rounded mb-3"
          onChange={(e) => setUrl(e.target.value)}
        />

        <textarea
          placeholder="Or paste news text..."
          className="w-full border p-3 rounded h-32"
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={checkNews}
          className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Analyze News
        </button>

        {loading && <Loader />}

        {result && !loading && (

          <div className="mt-6 text-center">

            <h2 className={`text-xl font-bold ${
              result.prediction === "REAL"
                ? "text-green-600"
                : "text-red-600"
            }`}>

              {result.prediction === "REAL"
                ? "🟢 REAL NEWS"
                : "🔴 FAKE NEWS"}

            </h2>

            <TypingText
              text={`Confidence score: ${(result.confidence * 100).toFixed(2)}%`}
            />

          </div>

        )}

      </div>

    </div>

  );
}