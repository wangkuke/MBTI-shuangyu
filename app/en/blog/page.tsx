import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="bg-white font-sans text-dark">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
          <p className="text-dark/70 text-center">Read our latest articles and insights on personality types and related topics.</p>
          {/* Add blog posts list here */}
        </div>
      </main>

      <Footer />
    </div>
  )
} 