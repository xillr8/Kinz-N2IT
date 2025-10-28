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
            className="text-4xl font-extrabold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We're Not Just DJs, We're Music Curators
          </motion.h2>
          
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
          Immerse yourself in the electrifying beats of N2IT PRODUCTIONS, St. Petersburg's premier DJ service. We ignite the dance floor with high-energy EDM, tailoring each performance to the pulse of your special event. Serving St. Petersburg and surrounding Tampa Bay area, Sarasota and Bradenton. We provide services for a wide range of events including parties, weddings, festivals, club appearances, corporate events and more.
          You can trust us to create an unforgettable experience. Our expertise, passion, and custom sound design promise to make any occasion extraordinary. Book N2IT PRODUCTIONS today and elevate your next event to an unforgettable masterpiece of sound and energy.
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
              desc: "Weddings, private parties, and corporate events — we bring the sound and style tailored to your vision, creating an unforgettable experience."
            },
            {
              title: "Event Production",
              desc: "Top-tier sound systems, intelligent lighting, and FX that transform any venue into a high-energy atmosphere."
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

         <div className="px-4 py-12 max-w-6xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#7d26cd] text-center">
    What you get when you book N2IT
  </h2>

  {/* Block 1: Right aligned */}
  <div className="flex flex-col md:flex-row md:justify-end mb-12">
    <div className="md:w-1/2 bg-[#f3e8ff] p-6 rounded-xl shadow-lg text-gray-800 text-lg leading-relaxed">
      <h3 className="font-bold text-xl mb-2 text-[#7d26cd]">
        Expertise in Music Curation and Mixing
      </h3>
      <p>
        Our DJs are seasoned professionals who understand the art of reading a crowd. Whether it’s a deep house groove, an energetic trance build-up, or a bass-heavy dubstep drop, every transition is timed to perfection. We blend genres seamlessly to keep energy levels high while maintaining flow and coherence.
      </p>
    </div>
  </div>

  {/* Block 2: Left aligned */}
  <div className="flex flex-col md:flex-row md:justify-start mb-12">
    <div className="md:w-1/2 bg-[#e0f7fa] p-6 rounded-xl shadow-lg text-gray-800 text-lg leading-relaxed">
      <h3 className="font-bold text-xl mb-2 text-[#007c91]">
        State-of-the-Art Equipment and Sound Design
      </h3>
      <p>
        Sound quality defines an event’s impact. Our team uses industry-leading Pioneer DJ systems, digital mixers, and advanced sound reinforcement setups to ensure crystal-clear audio and powerful bass. Each event is fine-tuned using acoustic analysis and professional-grade speakers to ensure immersive sound delivery.
      </p>
    </div>
  </div>

  {/* Block 3: Right aligned */}
  <div className="flex flex-col md:flex-row md:justify-end">
    <div className="md:w-1/2 bg-[#f3e8ff] p-6 rounded-xl shadow-lg text-gray-800 text-lg leading-relaxed">
      <h3 className="font-bold text-xl mb-2 text-[#7d26cd]">
        Seamless Event Management and Coordination
      </h3>
      <p>
        From lighting to stage setup, our in-house coordinators handle every detail. We collaborate with event planners, photographers, and venue managers to ensure the music matches the moment—perfectly.
      </p>
    </div>
  </div>
</div>

   {/* Tracks Section */}
      <TracksSection />

      {/* Booking CTA */}
<section className="p-8 max-w-4xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-4 text-[#00BFC2]">
    Book N2IT For Your Next Event
  </h2>
  <p className="text-gray-300 mb-6">
    Fill out our quick booking form and let’s create an unforgettable experience.
  </p>
 </section>

 {/* Booking Form Section */}
<section id="booking-form" className="bg-black py-16 px-6 flex flex-col items-center justify-center text-center">
  <h2 className="text-4xl font-bold text-[#00BFC2] mb-8">Book Your Event</h2>

  <form
    action="https://formspree.io/f/mnngzozq"
    method="POST"
    className="w-full max-w-lg bg-gray-900 bg-opacity-90 p-8 rounded-2xl shadow-lg space-y-6"
  >
    <div className="flex flex-col text-left">
      <label className="text-gray-300 mb-2 font-semibold">Name</label>
      <input
        type="text"
        name="name"
        required
        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00BFC2] transition-all duration-300"
      />
    </div>

    <div className="flex flex-col text-left">
      <label className="text-gray-300 mb-2 font-semibold">Email</label>
      <input
        type="email"
        name="email"
        required
        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00BFC2] transition-all duration-300"
      />
    </div>

    <div className="flex flex-col text-left">
      <label className="text-gray-300 mb-2 font-semibold">Event Date</label>
      <input
        type="date"
        name="event_date"
        required
        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00BFC2] transition-all duration-300"
      />
    </div>

    <div className="flex flex-col text-left">
      <label className="text-gray-300 mb-2 font-semibold">Message</label>
      <textarea
        name="message"
        placeholder="Tell us about your event..."
        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#00BFC2] transition-all duration-300"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-[#00BFC2] text-black font-bold rounded-full hover:bg-[#00e0e4] transition-all duration-300 shadow-md hover:shadow-lg"
    >
      Send Message
    </button>
  </form>
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
