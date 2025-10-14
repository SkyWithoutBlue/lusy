'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="mx-auto! max-w-7xl  px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <Link href="/" className="text-3xl font-bold text-black tracking-tight">
                  Lusy.
                </Link>
              </div>
            </div>
            <nav className="hidden lg:block">
              <div className="flex items-center space-x-1 gap-10">
                <a
                  href="#home"
                  className="relative px-6 py-3 text-gray-700 hover:text-black font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group"
                >
                  Главная
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4"></span>
                </a>
                <a
                  href="#about"
                  className="relative px-6 py-3 text-gray-700 hover:text-black font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group"
                >
                  Обо мне
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4"></span>
                </a>
                <a
                  href="#portfolio"
                  className="relative px-6 py-3 text-gray-700 hover:text-black font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group"
                >
                  Достижения
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4"></span>
                </a>
                <a
                  href="#contact"
                  className="relative px-6 py-3 text-gray-700 hover:text-black font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group"
                >
                  Контакты
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4"></span>
                </a>
              </div>
            </nav>

            <div className="hidden lg:flex items-center">
              <button className="p-2! text-sm font-semibold text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Записаться
              </button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-6 py-4 bg-white border-t border-gray-100 shadow-lg">
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </a>
                <a
                  href="#about"
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Обо мне
                </a>
                <a
                  href="#portfolio"
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Мои достижения
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </a>
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full p-16 text-lg font-semibold text-white rounded-xl transition-all duration-300 transform hover:scale-105" style={{backgroundColor: '#9A8A88'}}>
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
