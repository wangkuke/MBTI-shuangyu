import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TypeCard } from "@/components/type-card"
import { mbtiTypes } from "../data/mbti-types"

export default function TypesPage() {
  const typeCategories = {
    analysts: ["INTJ", "INTP", "ENTJ", "ENTP"],
    diplomats: ["INFJ", "INFP", "ENFJ", "ENFP"],
    sentinels: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
    explorers: ["ISTP", "ISFP", "ESTP", "ESFP"],
  }

  const categoryNames = {
    analysts: "Analysts",
    diplomats: "Diplomats",
    sentinels: "Sentinels",
    explorers: "Explorers",
  }

  const categoryDescriptions = {
    analysts: "Rational, independent perfectionists who pursue knowledge and ability",
    diplomats: "Empathetic, cooperative, always seeking harmony and growth",
    sentinels: "Practical, fact-oriented, reliable, and stable collaborators",
    explorers: "Spontaneous, resourceful, adaptable, and flexible",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">16 Personality Types</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the 16 personality types of MBTI, and learn about the characteristics, strengths, and development directions of each type
            </p>
          </div>

          {Object.entries(typeCategories).map(([category, types]) => (
            <section key={category} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {categoryNames[category as keyof typeof categoryNames]}
                </h2>
                <p className="text-lg text-gray-600">
                  {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {types.map((type) => (
                  <TypeCard key={type} type={type} data={mbtiTypes[type as keyof typeof mbtiTypes]} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
