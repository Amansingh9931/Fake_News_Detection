import { motion } from "framer-motion";

export default function ConfidenceGraph() {

  const confidence = 92;
  const history = [60, 72, 81, 88, 90, 92];

  const width = 220;
  const height = 80;

  const points = history.map((value, i) => {
    const x = (i / (history.length - 1)) * width;
    const y = height - (value / 100) * height;
    return `${x},${y}`;
  }).join(" ");

  return (

    <motion.div
      className="absolute right-[2%] bottom-4 w-72 bg-[#16244a]/80 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6"
      animate={{
        boxShadow: [
          "0 0 25px rgba(0,255,255,0.15)",
          "0 0 50px rgba(0,255,255,0.35)",
          "0 0 25px rgba(0,255,255,0.15)"
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >

      {/* Title */}
      <p className="text-cyan-300 text-sm tracking-wide mb-4">
        AI Detection Accuracy
      </p>

      {/* Progress Bar */}
      <div className="relative w-full h-4 bg-blue-950/70 rounded-full overflow-hidden shadow-inner">

        <div
          className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 shadow-[0_6px_20px_rgba(0,255,200,0.6)]"
          style={{ width: `${confidence}%` }}
        />

      </div>

      {/* Confidence Value */}
      <p className="text-green-400 text-lg mt-3 font-bold">
        {confidence}% Real
      </p>

      {/* AI Line Chart */}
      <div className="mt-6">

        <svg width={width} height={height} className="overflow-visible">

          {/* Grid */}
          <line x1="0" y1={height} x2={width} y2={height} stroke="rgba(255,255,255,0.1)" />
          <line x1="0" y1={height/2} x2={width} y2={height/2} stroke="rgba(255,255,255,0.08)" />

          {/* Gradient area */}
          <defs>
            <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"/>
            </linearGradient>
          </defs>

          <polygon
            fill="url(#areaGradient)"
            points={`0,${height} ${points} ${width},${height}`}
          />

          {/* Trend line */}
          <polyline
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            points={points}
            style={{
              filter: "drop-shadow(0 0 6px rgba(34,211,238,0.8))"
            }}
          />

          {/* Data nodes */}
          {history.map((value, i) => {

            const x = (i / (history.length - 1)) * width;
            const y = height - (value / 100) * height;

            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3.5"
                fill="#22d3ee"
                style={{ filter: "drop-shadow(0 0 6px cyan)" }}
              />
            );

          })}

        </svg>

      </div>

      {/* AI Activity Indicator */}
      <motion.div
        className="absolute -top-3 -right-3 w-4 h-4 bg-cyan-400 rounded-full"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [1, 0.4, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
        style={{
          boxShadow: "0 0 15px cyan"
        }}
      />

    </motion.div>
  );
}