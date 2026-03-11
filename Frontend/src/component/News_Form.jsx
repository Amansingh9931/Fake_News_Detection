import { useState } from "react";
import axios from "axios";
import AnimatedBackground from "./AnimatedBackground";
import Loader from "./Loader";
import TypingText from "./TypingText";
import { motion } from "framer-motion";

export default function News_Form({ embedded = false }) {

  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkNews = async () => {

    if (!text && !url) {
      alert("Please enter news text or URL");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/predict",
        { text, url }
      );

      setResult(res.data);

    } catch (error) {
      console.error(error);
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div className={embedded ? "" : "min-h-screen flex items-center justify-center px-6 py-12 relative"}>

      {!embedded && <AnimatedBackground />}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative z-50 w-full max-w-lg sm:max-w-xl bg-[#0f1c3f]/70 backdrop-blur-2xl border border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.25)] rounded-3xl p-10 overflow-hidden pointer-events-auto"
      >

        {/* URL Input */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          placeholder="Paste news URL (optional)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full bg-[#0f1c3f]/80 border border-cyan-400/30 text-white p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        {/* Text Area */}
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          placeholder="Or paste news text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-[#0f1c3f]/80 border border-purple-400/30 text-white p-3 rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={checkNews}
          className="w-full mt-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-500 hover:shadow-xl"
        >
          Analyze News
        </motion.button>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center mt-6">
            <Loader />
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-[#0f1c3f]/80 border border-cyan-400/30 rounded-xl p-6 text-center"
          >

            <h2
              className={`text-2xl font-bold mb-3 ${
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
              text={`Confidence score: ${(result.confidence * 100).toFixed(2)}%`}
            />

            {/* Confidence Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 mt-4 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${(result.confidence * 100).toFixed(2)}%`
                }}
                transition={{ duration: 1 }}
                className={`h-3 rounded-full ${
                  result.prediction === "REAL"
                    ? "bg-gradient-to-r from-green-400 to-cyan-400"
                    : "bg-gradient-to-r from-red-400 to-pink-500"
                }`}
              />

            </div>

          </motion.div>
        )}

      </motion.div>

    </div>
  );
}