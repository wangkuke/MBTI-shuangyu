import { mbtiTypes } from "@/data/mbti-types"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ENFJPage() {
  const enfjData = mbtiTypes.ENFJ
  
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
            <div className="text-6xl font-bold text-purple-600 mb-4">ENFJ</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{enfjData.name}</h1>
            <p className="text-xl text-purple-600 mb-6">"{enfjData.nickname}"</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{enfjData.description}</p>
            </div>
          </div>
          
          {/* 概述 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">概述</h2>
            <div className="text-gray-700 space-y-4">
              <p>主人公型人格（ENFJ、Protagonist Personality）是16型人格（mbti16）中的一种人格类型。其中E代表外向，N代表直觉，F代表情感，J代表判断。</p>
              <p>ENFJ型人格约占总人口的2-3%，是较为罕见的人格类型。他们以其天生的领导能力、强烈的同理心和出色的沟通技巧而闻名。</p>
              <p>主人公人格类型的人富有魅力、鼓舞人心的领导者，能够吸引听众，他们关心他人的成长和发展，善于发现并激发他人的潜能。</p>
            </div>
          </div>
          
          {/* 人格特征 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">人格特征</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">天生的领导者和激励者</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">高度重视他人的成长和发展</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">追求真实和有意义的人际关系</span>
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
                {enfjData.strengths.map((strength, index) => (
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
                {enfjData.weaknesses.map((weakness, index) => (
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
              <p className="text-gray-700">教育、心理咨询、人力资源、公共关系、非营利组织、社会工作、医疗保健及其他能够帮助他人成长和发展的领域。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">偏好的典型职业</h3>
              <p className="text-gray-700">教师、培训师、咨询师、人力资源经理、政治家、社会工作者、牧师、演讲家、职业教练、组织发展顾问、公关专家、医疗服务管理者。</p>
            </div>
          </div>
          
          {/* 人际关系 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-pink-500 mr-2">❤️</span>
              人际关系
            </h2>
            <ul className="space-y-2">
              {enfjData.relationships.map((relationship, index) => (
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
              {enfjData.famous.map((person, index) => (
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