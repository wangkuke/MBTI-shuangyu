import { mbtiTypes } from "@/data/mbti-types"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function INTJPage() {
  const intjData = mbtiTypes.INTJ
  
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
            <div className="text-6xl font-bold text-purple-600 mb-4">INTJ</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{intjData.name}</h1>
            <p className="text-xl text-purple-600 mb-6">"{intjData.nickname}"</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{intjData.description}</p>
            </div>
          </div>
          
          {/* 概述 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">概述</h2>
            <div className="text-gray-700 space-y-4">
              <p>建筑师型人格（INTJ、Architect Personality）是16型人格（mbti16）中的一种人格类型。其中I代表内倾，N代表直觉，T代表理智，J代表独立。</p>
              <p>建筑师型人格作为人数稀少且战略能力最强的人格类型之一，仅占人口的2%。这让他们很难找到志同道合能够与其过人的智慧和审慎的思考方式比肩的同类。</p>
              <p>建筑师人格类型的人想象力丰富却很果断，雄心壮志但注重隐私，充满好奇心但从不浪费精力。</p>
            </div>
          </div>
          
          {/* 人格特征 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">人格特征</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">正确的态度可以达到任何目标</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">有关原则的事，绝不动摇</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">人在独处的时候才能思考更多</span>
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
                {intjData.strengths.map((strength, index) => (
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
                {intjData.weaknesses.map((weakness, index) => (
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
              <p className="text-gray-700">商业、金融、技术、教育、健康保障、医药及专业性、创造性职业领域。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">偏好的典型职业</h3>
              <p className="text-gray-700">知识产权律师、管理顾问、经济学者、国际银行业务职员、证券投资和金融分析专家、设计工程师、程序员、各类科学家、技术专家、财务专家、建筑师信息系统开发商、综合网络专业人员。</p>
            </div>
          </div>
          
          {/* 人际关系 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-pink-500 mr-2">❤️</span>
              人际关系
            </h2>
            <ul className="space-y-2">
              {intjData.relationships.map((relationship, index) => (
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
              {intjData.famous.map((person, index) => (
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