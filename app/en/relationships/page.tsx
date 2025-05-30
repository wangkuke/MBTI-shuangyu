import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RelationshipsPage() {
  const compatibilityData = {
    INTJ: { best: ["ENFP", "ENTP"], good: ["INFJ", "INFP"], challenging: ["ESFJ", "ISFJ"] },
    INTP: { best: ["ENFJ", "ENTJ"], good: ["INFJ", "INTJ"], challenging: ["ESFJ", "ESTJ"] },
    ENTJ: { best: ["INFP", "INTP"], good: ["ENFJ", "ENFP"], challenging: ["ISFP", "ISFJ"] },
    ENTP: { best: ["INFJ", "INTJ"], good: ["ENFP", "ENFJ"], challenging: ["ISTJ", "ISFJ"] },
    INFJ: { best: ["ENTP", "ENFP"], good: ["INTJ", "INFP"], challenging: ["ESTP", "ESFP"] },
    INFP: { best: ["ENFJ", "ENTJ"], good: ["INFJ", "ENFP"], challenging: ["ESTJ", "ESFJ"] },
    ENFJ: { best: ["INFP", "ISFP"], good: ["ENFP", "INFJ"], challenging: ["ISTP", "ESTP"] },
    ENFP: { best: ["INTJ", "INFJ"], good: ["ENFJ", "INFP"], challenging: ["ISTJ", "ESTJ"] },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Relationship Compatibility</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand the dynamics of relationships between different MBTI types to build more harmonious connections
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {Object.entries(compatibilityData).map(([type, compatibility]) => (
              <div key={type} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{type}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-green-600 mb-2 flex items-center">
                      <span className="mr-2">💚</span>
                      Best Matches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {compatibility.best.map((matchType) => (
                        <span key={matchType} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {matchType}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center">
                      <span className="mr-2">💙</span>
                      Good Matches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {compatibility.good.map((matchType) => (
                        <span key={matchType} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {matchType}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-orange-600 mb-2 flex items-center">
                      <span className="mr-2">🧡</span>
                      Challenging Matches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {compatibility.challenging.map((matchType) => (
                        <span key={matchType} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                          {matchType}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Relationship Advice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Understand Differences</h3>
                <p className="text-gray-600 text-sm">Accept and appreciate each other's personality differences as complementary strengths in the relationship</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Effective Communication</h3>
                <p className="text-gray-600 text-sm">Adjust communication styles based on each other's personality traits to ensure accurate information exchange</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Shared Goals</h3>
                <p className="text-gray-600 text-sm">Establish shared values and goals to provide a stable foundation for relationship development</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mutual Growth</h3>
                <p className="text-gray-600 text-sm">Support each other's personal development and achieve mutual growth and progress in the relationship</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
