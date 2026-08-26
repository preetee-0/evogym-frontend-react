import contactImage from "../assets/contact.jpg";
import { motion } from "motion/react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    alert("Thank you! We will contact you soon.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#FFE1E0] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* LEFT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            

            <h4 className="mt-3 text-2xl font-black leading-tight text-[#5E0000] sm:text-2xl">
              JOIN NOW TO
      
              GET IN SHAPE
            </h4>

            <p className="mt-5 leading-8 text-gray-600">
              Ready to start your fitness journey? Fill out the
              form and our team will get in touch with you.
            </p>


            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="rounded-md px-2 py-3.5 font-bold text-black "
>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-[#5E0000]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-md border border-[#FFA6A3] bg-white px-4 py-3 outline-none transition focus:border-[#FF6B66] focus:ring-2 focus:ring-[#FF6B66]/20"
                />
              </div>


              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-[#5E0000]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-md border border-[#FFA6A3] bg-white px-4 py-3 outline-none transition focus:border-[#FF6B66] focus:ring-2 focus:ring-[#FF6B66]/20"
                />
              </div>


              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-[#5E0000]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-md border border-[#FFA6A3] bg-white px-4 py-3 outline-none transition focus:border-[#FF6B66] focus:ring-2 focus:ring-[#FF6B66]/20"
                />
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="rounded-md bg-[#FF6B66] px-8 py-3 font-bold text-white transition duration-300 hover:bg-[#5E0000]"
              >
                SUBMIT
              </button>

            </form>
          </motion.div>


          {/* RIGHT - GRAPHIC */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-450px items-center justify-center"
          >

      
            <img
  src={contactImage}
  alt="Fitness training"
  className="relative z-1 w-75 max-w-90px rounded-md object-contain"
/>
 <div className="absolute top-110 left-1/3 -translate-x-1/2 z-90">
  <h1 className="text-[140px] font-extrabold tracking-widest text-black/10">
    EVOLVE
  </h1>
</div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;