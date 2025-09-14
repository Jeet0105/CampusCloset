import React, { useState } from 'react';

function ListYourClothes() {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);

    // Clear form and show confirmation
    setForm({
      name: '',
      category: '',
      price: '',
      description: '',
      image: null,
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">
          List Your Clothes for Rent
        </h1>

        {submitted ? (
          <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">✅ Listing Submitted</h2>
            <p className="text-gray-300">Your clothing item has been successfully listed for rent.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-1">Clothing Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded"
              />
            </div>

            <div>
              <label className="block mb-1">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded"
              >
                <option value="">Select category</option>
                <option value="Ethnic Wear">Ethnic Wear</option>
                <option value="Formal">Formal</option>
                <option value="Party Wear">Party Wear</option>
                <option value="Winter Wear">Winter Wear</option>
                <option value="Casual">Casual</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Price per Day (₹)</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded"
              />
            </div>

            <div>
              <label className="block mb-1">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded"
              ></textarea>
            </div>

            <div>
              <label className="block mb-1">Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                required
                className="text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
            >
              Submit Listing
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ListYourClothes;
