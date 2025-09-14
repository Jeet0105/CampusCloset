import React from 'react';

function About() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">
          About Cloth Rental
        </h1>

        {/* Mission Statement */}
        <p className="text-gray-300 text-lg mb-6 text-center">
          Cloth Rental is India’s first community-driven platform that lets people
          <span className="text-blue-400 font-semibold"> rent fashion </span> —
          whether you're looking to borrow for a special occasion or monetize your
          wardrobe by giving clothes on rent.
        </p>

        {/* Section: What We Offer */}
        <div className="bg-gray-800 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-400">
            We believe fashion should be affordable, sustainable, and accessible to
            everyone. Cloth Rental makes that possible by connecting fashion lovers
            with real wardrobes nearby — enabling rentals and earnings with ease.
          </p>
        </div>

        {/* Platform Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">For Renters</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Rent premium outfits at a fraction of the price</li>
              <li>Access ethnic, formal, and party wear anytime</li>
              <li>Eco-friendly fashion with no long-term commitment</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">For Lenders</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Monetize clothes you rarely wear</li>
              <li>Get exposure through our rental network</li>
              <li>Earn passive income every month</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-4">
            Whether you're dressing up or clearing out — Cloth Rental is for you.
          </p>
          <a
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
          >
            Join the Community
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
