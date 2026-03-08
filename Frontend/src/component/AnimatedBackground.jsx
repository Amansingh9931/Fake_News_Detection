import { motion } from "framer-motion";

export default function AnimatedBackground() {

  const bubbles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-indigo-600 via-purple-700 to-black">

      {bubbles.map((_, i) => (

        <motion.div
          key={i}
          className="absolute bg-white/20 rounded-full blur-xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.6 + 0.2
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, 50, -50, 0]
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity
          }}
          style={{
            width: 120,
            height: 120
          }}
        />

      ))}

    </div>
  );
}