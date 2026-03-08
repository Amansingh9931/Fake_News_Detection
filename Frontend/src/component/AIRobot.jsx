import { motion } from "framer-motion";
import robotImage from "../assets/ai-robot.png";
export default function AIRobot() {
  return (
    <div className="absolute right-[3%] top-[20%] z-10">

      {/* Robot */}
      <motion.img
      src={robotImage}
        alt="AI Robot"
        className="w-[260px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Fake Tag */}
      <motion.div
        className="absolute -left-12 top-8 bg-red-500 text-white px-3 py-1 rounded-md text-sm shadow-lg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Fake
      </motion.div>

      {/* Real Tag */}
      <motion.div
        className="absolute -right-10 top-16 bg-green-500 text-white px-3 py-1 rounded-md text-sm shadow-lg"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Real
      </motion.div>

    </div>
  );
}