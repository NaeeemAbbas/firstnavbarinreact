import { useState } from "react";
import { VscAccount, VscChecklist, VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Help", link: "/" },
  ];

  return (
    <nav className="bg-gradient-to-r from-green-700 via-emerald-800 to-teal-900 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-3xl font-bold animate-pulse-slow">
          <VscAccount className="text-yellow-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            MySite
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-yellow-300 transition-all duration-300 relative group"
            >
              <a href={item.link} className="flex items-center">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="hidden md:inline-block bg-yellow-400 text-green-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <VscChromeClose /> : <VscChecklist />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-green-800 to-teal-900 text-white shadow-lg transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b border-teal-700">
          <h2 className="text-2xl font-bold text-yellow-400">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <VscChromeClose className="text-3xl hover:text-yellow-300 transition" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-yellow-300 transition-all duration-300"
            >
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="p-6">
          <button className="w-full bg-yellow-400 text-green-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;