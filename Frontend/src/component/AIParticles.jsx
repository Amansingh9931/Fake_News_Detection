import { motion } from "framer-motion";

export default function AIParticles() {

  const particles = Array.from({ length: 15 });

  return (
    <div className="absolute right-[2%] top-[15%] w-[300px] h-[220px] pointer-events-none hidden sm:flex">

      {particles.map((_, i) => (

        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          initial={{
            x: Math.random() * 350,
            y: Math.random() * 250,
            opacity: 0.2
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />

      ))}

    </div>
  );
}