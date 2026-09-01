import {
  FaInstagram, FaFacebookF,FaTwitter,
  FaYoutube,
  FaCircle
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#FFE1E0] text-black">

     <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 text-black">
           <div className="flex items-center gap-2">
  <a href="#home" className="text-3xl font-bold tracking-wider text-[#5E0000]"
  >
    EVOGYM
  </a>

  <span className="text-xs text-[#FF6B66]">
    <FaCircle />
  </span>
</div>

            <p className="mt-5 max-w-md leading-7 text-black">
              Join our community of fitness enthusiasts and get access to state-of-the-art facilities, expert trainers, and diverse classes. Contact us today to start your fitness journey and become the best version of yourself! Stay up to date with our latest news and promotions by following us on social media.
            </p>

            <p className="mt-6 text-sm text-black">
              &copy; 2026 EVOGYM. All Rights Reserved.
            </p>

          </div>
          <div>
            <h3 className="text-lg font-bold text-black">
              Quick Links
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <a href="#home" className="text-black transition hover:text-[#FFC132]">  Home
              </a>
              <a href="#benefits" className="text-black transition hover:text-[#FFC132]" >
                Benefits
              </a>
              <a href="#classes" className="text-black transition hover:text-[#FFC132]">
                Our Classes</a>
              <a href="#contact" className="text-black transition hover:text-[#FFC132]">
                Contact Us
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">
              Contact Us
            </h3>
            <div className="mt-5 space-y-3 text-black">
              <p>     Kathmandu, Nepal   </p>
              <p>     +977 9800000000 </p>
              <p> info@evogym.com   </p>
            </div>
          </div>

        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-[#8A3333] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B66] transition hover:bg-[#FFC132]" ><FaInstagram /> </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B66] transition hover:bg-[#FFC132]" ><FaFacebookF /> </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B66] transition hover:bg-[#FFC132]" ><FaTwitter /> </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B66] transition hover:bg-[#FFC132]" ><FaYoutube /> </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;