import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const productCategories = [
  { name: "All Products", slug: "all" },
  { name: "Bathroom Accessories", slug: "bathroom-accessories" },
  { name: "Furniture", slug: "furniture" },
  { name: "Wall Decor", slug: "wall-decor" },
  { name: "Tables", slug: "tables" },
  { name: "Lamps & Chandeliers", slug: "lamps-chandeliers" },
  { name: "Display Items", slug: "display-items" },
  { name: "Handicrafts", slug: "handicrafts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  const isProductsActive = location.pathname.startsWith("/products");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container-custom section-padding py-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="EramR Global" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary flex items-center gap-1 ${
                  isProductsActive ? "text-primary" : "text-foreground/80"
                }`}
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px] animate-fade-in">
                    {productCategories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/products?category=${category.slug}`}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                location.pathname === "/contact"
                  ? "text-primary"
                  : "text-foreground/80"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors duration-300 hover:text-primary py-2 ${
                  location.pathname === "/"
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors duration-300 hover:text-primary py-2 ${
                  location.pathname === "/about"
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className={`text-base font-medium transition-colors duration-300 hover:text-primary py-2 flex items-center gap-2 w-full ${
                    isProductsActive ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Products
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      isMobileProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileProductsOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1 border-l-2 border-primary/30">
                    {productCategories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/products?category=${category.slug}`}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileProductsOpen(false);
                        }}
                        className="text-sm text-foreground/70 hover:text-primary py-1.5 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors duration-300 hover:text-primary py-2 ${
                  location.pathname === "/contact"
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
