// src/App.jsx
import React from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from './components/ui/card.jsx';
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="p-6 bg-gradient-to-r from-purple-700 to-pink-500 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">N2IT PRODUCTIONS</h1>
          <Button className="bg-white text-black hover:bg-gray-200">Book Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full h-[60vh] overflow-hidden relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          src="https://player.vimeo.com/external/620019474.sd.mp4?s=aaefea8b172ffb4a355c26a64dbfdc116cf19e0e&profile_id=164&oauth2_token_id=57447761"
        />
        <div className="absolute z-10 inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <motion.h2
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tampa Bay’s Premier EDM DJ Service
          </motion.h2>
          <p className="text-lg text-gray-300 mb-6">
            Elevating your event with high-energy sets, unforgettable vibes, and cutting-edge music production.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-6 py-3 rounded-full">
            Let’s Get N2IT <Sparkles className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Bio Section */}
      <section className="p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meet the Sound Behind N2IT</h2>
        <p className="text-gray-300">
          N2IT PRODUCTIONS is the heartbeat of Florida’s EDM scene. Based in St. Petersburg/Tampa Bay,
          we’re known for explosive DJ sets, immersive production, and an uncompromising dedication to
          sound design that transforms any event into a sonic journey.
        </p>
      </section>

      {/* Services Section */}
      <section className="p-8 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Club & Festival Sets",
              desc: "Bringing the energy to every crowd with bass-pumping beats and seamless transitions."
            },
            {
              title: "Private Events",
              desc: "From beach parties to weddings — we turn every gathering into a full-blown rave."
            },
            {
              title: "Custom Music Production",
              desc: "Need an exclusive drop or remix? We’ve got the studio magic to make your sound one of a kind."
            }
          ].map(({ title, desc }) => (
            <Card key={title} className="bg-black border-pink-500 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-pink-400">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section className="p-8 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Popular Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((track) => (
            <Card key={track} className="bg-gray-800 border border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-pink-400">Track Title {track}</h3>
                <p className="text-gray-400">Short description or vibe of this track.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Book N2IT For Your Next Event</h2>
        <p className="text-gray-300 mb-6">
          Fill out our quick booking form and let’s create an unforgettable experience together.
        </p>
        <Button className="bg-white text-black hover:bg-gray-300 text-lg px-6 py-3 rounded-full">
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


