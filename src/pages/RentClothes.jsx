import React from 'react';

const clothes = [
  {
    id: 1,
    name: 'Black Tuxedo',
    category: 'Formal',
    image: '/images/formal.jpg',
    price: 499,
  },
  {
    id: 2,
    name: 'Lehenga Choli',
    category: 'Ethnic Wear',
    image: '/images/ethnic-wear.jpg',
    price: 799,
  },
  {
    id: 3,
    name: 'Party Dress',
    category: 'Party Wear',
    image: '/images/party-wear.jpg',
    price: 599,
  },
  {
    id: 4,
    name: 'Winter Jacket',
    category: 'Winter Wear',
    image: '/images/winter-wear.jpg',
    price: 449,
  },
  {
    id: 5,
    name: 'Casual Hoodie',
    category: 'Casual',
    image: '/images/casual.jpg',
    price: 299,
  },
  {
    id: 6,
    name: 'Sherwani',
    category: 'Ethnic Wear',
    image: '/images/sherwani.jpg',
    price: 899,
  },
  {
    id: 7,
    name: 'Business Suit',
    category: 'Formal',
    image: '/images/business-suit.jpg',
    price: 599,
  },
  {
    id: 8,
    name: 'Designer Saree',
    category: 'Ethnic Wear',
    image: '/images/saree.jpg',
    price: 749,
  },
  {
    id: 9,
    name: 'Sunglasses',
    category: 'Accessories',
    image: '/images/sunglasses.jpg',
    price: 150,
  },
  {
    id: 10,
    name: 'Luxury Handbag',
    category: 'Accessories',
    image: '/images/handbag.jpg',
    price: 350,
  },
];


function RentClothes() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Available Clothes for Rent</h1>

        {/* Filter Section (basic structure) */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-blue-600 transition">All</button>
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-blue-600 transition">Ethnic Wear</button>
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-blue-600 transition">Formal</button>
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-blue-600 transition">Party Wear</button>
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-blue-600 transition">Winter Wear</button>
        </div>

        {/* Clothes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clothes.map((item) => (
            <div key={item.id} className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              <p className="text-gray-400 mb-2">{item.category}</p>
              <p className="text-blue-400 font-semibold mb-4">₹{item.price} / day</p>
              <a
                href={`/rent/${item.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Rent Now
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Have clothes lying unused?</h2>
          <p className="text-gray-300 mb-4">Start earning by listing them on Cloth Rental!</p>
          <a
            href="/list-your-clothes"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
          >
            Give on Rent
          </a>
        </div>
      </div>
    </div>
  );
}

export default RentClothes;
