import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Assuming you use react-icons

export default function ContactUsPage() {
  return (
    <div className="bg-white font-sans text-dark">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-dark/70 max-w-2xl mx-auto text-lg text-center mb-12">
            We'd love to hear from you. Please feel free to reach out with any questions or inquiries.
          </p>

          <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8 space-y-6">
            <div className="flex items-center space-x-4">
              {/* <FaEnvelope className="text-primary text-2xl" /> Assuming react-icons */}
              <i className="fa fa-envelope text-primary text-2xl"></i> {/* Using font-awesome as in navigation */}
              <span className="text-dark/70">contact@16personalities.com</span>
            </div>
            <div className="flex items-center space-x-4">
              {/* <FaPhone className="text-primary text-2xl" /> Assuming react-icons */}
               <i className="fa fa-phone text-primary text-2xl"></i> {/* Using font-awesome as in navigation */}
              <span className="text-dark/70">+86 123 4567 8910</span> {/* Keep the original number for now */}
            </div>
            <div className="flex items-start space-x-4">
              {/* <FaMapMarkerAlt className="text-primary text-2xl mt-1" /> Assuming react-icons */}
              <i className="fa fa-map-marker-alt text-primary text-2xl mt-1"></i> {/* Using font-awesome as in navigation */}
              <span className="text-dark/70">Building 88, Jianguo Road, Chaoyang District, Beijing City</span> {/* Direct translation of address */}
            </div>
          </div>

          {/* Optionally add a contact form here */}

        </div>
      </main>

      <Footer />
    </div>
  )
} 