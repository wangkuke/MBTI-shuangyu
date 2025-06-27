import { mbtiTypes } from "@/data/mbti-types"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ISTJPage() {
  const istjData = mbtiTypes.ISTJ
  
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
            <div className="text-6xl font-bold text-purple-600 mb-4">ISTJ</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{istjData.name}</h1>
            <p className="text-xl text-purple-600 mb-6">"{istjData.nickname}"</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{istjData.description}</p>
            </div>
          </div>
          
          {/* 概述 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">概述</h2>
            <div className="text-gray-700 space-y-4">
              <p>物流师型人格（ISTJ、Inspector Personality）是16型人格（mbti16）中的一种人格类型。其中I代表内倾，S代表实感，T代表理智，J代表判断。</p>
              <p>ISTJ型人格是最常见的人格类型之一，约占总人口的13%。他们以其可靠、实际和严谨的特质而著称，通常被视为社会的中坚力量。</p>
              <p>物流师人格类型的人实用主义的逻辑学家，忠诚可靠，不会拒绝任何有用的事物，他们重视传统和秩序，追求稳定和安全。</p>
            </div>
          </div>
          
          {/* 人格特征 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">人格特征</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">重视传统和忠诚</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">实际、有序、负责任</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">决定自己该做什么，并坚定不移地完成</span>
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
                {istjData.strengths.map((strength, index) => (
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
                {istjData.weaknesses.map((weakness, index) => (
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
              <p className="text-gray-700">金融、会计、法律、医疗、工程、军事、执法、行政管理及其他需要细致、精确和可靠性的领域。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">偏好的典型职业</h3>
              <p className="text-gray-700">会计师、审计师、银行家、工程师、法官、医生、管理员、军官、法律顾问、数据分析师、项目经理、质量控制专家。</p>
            </div>
          </div>
          
          {/* 人际关系 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-pink-500 mr-2">❤️</span>
              人际关系
            </h2>
            <ul className="space-y-2">
              {istjData.relationships.map((relationship, index) => (
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
              {istjData.famous.map((person, index) => (
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