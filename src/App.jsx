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
            LET'S GET N2IT
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

     {/* SERVICES SECTION */}
<div className="px-4 py-12 max-w-6xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#7d26cd] text-center">
    Our Services
  </h2>

  {/* Service 1: Text Right / Image Left */}
  <div className="flex flex-col md:flex-row items-center mb-16">
    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
      <img
        src="/images/service-live-dj.jpg"
        alt="Live EDM DJ Sets"
        className="w-full rounded-2xl shadow-xl object-cover"
      />
    </div>
    <div className="md:w-1/2 text-gray-200 text-lg leading-relaxed">
      <h3 className="font-bold text-2xl mb-3 text-[#7d26cd]">
        Live EDM DJ Sets
      </h3>
      <p>
        High-energy, crowd-reading sets spanning house, trance, bass, and 
        festival-ready drops. We shape the arc of your night so the floor 
        stays lit from open to close.
      </p>
    </div>
  </div>

  {/* Service 2: Text Left / Image Right */}
  <div className="flex flex-col md:flex-row-reverse items-center mb-16">
    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
      <img
        src="/images/service-event-dj.jpg"
        alt="Event DJ Services"
        className="w-full rounded-2xl shadow-xl object-cover"
      />
    </div>
    <div className="md:w-1/2 text-gray-200 text-lg leading-relaxed">
      <h3 className="font-bold text-2xl mb-3 text-[#00bfc2]">
        Event DJ Services
      </h3>
      <p>
        Weddings, clubs, corporate events, and private parties—pro-grade 
        sound, seamless transitions, and curated playlists tailored to 
        your crowd and venue.
      </p>
    </div>
  </div>

  {/* Service 3: Text Right / Image Left */}
  <div className="flex flex-col md:flex-row items-center mb-16">
    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
      <img
        src="/images/service-production.jpg"
        alt="Music Production"
        className="w-full rounded-2xl shadow-xl object-cover"
      />
    </div>
    <div className="md:w-1/2 text-gray-200 text-lg leading-relaxed">
      <h3 className="font-bold text-2xl mb-3 text-[#7d26cd]">
        Music Production
      </h3>
      <p>
        Custom edits, remixes, and original tracks for performers, creators, 
        and brands—delivered mix/master ready for streaming, performance, 
        or promo.
      </p>
    </div>
  </div>

  {/* Service 4: Text Left / Image Right */}
  <div className="flex flex-col md:flex-row-reverse items-center">
    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
      <img
        src="/images/service-lighting-fx.jpg"
        alt="Lighting & FX"
        className="w-full rounded-2xl shadow-xl object-cover"
      />
    </div>
    <div className="md:w-1/2 text-gray-200 text-lg leading-relaxed">
      <h3 className="font-bold text-2xl mb-3 text-[#00bfc2]">
        Lighting & FX
      </h3>
      <p>
        Dynamic lighting, haze, and visual FX synced to the music to elevate 
        the atmosphere and bring festival-level energy to any room.
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

   <footer className="bg-gray-800 p-6 mt-12">
  <div className="flex flex-col items-center space-y-2">

    <p className="text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} N2IT PRODUCTIONS. All rights reserved.
    </p>

    <p className="text-gray-500 text-sm tracking-wide">
      Website designed & developed by{" "}
      <span className="text-[#00BFC2] font-semibold">Digisphere</span>
    </p>
   </div>
  </footer>
      
   </div>
  );
 }
