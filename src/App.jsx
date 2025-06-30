import { motion } from "framer-motion";
import Button from "./components/Button";
import Card from "./components/card";
import CardContent from "./components/CardContent";
import { Sparkles } from "lucide-react"

export default function N2ITProductions() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      <header className="p-6 bg-gradient-to-r from-gray-800 to-black shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img
            src="/images/logo.jpg"
            alt="N2IT Productions Logo"
            className="h-12"
            style={{ cursor: 'pointer' }}
          />
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">Book Now</Button>
        </div>
      </header>

      {/* Hero Section with Loop Video */}
      <section className="w-full h-[60vh] overflow-hidden relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="absolute z-10 inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <motion.h2
            className="text-4xl font-extrabold mb-4 text-teal-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tampa Bay’s Premier EDM DJ Service
          </motion.h2>
          <p className="text-lg text-gray-300 mb-6">
            Elevating your event with high-energy sets, unforgettable vibes, and cutting-edge music production.
          </p>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-6 py-3 rounded-full">
            Let’s Get N2IT <Sparkles className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Bio Section */}
      <section className="px-4 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-400">About N2IT</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          St. Pete’s premier EDM DJ and music production company, bringing high-energy beats to weddings, parties, clubs, festivals, and more. We tailor every performance to your vibe, creating unforgettable moments across Tampa Bay, Brandon, Bradenton, Sarasota, and venues across Florida. Book now and turn your next event into an unforgettable experience.
        </p>
      </section>

      {/* Services Section */}
      <section className="p-8 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Live DJ Sets",
              desc: "From techno to drum & bass, deep house to trance, we read the crowd and create the perfect sound to keep your guests dancing all night long."
            },
            {
              title: "Event DJ Services",
              desc: "From beach parties to weddings — we bring the sound and style tailored to your vision, creating an unforgettable experience for your guests."
            },
            {
              title: "Custom Music Production",
              desc: "Need an exclusive drop or remix? We’ve got the studio magic to make your sound one of a kind."
            }
          ].map(({ title, desc }) => (
            <Card key={title} className="bg-black border-gray-700 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-teal-400">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section className="p-8 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">Popular Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((track) => (
            <Card key={track} className="bg-gray-800 border border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-teal-400">Track Title {track}</h3>
                <p className="text-gray-400">Short description or vibe of this track.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-teal-400">Book N2IT For Your Next Event</h2>
        <p className="text-gray-300 mb-6">Fill out our quick booking form and let’s create an unforgettable experience together.</p>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-6 py-3 rounded-full">
          Book Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 mt-12">
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} N2IT PRODUCTIONS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}





