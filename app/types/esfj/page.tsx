import { mbtiTypes } from "@/data/mbti-types"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ESFJPage() {
  const esfjData = mbtiTypes.ESFJ
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            href="/types" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回所有类型
          </Link>
          
          {/* 类型标题 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center">
            <div className="text-6xl font-bold text-purple-600 mb-4">ESFJ</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{esfjData.name}</h1>
            <p className="text-xl text-purple-600 mb-6">"{esfjData.nickname}"</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{esfjData.description}</p>
            </div>
          </div>
          
          {/* 概述 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">概述</h2>
            <div className="text-gray-700 space-y-4">
              <p>执政官型人格（ESFJ、Consul Personality）是16型人格（mbti16）中的一种人格类型。其中E代表外向，S代表实感，F代表情感，J代表判断。</p>
              <p>ESFJ型人格是最受欢迎的人格类型之一，约占总人口的12%。他们以其热情、友善和乐于助人的特质而闻名，常常成为社区和组织的中坚力量。</p>
              <p>执政官人格类型的人极有同情心、受欢迎、总是热心帮助他人，他们重视传统和稳定，善于创造和谐的环境。</p>
            </div>
          </div>
          
          {/* 人格特征 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">人格特征</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">热心关怀他人的需求</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">重视和谐与合作</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">坚守传统和社会规范</span>
              </li>
            </ul>
          </div>
          
          {/* 详细分析 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* 优势 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-green-500 mr-2">💪</span>
                性格优势
              </h2>
              <ul className="space-y-2">
                {esfjData.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 发展空间 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-orange-500 mr-2">🎯</span>
                发展空间
              </h2>
              <ul className="space-y-2">
                {esfjData.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* 职业信息 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">职业发展</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">偏好的工作领域</h3>
              <p className="text-gray-700">医疗保健、教育、社会服务、客户服务、人力资源、公共关系及其他需要人际交往和关怀他人的领域。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">偏好的典型职业</h3>
              <p className="text-gray-700">护士、教师、社会工作者、人力资源经理、销售代表、活动策划师、客户服务、公关专员、行政助理、医疗服务协调员。</p>
            </div>
          </div>
          
          {/* 人际关系 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-pink-500 mr-2">❤️</span>
              人际关系
            </h2>
            <ul className="space-y-2">
              {esfjData.relationships.map((relationship, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-pink-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{relationship}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 名人代表 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              同类型名人
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {esfjData.famous.map((person, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">👤</div>
                  <p className="text-sm font-medium text-gray-800">{person}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 