import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded shadow-md">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-green-400 text-2xl font-semibold mb-2">Message Sent ✅</h2>
                <p className="text-gray-300">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-1">Name</label>
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
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800 p-6 rounded shadow-md space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">📍 Address</h3>
              <p className="text-gray-300">123 Campus Street, Gujarat, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">📞 Phone</h3>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">📧 Email</h3>
              <p className="text-gray-300">support@clothrental.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
