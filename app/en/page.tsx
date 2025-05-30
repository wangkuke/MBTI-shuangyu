import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-white font-sans text-dark">
      <Navigation />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Title Section - Based on Screenshot */}
          <section className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 leading-tight text-shadow">
              Discover the <span className="text-primary">Real You</span> and Unlock Your <span className="text-secondary">Potential</span>
            </h2>
            <p className="text-dark/70 max-w-2xl mx-auto text-lg mb-8">
              The leading MBTI test used by millions, based on Jung's psychological types and the research of Briggs & Myers.
            </p>
            {/* Add some stats or icons here if needed, similar to the Chinese version */}
             <div className="flex justify-center items-center space-x-4 text-dark/60">
              <div className="flex items-center">
                <i className="fa fa-users mr-2"></i>
                <span>Over 1 billion participants worldwide</span> {/* Example stat from Chinese homepage */}
              </div>
              <div className="h-4 w-px bg-dark/20"></div>
              <div className="flex items-center">
                <i className="fa fa-check-circle mr-2"></i>
                <span>Scientifically validated psychological assessment</span> {/* Example stat */}
              </div>
            </div>
          </section>

          {/* Test Version Selection - Based on Screenshot */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
             {/* Standard Version Card */}
             <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 card-hover">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-2xl font-bold mb-2">Standard</h3>
                   <p className="text-dark/60">93 questions</p>
                 </div>
                 <div className="text-3xl text-primary">
                   <i className="fa fa-star-o"></i>
                 </div>
               </div>
               <div className="space-y-4 mb-6">
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Basic personality type analysis</span></div>
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Career tendency suggestions</span></div>
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Relationship matching analysis</span></div>
                 <div className="flex items-center text-dark/40"><i className="fa fa-times mr-3"></i><span>Detailed cognitive functions</span></div>
                 <div className="flex items-center text-dark/40"><i className="fa fa-times mr-3"></i><span>Development report</span></div>
               </div>
               {/* Add stats if needed */}
               <div className="pt-6 border-t border-gray-100">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-dark/60">Tested in last 30 days</span>
                   <span className="font-bold">123,456</span> {/* Example stat */}
                 </div>
                 {/* Progress bar if needed */}
                 <div className="w-full bg-gray-200 rounded-full h-2">
                   <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                 </div>
               </div>
               <Link href="/en/test?version=standard" className="block w-full py-3 mt-6 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors text-center">
                 Choose Standard Test
               </Link>
             </div>

             {/* Professional Version Card */}
             <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 card-hover">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-2xl font-bold mb-2">Professional</h3>
                   <p className="text-dark/60">145 questions</p>
                 </div>
                 <div className="text-3xl text-secondary">
                   <i className="fa fa-star-half-o"></i>
                 </div>
               </div>
               <div className="space-y-4 mb-6">
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Basic personality type analysis</span></div>
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Career tendency suggestions</span></div>
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Relationship matching analysis</span></div>
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Detailed cognitive functions</span></div>
                 <div className="flex items-center text-dark/40"><i className="fa fa-times mr-3"></i><span>Development report</span></div>
               </div>
               {/* Add stats if needed */}
               <div className="pt-6 border-t border-gray-100">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-dark/60">Tested in last 30 days</span>
                   <span className="font-bold">234,567</span> {/* Example stat */}
                 </div>
                 {/* Progress bar if needed */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                   <div className="bg-secondary h-2 rounded-full" style={{ width: '80%' }}></div>
                 </div>
               </div>
               <Link href="/en/test?version=professional" className="block w-full py-3 mt-6 rounded-full border-2 border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition-colors text-center">
                 Choose Professional Test
               </Link>
             </div>

             {/* Complete Version Card */}
             <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary relative card-hover transform md:-translate-y-4">
              <div className="absolute -top-4 right-8 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                 Recommended
               </div>
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-2xl font-bold mb-2">Complete</h3>
                   <p className="text-dark/60">200 questions</p>
                 </div>
                 <div className="text-3xl text-accent">
                   <i className="fa fa-star"></i>
                 </div>
               </div>
                <div className="space-y-4 mb-6">
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Basic personality type analysis</span></div>
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Career tendency suggestions</span></div>
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Relationship matching analysis</span></div>
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Detailed cognitive functions</span></div>
                 <div className="flex items-center"><i className="fa fa-check text-green-500 mr-3"></i><span>Development report</span></div>
               </div>
               {/* Add stats if needed */}
                <div className="pt-6 border-t border-gray-100">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-dark/60">Tested in last 30 days</span>
                   <span className="font-bold">345,678</span> {/* Example stat */}
                 </div>
                 {/* Progress bar if needed */}
                 <div className="w-full bg-gray-200 rounded-full h-2">
                   <div className="bg-accent h-2 rounded-full" style={{ width: '95%' }}></div>
                 </div>
               </div>
               <Link href="/en/test?version=complete" className="block w-full py-3 mt-6 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-center">
                 Choose Complete Test
               </Link>
             </div>
          </section>

          {/* Start Test Button - Based on Screenshot */}
          <section className="text-center">
            <Link
              href="/en/test"
              className="inline-block px-12 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 btn-pulse hover:shadow-primary/30 transition-all"
            >
              Start Test Now
            </Link>
            <p className="mt-4 text-dark/60">
              Estimated time to complete: 15-45 minutes
            </p>
          </section>

          {/* Removed Merged Sections */}

        </div>
      </main>

      <Footer />
    </div>
  )
}

