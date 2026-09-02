import { motion } from "motion/react";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F8F4EB] pt-20"
    >
{/* Background EVOLVE */}
<div className="pointer-events-none absolute top-24 left-0 z-0 w-full overflow-hidden">
  <h1
    className="
      whitespace-nowrap
      text-[36px]
      font-extrabold
      tracking-wide
      text-black/10
      sm:text-[65px]
      md:text-[100px]
      lg:text-[160px]
      lg:pl-10
    "
  >
    EVOLVE
  </h1>
</div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 pt-20 pl-4 sm:pl-8 lg:pl-12"
          >
            <h1 className="text-5xl font-black leading-tight text-[#5E0000] sm:text-6xl lg:text-7xl">
              EVOGYM
            </h1>

            <p className="py-2 text-3xl font-extralight sm:text-4xl">
              evolutionary fitness
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World
              Class Studios to get the Body Shapes That you Dream of... Get
              Your Dream Body Now.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-yellow-500 px-8 py-3.5 font-bold text-black shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#FF6B66] hover:text-white"
              >
                Join Now
              </a>

              <a
                href="#benefits"
                className="px-8 py-3.5 font-bold text-[#FF6B66] underline transition duration-300 hover:-translate-y-1 hover:text-yellow-600"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex min-h-[400px] w-full items-center justify-center pt-10 lg:min-h-[650px] lg:pt-20"
          >
            <img
              src={heroImage}
              alt="EVOGYM fitness training"
              className="relative z-10 w-full max-w-[440px] object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;