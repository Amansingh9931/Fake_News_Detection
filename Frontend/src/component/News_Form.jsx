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
    setLoading(false);
  };

  return (

    <div className="min-h-screen flex items-center justify-center px-6">

      <AnimatedBackground />

      {/* Main Card */}
      <div className="relative z-10 w-[700px] bg-[#0f1c3f]/70 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.15)] rounded-2xl p-10">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-cyan-300 mb-2">
          Fake News Detector
        </h1>

        <p className="text-center text-gray-300 text-sm mb-6">
          AI powered verification system
        </p>

        {/* URL Input */}
        <input
          placeholder="Paste news URL (optional)"
          className="w-full bg-[#0f1c3f] border border-cyan-400/20 text-white p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          onChange={(e) => setUrl(e.target.value)}
        />

        {/* Text Area */}
        <textarea
          placeholder="Or paste news text..."
          className="w-full bg-[#0f1c3f] border border-cyan-400/20 text-white p-3 rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          onChange={(e) => setText(e.target.value)}
        />

        {/* Analyze Button */}
        <button
          onClick={checkNews}
          className="w-full mt-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-[1.02] transition shadow-lg hover:shadow-purple-500/30"
        >
          Analyze News
        </button>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center mt-6">
            <Loader />
          </div>
        )}

        {/* Result */}
        {result && !loading && (

          <div className="mt-8 bg-[#0f1c3f]/80 border border-cyan-400/20 rounded-xl p-6 text-center shadow-lg">

            <h2
              className={`text-xl font-bold mb-3 ${
                result.prediction === "REAL"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >

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