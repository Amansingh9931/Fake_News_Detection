import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center mt-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full"
      />
    </div>
  );
}