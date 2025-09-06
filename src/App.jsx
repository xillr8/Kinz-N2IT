import React from "react";
import { motion } from "framer-motion";
import Button from "./components/Button";
import Card from "./components/Card";
import CardContent from "./components/CardContent";
import TracksSection from "./components/TracksSection";

export default function N2ITProductions() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Header */}
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

      {/* Hero Section */}
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

        <div className="absolute z-10 inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <motion.h2
            className="text-4xl font-extrabold mb-4 text-[#00BFC2]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tampa Bay’s Premier EDM DJ Service
          </motion.h2>
          <p className="text-lg text-gray-300 mb-6">
            Elevating your event with high-energy sets, unforgettable vibes, and cutting-edge event production.
          </p>
          <a href="tel:+19412180625">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-6 py-3 rounded-full">
            CONTACT US
          </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#7d26cd]">About N2IT</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          St. Pete’s premier EDM DJ bringing high-energy beats to weddings, parties, clubs, festivals, and more. We tailor every performance to your vibe, creating unforgettable moments across Tampa Bay, Brandon, Bradenton, Sarasota, and venues across Florida. Book now and turn your next event into an unforgettable experience.
        </p>
      </section>

      {/* Services Section */}
      <section className="p-8 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Live DJ Sets",
              desc: "From deep house to drum & bass, trance to techno, we read the crowd and create the perfect vibe, with seamless mixes and deep bass, we'll keep your guests dancing all night long."
            },
            {
              title: "Event DJ Services",
              desc: "Weddings, private parties, club nights and corporate events — we bring the sound and style tailored to your vision, creating an unforgettable experience."
            },
            {
              title: "Custom Music Production",
              desc: "Need an exclusive drop or remix? We’ve got the studio magic to make your sound one of a kind."
            }
          ].map(({ title, desc }) => (
            <Card key={title} className="bg-black border-gray-700 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#00BFC2]">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="service-areas" className="bg-[#1a1a1a] text-white font-sans py-16 text-center px-4 mt-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">📍 Our Service Areas</h2>
            <p className="text-base text-gray-300 mb-6 leading-relaxed">
              We proudly serve the entire Tampa Bay Area, including:
            </p>
            <ul className="text-[#00BFC2] font-semibold space-y-2 text-lg">
              <li>St. Petersburg</li>
              <li>Tampa Bay Area</li>
              <li>Brandon</li>
              <li>Bradenton</li>
              <li>Sarasota</li>
              <li>Plus surrounding cities and venues across the state of Florida</li>
            </ul>
            <p className="text-base text-gray-300 mt-6 leading-relaxed">
              No matter where your event is, <span className="font-semibold text-white">we bring the beats to you.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <TracksSection />

      {/* Booking CTA */}
      <section className="p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#7d26cd]">Book N2IT For Your Next Event</h2>
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
