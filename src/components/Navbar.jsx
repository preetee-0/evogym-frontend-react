import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaCircle } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Benefits", href: "#benefits" },
    { name: "Our Classes", href: "#classes" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${ isScrolled   ? "bg-[#FFE1E0] shadow-md"   : "bg-[#F8F4EB]"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
       <div className="flex items-center gap-2 md:pl-20">
  <a href="#home" className="text-2xl font-black text-[#5E0000]">
    EVOGYM 
  </a>

  <span className="text-[#FF6B66] text-xs">
    <FaCircle />
  </span>
</div>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-[#5E0000] transition hover:text-[#FF6B66]">
              {link.name}
            </a>
          ))}
          <button className="text-sm font-medium text-[#5E0000] transition hover:text-[#FF6B66]">
            Sign In
          </button>
          <a  href="#contact" className="rounded-md bg-[#FF6B66] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#5E0000]">
            Become a Member
          </a>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-[#5E0000] md:hidden" aria-label="Toggle menu"> {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-[#FFE1E0] bg-[#F8F4EB] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-[#5E0000] transition hover:text-[#FF6B66]">
                {link.name} </a>
            ))}
            <button onClick={() => setIsMenuOpen(false)} className="text-left text-base font-medium text-[#5E0000] transition hover:text-[#FF6B66]">
              Sign In</button>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-fit rounded-md bg-[#FF6B66] px-6 py-3 font-bold text-white transition hover:bg-[#5E0000]">
              Become a Member </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;