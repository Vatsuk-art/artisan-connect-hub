import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-handicrafts.jpg";

// ============================================
// PRODUCT DATA - Add your products here
// ============================================
// To add a new product:
// 1. Import the image at the top of the file: import myImage from "@/assets/my-image.jpg";
// 2. Add a new object to the products array in the relevant category
// 3. Include: name, image, and description

// Placeholder for when no image is available yet
const placeholderImage = "/placeholder.svg";

interface Product {
  name: string;
  image: string;
  description: string;
}

interface Category {
  name: string;
  products: Product[];
}

const categories: Category[] = [
  {
    name: "Bathroom Accessories",
    products: [
      // Add products like this:
      // { name: "Brass Towel Holder", image: importedImage, description: "Handcrafted brass towel holder with intricate designs" },
      { name: "Coming Soon", image: placeholderImage, description: "Beautiful handcrafted bathroom accessories coming soon. Contact us for custom orders." },
    ],
  },
  {
    name: "Furniture",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Exquisite handcrafted furniture pieces coming soon. Contact us for custom orders." },
    ],
  },
  {
    name: "Wall Decor",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Stunning wall decor pieces coming soon. Contact us for custom orders." },
    ],
  },
  {
    name: "Tables",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Elegant handcrafted tables coming soon. Contact us for custom orders." },
    ],
  },
  {
    name: "Chandeliers",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Magnificent chandeliers coming soon. Contact us for custom orders." },
    ],
  },
  {
    name: "Lights",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Beautiful lighting solutions coming soon. Contact us for custom orders." },
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="relative container-custom section-padding py-0">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium tracking-wider uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              Our Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Handcrafted <span className="text-gradient-gold">Treasures</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              Explore our curated collection of authentic Indian handicrafts. To purchase any product, please contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background">
        <div className="container-custom section-padding">
          {categories.map((category, categoryIndex) => (
            <div key={category.name} className="mb-16 last:mb-0">
              {/* Category Header */}
              <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                  {category.name.split(" ")[0]}{" "}
                  <span className="text-gradient-gold">
                    {category.name.split(" ").slice(1).join(" ") || ""}
                  </span>
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <div
                    key={`${category.name}-${product.name}-${productIndex}`}
                    className="group bg-card rounded-lg border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in opacity-0"
                    style={{ animationDelay: `${0.1 + productIndex * 0.05}s` }}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-lg text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link to="/contact">
                          Inquire Now
                          <ArrowRight size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="bg-charcoal-light border-t border-border/50">
        <div className="container-custom section-padding">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Looking for <span className="text-gradient-gold">Custom Pieces?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We specialize in creating bespoke handicrafts tailored to your specific requirements. From bulk orders for retail to unique pieces for collectors, our artisans can bring your vision to life.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Contact Us to Order
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
