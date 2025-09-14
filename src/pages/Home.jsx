import React from 'react';

const categories = [
  'Ethnic Wear',
  'Casual',
  'Formal',
  'Accessories',
];

const testimonials = [
  { name: 'Aisha', review: 'Loved the variety and quality. Highly recommended!' },
  { name: 'Ravi', review: 'Super smooth renting process. Will use again.' },
  { name: 'Meera', review: 'Great for last-minute events. Affordable too!' },
];

function Home() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-gray-900 text-white">
        {/* Background Image */}
        <img
          src="/images/hero-fashion.jpg"
          alt="Fashion Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow">
            Rent, Wear, Repeat
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl drop-shadow">
            Discover trending styles to rent — or list your own wardrobe and start earning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/services"
              className="bg-blue-500 px-6 py-3 rounded-md text-white hover:bg-blue-600 transition"
            >
              Rent Clothes
            </a>
            <a
              href="/list-your-clothes"
              className="border border-blue-400 px-6 py-3 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
            >
              Give on Rent
            </a>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, i) => (
            <a
              key={i}
              href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-gray-800 p-4 rounded hover:shadow-lg transition"
            >
              <img
                src={`/images/${category.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                alt={category}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{category}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* How Renting Works */}
      <section className="py-16 px-6 bg-gray-800 text-white">
        <h2 className="text-3xl font-semibold text-center mb-12">How Renting Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
          <div>
            <div className="text-blue-400 text-4xl mb-2">🛍️</div>
            <h3 className="text-xl font-bold">1. Choose</h3>
            <p className="text-gray-400">Browse and select the outfit you love.</p>
          </div>
          <div>
            <div className="text-blue-400 text-4xl mb-2">📦</div>
            <h3 className="text-xl font-bold">2. Rent</h3>
            <p className="text-gray-400">Rent it for a few days or a week.</p>
          </div>
          <div>
            <div className="text-blue-400 text-4xl mb-2">↩️</div>
            <h3 className="text-xl font-bold">3. Return</h3>
            <p className="text-gray-400">Return it hassle-free after use.</p>
          </div>
        </div>
      </section>

      {/* How Giving on Rent Works */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Earn by Renting Out Your Clothes</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
          <div>
            <div className="text-green-400 text-4xl mb-2">🧺</div>
            <h3 className="text-xl font-bold">1. Upload</h3>
            <p className="text-gray-400">List your outfit with photos, size, and rent price.</p>
          </div>
          <div>
            <div className="text-green-400 text-4xl mb-2">✅</div>
            <h3 className="text-xl font-bold">2. Approve</h3>
            <p className="text-gray-400">Accept requests and confirm availability.</p>
          </div>
          <div>
            <div className="text-green-400 text-4xl mb-2">💰</div>
            <h3 className="text-xl font-bold">3. Earn</h3>
            <p className="text-gray-400">Get paid after each successful rental.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-800 text-white">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded shadow hover:shadow-lg transition"
            >
              <p className="italic text-gray-300 mb-4">"{t.review}"</p>
              <h4 className="text-blue-400 font-bold">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA for renters and lenders */}
      <section className="py-12 mt-3 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join 10,000+ people renting smarter!
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/signup"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href="/list-your-clothes"
            className="border border-white px-6 py-3 rounded text-white hover:bg-blue-700 transition"
          >
            List Your Clothes
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
