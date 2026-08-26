import benefitsImage from "../assets/benefits.png";
import { motion } from "motion/react";
import {
  FaDumbbell,
  FaUsers,
  FaRunning,
} from "react-icons/fa";

function Benefits() {
  const benefits = [
    {
      icon: <FaDumbbell />,
      title: "State of the Art Facilities",
      description:
        "Our gym is equipped with modern equipment and everything you need for an effective workout.",

    },
    {
      icon: <FaUsers />,
      title: "100's of Diverse Classes",
      description:
        "Choose from a wide variety of classes designed for beginners, intermediate and advanced members.",

    },
    {
      icon: <FaRunning />,
      title: "Expert and Pro Trainers",
      description:
        "Our professional trainers are here to guide you, motivate you and help you reach your fitness goals.",

    },
  ];

  return (
    <section id="benefits" className="bg-[#FFE1E0]">

      {/* ================= BENEFITS ================= */}
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-black text-[#5E0000] sm:text-5xl">
            MORE THAN JUST A GYM
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We provide everything you need to transform your body,
            improve your health and build confidence.
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            className="group rounded-xl bg-[#F8F4EB] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              {/* Icon */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FF6B66] text-3xl text-white transition duration-300 group-hover:scale-110 group-hover:bg-[#5E0000]">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-black text-[#5E0000]">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-600">
                {benefit.description}
              </p>
                <p
              
                className="   underline px-8 py-3.5 font-bold text-[#FF6B66] transition duration-300 hover:-translate-y-1  hover:text-yellow-600"
              >
                Learn More
              </p>

            </motion.div>
          ))}

        </div>
      </div>


      {/* ================= HAPPY MEMBERS ================= */}
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Illustration */}
  <motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>
  <div className="absolute h-72 w-72 rounded-full bg-[#FFC132] sm:h-96 sm:w-96" />

  <img
    src={benefitsImage}
    alt="People working out"
    className="relative z-10 w-full max-w-500px object-contain"
  />
</motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

           

            <h2 className="mt-4 text-2xl font-black leading-tight text-[#5E0000] ">
              MILLIONS OF HAPPY
              <br />
              MEMBERS GETTING FIT
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Looking to get in shape? You're not alone! Join millions of happy members who have transformed their lives by getting fit with our gym. We have all the resources you need to achieve your fitness goals, including state-of-the-art facilities, diverse classes, and expert trainers. Become a part of our community today and start your fitness journey with us!
<br /><br />
At our gym, we understand that everyone's fitness goals are unique. That's why we offer personalized training sessions that cater to your specific needs and requirements. Our experienced trainers work with you to create a workout plan that suits your fitness level and schedule, and provide you with the motivation and guidance you need to achieve your goals. Whether you're a beginner or an advanced fitness enthusiast, we have the expertise to help you succeed. Join our community today and experience the benefits of a healthy and active lifestyle.
            </p>

           

            <a
              href="#contact"
              className="mt-8 inline-block rounded-md bg-yellow-500 px-8 py-1 font-bold text-white transition duration-300 hover:bg-[#FF6B66]"
            >
              Join Now
            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Benefits;