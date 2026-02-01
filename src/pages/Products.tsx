import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-handicrafts.jpg";

// Furniture Images
import furnitureSofaSet from "@/assets/furniture-sofa-set.jpg";
import furnitureCopperVase from "@/assets/furniture-copper-vase.jpg";
import furnitureBrassVase from "@/assets/furniture-brass-vase.jpg";
import furnitureCeramicVase from "@/assets/furniture-ceramic-vase.jpg";
import furnitureBrassMirror from "@/assets/furniture-brass-mirror.jpg";
import furnitureRoyalChair from "@/assets/furniture-royal-chair.jpg";
import furnitureVelvetChair from "@/assets/furniture-velvet-chair.jpg";

// ============================================
// PRODUCT DATA - Add your products here
// ============================================
// To add a new product:
// 1. Import the image at the top: import myImage from "@/assets/my-image.jpg";
// 2. Add a new object to the products array in the relevant category
// 3. Include: name, image, and description

const placeholderImage = "/placeholder.svg";

interface Product {
  name: string;
  image: string;
  description: string;
}

interface Category {
  name: string;
  slug: string;
  products: Product[];
}

const categories: Category[] = [
  {
    name: "Bathroom Accessories",
    slug: "bathroom-accessories",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Beautiful handcrafted bathroom accessories coming soon. Contact us for custom orders." },
    ],
  },
  {
    name: "Furniture",
    slug: "furniture",
    products: [
      { name: "Royal Carved Sofa Set", image: furnitureSofaSet, description: "Luxurious hand-carved wooden sofa set with intricate floral patterns and premium upholstery." },
      { name: "Hammered Copper Floor Vase", image: furnitureCopperVase, description: "Elegant hammered copper vases with brass accents and delicate leaf motifs." },
      { name: "Antique Brass Flower Vase", image: furnitureBrassVase, description: "Classic brass vases with embossed floral designs, perfect for traditional interiors." },
      { name: "Ceramic Vase with Blossom Art", image: furnitureCeramicVase, description: "Handpainted ceramic vases featuring cherry blossom artwork with brass trim." },
      { name: "Three-Panel Brass Mirror", image: furnitureBrassMirror, description: "Vintage-style brass frame tri-fold mirror, ideal for dressing rooms and boutiques." },
      { name: "Victorian Royal Accent Chair", image: furnitureRoyalChair, description: "Opulent hand-carved accent chair with gold leaf finish and premium fabric upholstery." },
      { name: "Blush Velvet Accent Chair", image: furnitureVelvetChair, description: "Modern velvet upholstered chair in soft pink with elegant channeled back design." },
    ],
  },
  {
    name: "Wall Decor",
    slug: "wall-decor",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Stunning wall decor pieces coming soon. Contact us for custom orders." },
    ],
  },
  {
    name: "Tables",
    slug: "tables",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Elegant handcrafted tables coming soon. Contact us for custom orders." },
    ],
  },
  {
    name: "Chandeliers",
    slug: "chandeliers",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Magnificent chandeliers coming soon. Contact us for custom orders." },
    ],
  },
  {
    name: "Lights",
    slug: "lights",
    products: [
      { name: "Coming Soon", image: placeholderImage, description: "Beautiful lighting solutions coming soon. Contact us for custom orders." },
    ],
  },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get("category") || "all";

  const filteredCategories = categorySlug === "all" 
    ? categories 
    : categories.filter(cat => cat.slug === categorySlug);

  const currentCategoryName = categorySlug === "all" 
    ? "All Products" 
    : categories.find(cat => cat.slug === categorySlug)?.name || "Products";

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
              {categorySlug === "all" ? "Our Collection" : "Category"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              <span className="text-gradient-gold">{currentCategoryName}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              Explore our curated collection of authentic Indian handicrafts. To purchase any product, please contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="bg-charcoal-light border-b border-border/50 sticky top-20 z-40">
        <div className="container-custom section-padding py-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <Link
              to="/products?category=all"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                categorySlug === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/products?category=${category.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  categorySlug === category.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-background">
        <div className="container-custom section-padding">
          {filteredCategories.map((category) => (
            <div key={category.slug} className="mb-16 last:mb-0">
              {/* Category Header - Only show when viewing all */}
              {categorySlug === "all" && (
                <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                    {category.name.split(" ")[0]}{" "}
                    <span className="text-gradient-gold">
                      {category.name.split(" ").slice(1).join(" ") || ""}
                    </span>
                  </h2>
                  <div className="w-20 h-1 bg-primary rounded-full" />
                </div>
              )}

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <div
                    key={`${category.slug}-${product.name}-${productIndex}`}
                    className="group bg-card rounded-lg border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in opacity-0"
                    style={{ animationDelay: `${0.1 + productIndex * 0.05}s` }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
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
