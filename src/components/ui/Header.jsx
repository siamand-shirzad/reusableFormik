// src/ui/Header.jsx

import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed top-0 left-0 right-0 z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* لوگو یا نام سایت */}
          <div className="flex-shrink-0">
            <a to="/" className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Siamand.dev
            </a>
          </div>

          {/* منوی ناوبری */}
          <nav className="hidden md:flex space-x-6">
            <a to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              خانه
            </a>
            <a to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              درباره
            </a>
            <a to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              تماس
            </a>
          </nav>

          {/* اکشن‌ها */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}