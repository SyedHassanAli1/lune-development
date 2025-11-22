import { motion } from "framer-motion";
import LuneLogo from "../Assets/Lune logo.svg?url";
import LightRays from "./components/LightRays";
import ShinyText from "./components/ShinyText";

function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 text-white relative overflow-hidden">
      {/* Light Rays Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 h-full">
        <div className="h-full flex flex-col justify-between py-4 md:py-6">
          {/* Top Section - Logo */}
          <motion.div
            className="flex justify-center shrink-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={LuneLogo}
              alt="Lune Development Logo"
              className="h-36 w-auto md:h-52 lg:h-64 drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </motion.div>

          <motion.p
            className="text-center text-lg md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto mt-4 md:mt-6 leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Illuminating the Next Era of Luxury
          </motion.p>

          {/* Main Content - Centered */}
          <div className="flex-1 flex items-center justify-center min-h-0 py-2 md:py-4">
            <div className="w-full max-w-5xl">
              {/* Hero Section */}
              <div className="text-center mb-4 md:mb-6">
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-3 md:mb-4 leading-[1.1] pb-1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="inline-block"
                  >
                    <ShinyText
                      text="Under Construction"
                      disabled={false}
                      speed={3}
                      className=""
                    />
                  </motion.span>
                </motion.h1>
              </div>

              {/* Contact Information - Elegant Grid */}
              <motion.div
                className="mt-4 md:mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-white/90 max-w-4xl mx-auto">
                  {/* Location */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="mb-2 md:mb-3 p-2 md:p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 11a3 3 0 100-6 3 3 0 000 6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/50 mb-1 md:mb-2 font-medium">
                      Location
                    </p>
                    <p className="text-sm md:text-base lg:text-lg font-light">
                      Dubai, United Arab Emirates
                    </p>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="mb-2 md:mb-3 p-2 md:p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/50 mb-1 md:mb-2 font-medium">
                      Email
                    </p>
                    <a
                      href="mailto:info@lunedevelopment.com"
                      className="text-sm md:text-base lg:text-lg font-light hover:text-white transition-colors duration-300"
                    >
                      info@lunedevelopment.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="mb-2 md:mb-3 p-2 md:p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/50 mb-1 md:mb-2 font-medium">
                      Phone
                    </p>
                    <a
                      href="tel:+971000000000"
                      className="text-sm md:text-base lg:text-lg font-light hover:text-white transition-colors duration-300"
                    >
                      +971 50 000 0000
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            className="text-white/40 text-xs md:text-sm font-light tracking-wide shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-center">
              &copy; {new Date().getFullYear()} Lune Development. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
