import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="top-0 z-50 flex justify-between items-center p-4 bg-gray-800 shadow-md">
      {/* Left: Logo + Brand */}
      <div className="flex items-center space-x-3">
        <img src="/logo.jpg" alt="logo" className="w-10 h-10 object-cover" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          StyleSwap
        </h1>
      </div>


      {/* Center: Navigation + Search */}
      <div className="flex items-center space-x-6">
        <nav>
          <ul className="flex space-x-6 text-gray-300 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400 transition-colors"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400 transition-colors"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400 transition-colors"
                }
              >
                Rent Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/list-your-clothes"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400 transition-colors"
                }
              >
                Give on Rent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400 transition-colors"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
      </div>

      {/* Right-side buttons */}
      {/* <div className="flex space-x-4">
        <NavLink to="/login">
          <button className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-700 transition-colors">
            Login
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Sign Up
          </button>
        </NavLink>
      </div> */}
      {/* Right-side: User Profile */}
      <div className="flex items-center space-x-3 bg-gray-700 p-2 rounded-md">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border border-gray-600"
        />
        <div className="text-right">
          <p className="text-sm text-gray-300">Welcome back,</p>
          <h4 className="text-lg font-semibold text-white">Jeet</h4>
        </div>
      </div>

    </header>
  );
}

export default Header;
