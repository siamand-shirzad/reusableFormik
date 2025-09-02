// src/components/MainContent.jsx

import RegisterForm from "../RegisterForm";

export default function MainContent() {
  return (
<main className="flex flex-col items-center justify-center flex-grow px-4 py-8 pt-18
  bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 
  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
  transition-colors duration-500 min-h-screen">

  <div className="w-full max-w-md 
    bg-white dark:bg-gray-800 
    backdrop-blur-lg 
    rounded-2xl shadow-xl p-8 text-center 
    border border-white/40 dark:border-gray-700/40 
    transition-colors duration-500">

    <h1 className="text-3xl !text-center font-extrabold text-gray-900 dark:text-gray-100 mb-6">
      ثبت‌نام
    </h1>

    <RegisterForm />

  </div>
</main>  );
}