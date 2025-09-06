import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "w-[80%] mx-auto mt-4 rounded-2xl dark:bg-white/10 bg-black/20 border-black/30  backdrop-blur-md border-b dark:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          : "w-full bg-transparent border-b border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* لوگو */}
        <div className="flex-shrink-0 text-white font-bold text-lg">
          <img
            className="w-12"
            src="https://royahouse.com/wp-content/uploads/2019/10/royahouse-copy.png"
            alt="لوگو"
          />
        </div>

        {/* منو */}
        <nav className="hidden md:flex space-x-6 text-white/90">
          <a href="/" className="hover:text-white">خانه</a>
          <a href="/about" className="hover:text-white">درباره</a>
          <a href="/services" className="hover:text-white">خدمات</a>
          <a href="/contact" className="hover:text-white">تماس</a>
        </nav>
        

        {/* اکشن‌ها */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}