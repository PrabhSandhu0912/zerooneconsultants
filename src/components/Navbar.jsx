import { useEffect, useState } from "react";
import logo from '../assets/logo.png';
import { Link } from "react-scroll";
import { FaXmark, FaBars, FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
        setIsMenuOpen(false);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  const servicesDropdown = [
    { name: "Tax Consultancy", path: "#tax" },
    { name: "Accounting Services", path: "#accounting" },
    { name: "Business Advisory", path: "#business" },
    { name: "Payroll Services", path: "#payroll" },
    { name: "Bookkeeping", path: "#bookkeeping" },
  ];

  return (
    <header className="bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-4 ${
        isSticky ? "sticky top-0 right-0 left-0 border bg-white transition-all duration-300" : ""
      }`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 inline-block" />
            <span>Zero One Consultants</span>
          </a>

          <ul className="md:flex space-x-12 hidden items-center">
            {navItems.map(({ link, path }) => (
              <Link to={path} spy={true} smooth={true} offset={-100} key={link} className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">
                {link}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-900 hover:text-brandPrimary">
                Services <FaChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {servicesDropdown.map(({ name, path }) => (
                  <a key={name} href={path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <a href="/" className="text-brandPrimary hover:text-gray-900">Login</a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Sign up</button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none focus:text-gray-500">
              {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link to={path} spy={true} smooth={true} offset={-90} key={link} onClick={toggleMenu} className="block text-white hover:text-gray-500">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
