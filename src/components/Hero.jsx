import { motion } from "motion/react";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#F8F4EB] pt-20"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-0 lg:px-10">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          >
          <div className="absolute top-8 left-1/3 -translate-x-1/2 z-0">
  <h1 className="text-[160px] font-extrabold tracking-widest text-black/10">EVOLVE
  </h1>
</div>
<div className="mx-15">
            <h1 className="-mt-25 max-w-3xl text-5xl font-black leading-[1.05] text-[#5E0000] sm:text-6xl lg:text-7xl">
              EVOGYM
            </h1>
            <p className=" text-4xl font-extralight py-2"> evolutionary fitness</p>

            <p className="mt-4 font-small  text-base leading-7 text-gray-600 ">
             Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of... Get Your Dream Body Now.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a href="#contact" className="rounded-md bg-yellow-500 px-8 py-3.5 font-bold text-black shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#FF6B66] hover:text-white"> Join Now
              </a>

              <a href="#benefits" className="   underline px-8 py-3.5 font-bold text-[#FF6B66] transition duration-300 hover:-translate-y-1  hover:text-yellow-600"> Learn More
              </a>
</div>
            </div>
          </motion.div>


<motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex min-h-650px items-center justify-center pt-20"
>
  <img src={heroImage} alt="EVOGYM fitness training" className="relative z-10 w-440px max-w-full"/>
</motion.div>

        </div>
        

      </div>
    </section>
  );
}

export default Hero;