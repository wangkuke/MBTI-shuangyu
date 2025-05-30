"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname, useRouter } from 'next/navigation'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const isEnglish = pathname.startsWith('/en');

  const toggleLanguage = () => {
    const newPathname = isEnglish
      ? pathname.replace('/en', '') // If currently in English, remove /en
      : '/en' + pathname // If not in English, add /en

    // Handle root path specifically
    const finalPathname = newPathname === '' ? '/' : newPathname;
    
    router.push(finalPathname)
  }

  // Helper function to prepend /en if in English mode
  const prependEn = (href: string) => {
    if (isEnglish) {
      return '/en' + href;
    } else {
      return href;
    }
  }

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={prependEn("/")} className="flex items-center space-x-2">
          <div className="text-purple-600 text-3xl">
           <i className="fa fa-user-circle-o"></i>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-purple-600">
            MBTI{isEnglish ? (
              ' Personality Test'
            ) : (
              <span className="text-cyan-400">人格测试</span>
            )}
          </h1>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href={prependEn("/")} className="text-gray-600 hover:text-purple-600 transition-colors">
            {isEnglish ? 'Home' : '首页'}
          </Link>
          <Link href={prependEn("/mbti-result")} className="text-gray-600 hover:text-purple-600 transition-colors">
            {isEnglish ? 'Test Result' : '测试结果'}
          </Link>
          <Link href={prependEn("/types")} className="text-gray-600 hover:text-purple-600 transition-colors">
            {isEnglish ? 'Personality Types' : '类型介绍'}
          </Link>
          <Link href={prependEn("/careers")} className="text-gray-600 hover:text-purple-600 transition-colors">
            {isEnglish ? 'Career Advice' : '职业建议'}
          </Link>
          <Link href={prependEn("/relationships")} className="text-gray-600 hover:text-purple-600 transition-colors">
            {isEnglish ? 'Relationship Matching' : '关系匹配'}
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
          >
            {isEnglish ? '中文' : 'English'}
          </button>
          
          <button className="hidden md:block px-4 py-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors">
            {isEnglish ? 'Login' : '登录'}
          </button>
          <button className="md:hidden text-gray-800 text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href={prependEn("/")} className="block text-gray-600 hover:text-purple-600">
              {isEnglish ? 'Home' : '首页'}
            </Link>
            <Link href={prependEn("/mbti-result")} className="block text-gray-600 hover:text-purple-600">
              {isEnglish ? 'Test Result' : '测试结果'}
            </Link>
            <Link href={prependEn("/types")} className="block text-gray-600 hover:text-purple-600">
              {isEnglish ? 'Personality Types' : '类型介绍'}
            </Link>
            <Link href={prependEn("/careers")} className="block text-gray-600 hover:text-purple-600">
              {isEnglish ? 'Career Advice' : '职业建议'}
            </Link>
            <Link href={prependEn("/relationships")} className="block text-gray-600 hover:text-purple-600">
              {isEnglish ? 'Relationship Matching' : '关系匹配'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
