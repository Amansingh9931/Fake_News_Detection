import { motion } from "framer-motion";

export default function AINetwork() {

  const nodes = [
    { x: 60, y: 60 },
    { x: 200, y: 80 },
    { x: 340, y: 60 },
    { x: 120, y: 200 },
    { x: 280, y: 200 }
  ];

  return (
    <div className="absolute right-10 top-20 w-[450px] h-[300px]">

      {/* Neural Network */}
      <svg width="450" height="300">

        {/* Connections */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((target, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
              stroke="rgba(0,255,255,0.4)"
              strokeWidth="2"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: (i + j) * 0.3
              }}
            />
          ))
        )}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="7"
            fill="#22d3ee"
            style={{ filter: "drop-shadow(0 0 8px #22d3ee)" }}
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -6, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4
            }}
          />
        ))}

      </svg>

      {/* Confidence Graph */}
      <div className="absolute bottom-0 right-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 w-52">

        <p className="text-gray-300 text-xs mb-2">Confidence Score</p>

        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-400"
            initial={{ width: "0%" }}
            animate={{ width: "92%" }}
            transition={{ duration: 2 }}
          />
        </div>

        <p className="text-green-400 text-sm mt-2 font-semibold">
          92% Real
        </p>

      </div>

    </div>
  );
}