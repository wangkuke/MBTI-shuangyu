import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CareersPage() {
  const careersByType = {
    INTJ: ["Software Architect", "Strategic Planner", "Investment Analyst", "Scientific Researcher"], // Translated careers
    INTP: ["Research Scientist", "Software Development Engineer", "Data Analyst", "Theoretical Physicist"], // Translated careers
    ENTJ: ["CEO", "Management Consultant", "Investment Banker", "Entrepreneur"], // Translated careers
    ENTP: ["Innovation Consultant", "Marketing Director", "Product Manager", "Venture Capitalist"], // Translated careers
    INFJ: ["Psychological Counselor", "Human Resources Director", "Non-profit Organization Leader", "Writer"], // Translated careers
    INFP: ["Creative Writer", "Psychotherapist", "Social Worker", "Art Therapist"], // Translated careers
    ENFJ: ["Trainer", "Educational Administrator", "Public Relations Director", "Team Coach"], // Translated careers
    ENFP: ["Creative Director", "Marketing Specialist", "Human Resources Specialist", "Journalist"], // Translated careers
    ISTJ: ["Accountant", "Project Management", "Quality Control", "Bank Manager"], // Translated careers
    ISFJ: ["Nurse", "Elementary School Teacher", "HR Specialist", "Customer Service Manager"], // Translated careers
    ESTJ: ["Operations Director", "Sales Manager", "Government Official", "Military Officer"], // Translated careers
    ESFJ: ["Human Resources Manager", "Event Planner", "Customer Relationship Manager", "Community Service"], // Translated careers
    ISTP: ["Mechanical Engineer", "Software Tester", "Pilot", "Technical Support"], // Translated careers
    ISFP: ["Graphic Designer", "Photographer", "Veterinarian", "Massage Therapist"], // Translated careers
    ESTP: ["Sales Representative", "Real Estate Agent", "Sports Coach", "EMT"], // Translated careers
    ESFP: ["Actor", "Event Host", "Travel Consultant", "Child Educator"], // Translated careers
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Career Suggestions</h1> {/* Translated title */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most suitable career paths and development directions based on your MBTI personality type
            </p> {/* Translated description */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(careersByType).map(([type, careers]) => (
              <div key={type} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{type}</div>
                </div>
                <div className="space-y-2">
                  {careers.map((career, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Career Development Advice</h2> {/* Translated title */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Understand Yourself</h3> {/* Translated title */}
                <p className="text-gray-600">Gain a deep understanding of your personality traits, strengths, and areas for development to provide a foundation for career choices</p> {/* Translated description */}
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Leverage Your Strengths</h3> {/* Translated title */}
                <p className="text-gray-600">Choose career fields that allow you to utilize your natural strengths, making work a source of energy for you</p> {/* Translated description */}
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Continuous Growth</h3> {/* Translated title */}
                <p className="text-gray-600">Focus on personal development space and continuously improve your abilities through learning and practice</p> {/* Translated description */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

