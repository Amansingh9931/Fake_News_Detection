import { useState } from "react";
import axios from "axios";
import AnimatedBackground from "./AnimatedBackground";
import Loader from "./Loader";
import TypingText from "./TypingText";

export default function News_Form() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkNews = async () => {

    if (!input) return;

    setLoading(true);

    const isUrl = input.startsWith("http");

    const payload = isUrl
      ? { url: input }
      : { text: input };

    try {

      const res = await axios.post(
        "http://localhost:5000/api/predict",
        payload
      );

      setResult(res.data);

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (

    <div className="relative">

      <AnimatedBackground />

      {/* HERO SECTION */}

      <div className="min-h-screen flex items-center justify-center px-6">

        <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE TEXT */}

          <div>

            <h1 className="text-5xl font-bold text-white leading-tight">

              Detect Fake News <br />
              with AI Accuracy

            </h1>

            <p className="text-gray-200 mt-5 text-lg">

              Analyze news articles and determine if they are
              real or fake within seconds using AI.

            </p>

            {/* INPUT BOX */}

            <div className="mt-8 flex bg-white rounded-xl shadow-xl overflow-hidden">

              <input
                type="text"
                placeholder="Paste News URL or Text..."
                className="flex-1 p-4 outline-none text-gray-700"
                onChange={(e) => setInput(e.target.value)}
              />

              <button
                onClick={checkNews}
                className="bg-orange-500 text-white px-6 font-semibold hover:bg-orange-600"
              >
                Verify Now
              </button>

            </div>

            {loading && <Loader />}

            {/* RESULT */}

            {result && !loading && (

              <div className="mt-6 bg-white p-4 rounded-lg shadow">

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
                  text={`Confidence: ${(result.confidence * 100).toFixed(2)}%`}
                />

              </div>

            )}

          </div>

          {/* RIGHT SIDE IMAGE */}

          <div className="hidden md:block">

            <img
              src="/news-ai.png"
              alt="Fake News Detection"
              className="w-full"
            />

          </div>

        </div>

      </div>

    </div>
  );
}