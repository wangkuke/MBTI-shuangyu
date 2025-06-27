import { mbtiTypes } from "@/data/mbti-types"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function INTPPage() {
  const intpData = mbtiTypes.INTP
  
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
            <div className="text-6xl font-bold text-purple-600 mb-4">INTP</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{intpData.name}</h1>
            <p className="text-xl text-purple-600 mb-6">"{intpData.nickname}"</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{intpData.description}</p>
            </div>
          </div>
          
          {/* 概述 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">概述</h2>
            <div className="text-gray-700 space-y-4">
              <p>思想家型人格（INTP、Logician Personality）是16型人格（mbti16）中的一种人格类型。其中I代表内倾，N代表直觉，T代表理智，P代表探索。</p>
              <p>INTP型人格是所有人格类型中最具有逻辑思维能力的，他们仅占总人口的3%。他们以其丰富的创造力、独特的视角和强大的智力而闻名。</p>
              <p>思想家人格类型的人富有创新精神，对知识有着不可抑制的渴望，喜欢探索理论和抽象概念，并且总是寻求真相和深层次的理解。</p>
            </div>
          </div>
          
          {/* 人格特征 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">人格特征</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">追求逻辑和理性思维</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">对知识和真相有着强烈的追求</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">独立思考，不易受外界影响</span>
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
                {intpData.strengths.map((strength, index) => (
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
                {intpData.weaknesses.map((weakness, index) => (
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
              <p className="text-gray-700">科学、研究、技术、学术、哲学、理论物理学、数学、计算机科学及其他需要深度分析和创新思维的领域。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">偏好的典型职业</h3>
              <p className="text-gray-700">研究科学家、哲学家、数学家、程序员、理论物理学家、心理学家、作家、发明家、系统分析师、大学教授、数据科学家、软件架构师。</p>
            </div>
          </div>
          
          {/* 人际关系 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-pink-500 mr-2">❤️</span>
              人际关系
            </h2>
            <ul className="space-y-2">
              {intpData.relationships.map((relationship, index) => (
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
              {intpData.famous.map((person, index) => (
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