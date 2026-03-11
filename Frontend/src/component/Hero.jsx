import heroImage from "../assets/hero.png";
import AIRobot from "../component/AIRobot";
import AIParticles from "../component/AIParticles";
import ConfidenceGraph from "../component/ConfidenceGraph";
import { motion } from "framer-motion";
import News_Form from "./News_Form";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[#0f1c3f] flex items-start justify-center pt-32">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Fake News Detection"
        className="absolute inset-0 w-full h-full object-contain object-top pointer-events-none"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c3f]/90 via-[#0f1c3f]/70 to-transparent pointer-events-none"></div>

      {/* Floating Particles */}
      <AIParticles />

      {/* AI Robot */}
      <AIRobot />

      {/* Confidence Graph Component */}
      <ConfidenceGraph />

      {/* Glow Effects */}
      <div className="absolute right-16 top-10 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute right-40 bottom-10 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Left Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center px-6">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 text-white"
        >

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Detect <span className="text-red-500">Fake News</span>
            <br />
          </h1>

          <p className="text-lg text-gray-200 mb-4">
            Analyze news articles and determine if they are real or fake in seconds.
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8"></div>

          {/* Glass Box with News Form */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Check Now
            </h2>
            <News_Form embedded={true} />
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}