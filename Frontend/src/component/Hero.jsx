import heroImage from "../assets/hero.png";
import AIRobot from "../component/AIRobot";
import AIParticles from "../component/AIParticles";
import ConfidenceGraph from "../component/ConfidenceGraph";

export default function Hero() {
  return (
    <section className="relative w-full h-[560px] overflow-hidden bg-[#0f1c3f]">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Fake News Detection"
        className="absolute inset-0 w-full h-full object-contain object-top"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c3f]/90 via-[#0f1c3f]/70 to-transparent"></div>

      {/* Floating Particles */}
      <AIParticles />

      {/* AI Robot */}
      <AIRobot />

      {/* Confidence Graph Component */}
      <ConfidenceGraph />

      {/* Glow Effects */}
      <div className="absolute right-16 top-10 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute right-40 bottom-10 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full"></div>

      {/* Left Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-6">

        <div className="max-w-xl text-white">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Detect <span className="text-red-500">Fake News</span>
            <br />
            with <span className="text-cyan-400">AI Accuracy</span>
          </h1>

          <p className="text-lg text-gray-200 mb-4">
            Analyze news articles and determine if they are real or fake in seconds.
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8"></div>

          <div className="flex gap-4">

            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 font-semibold hover:scale-105 transition">
              Get Started →
            </button>

            <button className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition">
              Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}