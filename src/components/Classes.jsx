import class1 from "../assets/class1.jpg";
import class2 from "../assets/class2.jpg";
import class3 from "../assets/class3.jpg";
import class4 from "../assets/class4.jpg";
import class5 from "../assets/class5.jpg";
import class6 from "../assets/class6.jpg";
import { motion } from "motion/react";

function Classes() {
 const classes = [
  {
    title: "Weight Training",
    image: class1,
    description:
      "Build strength and muscle with professional weight training programs.",
  },
  {
    title: "Yoga Classes",
    image: class2,
    description:
      "Improve flexibility, balance and mental focus with our yoga sessions.",
  },
  {
    title: "Ab Core",
    image: class3,
    description:
      "Strengthen your core and improve your overall body stability.",
  },
  {
    title: "Adventure",
    image: class4,
    description:
      "Challenge yourself with exciting outdoor and adventure workouts.",
  },
  {
    title: "Fitness",
    image: class5,
    description:
      "Improve your endurance, strength and overall fitness with dynamic workouts.",
  },
  {
    title: "Training",
    image: class6,
    description:
      "Get personalized training designed around your individual fitness goals.",
  },
];

  return (
    <section  id="classes" className="bg-[#F8F4EB] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}  viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <h2 className="mt-3 text-2xl font-black text-[#5E0000] sm:text-2xl">  EXPLORE OUR CLASSES
          </h2>

          <p className="mt-5 w-full text-lg leading-8 text-gray-600"> At our gym, we offer a variety of classes designed to suit every fitness level and interest. From high-intensity cardio workouts to mind-body classes like yoga and meditation, we have something for everyone. Our experienced trainers lead classes that are challenging, fun, and designed to help you achieve your fitness goals.
          </p>
        </motion.div>

<div className="mt-12 flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
  {classes.map((gymClass, index) => (
    <motion.div key={gymClass.title} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{   duration: 0.6,   delay: index * 0.1,}}
      className="group relative min-w-290px max-w-[320px] shrink-0 overflow-hidden rounded-xl bg-[#5E0000] shadow-lg transition duration-300 hover:-translate-y-2">
      <div className="h-72 overflow-hidden">
        <img src={gymClass.image} alt={gymClass.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110"/>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{gymClass.title}</h3>
        <p className="mt-3 leading-7 text-[#FFE1E0]">
          {gymClass.description}
        </p>
        <button className="mt-5 font-bold text-[#FFC132] transition hover:text-white">
          Learn More →
        </button>
      </div> </motion.div> ))}
</div> </div>
    </section>
  );
}

export default Classes;