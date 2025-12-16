import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border/50">
      <div className="container-custom section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="EramR Global" className="h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium handicrafts & decor manufacturer and exporter, bringing traditional artistry to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Our Crafts</h4>
            <ul className="space-y-3">
              {["Metal Work", "Textiles", "Wood Carving", "Pottery"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>WeWork, The Pavilion, 62/63 Church Street, M.G. Road, Bengaluru - 560001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+91 8981708798</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@eramrglobal.com" className="hover:text-primary transition-colors">
                  info@eramrglobal.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Globe size={18} className="text-primary flex-shrink-0" />
                <a href="https://www.eramrglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.eramrglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} EramR Global Private Limited. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Handicrafts & Decor Manufacturer & Exporter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
