import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-handicrafts.jpg";
import bathroomImage from "@/assets/category-bathroom.jpg";
import furnitureImage from "@/assets/category-furniture.jpg";
import wallDecorImage from "@/assets/category-wall-decor.jpg";
import tablesImage from "@/assets/category-tables.jpg";
import chandeliersImage from "@/assets/category-chandeliers.jpg";
import lightsImage from "@/assets/category-lights.jpg";
import handicraftsImage from "@/assets/hero-handicrafts.jpg";

const categories = [
  { name: "Bathroom Accessories", slug: "bathroom-accessories", image: bathroomImage, desc: "Elegant brass & copper bathroom fittings" },
  { name: "Furniture", slug: "furniture", image: furnitureImage, desc: "Handcrafted traditional furniture pieces" },
  { name: "Wall Decor", slug: "wall-decor", image: wallDecorImage, desc: "Decorative metal wall art & hangings" },
  { name: "Tables", slug: "tables", image: tablesImage, desc: "Ornate carved wooden tables" },
  { name: "Lamps & Chandeliers", slug: "lamps-chandeliers", image: chandeliersImage, desc: "Luxurious lamps, pendants & chandeliers" },
  { name: "Display Items", slug: "display-items", image: lightsImage, desc: "Vases, decorative pieces & accents" },
  { name: "Handicrafts", slug: "handicrafts", image: handicraftsImage, desc: "Traditional woven & natural crafts" },
];

const features = [
  { icon: Award, title: "Premium Quality", desc: "Handcrafted with generations of expertise" },
  { icon: Globe, title: "Global Export", desc: "Shipping to customers worldwide" },
  { icon: Package, title: "Custom Orders", desc: "Tailored pieces for your needs" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="relative container-custom section-padding">
          <div className="max-w-2xl">
            <p className="text-primary font-medium tracking-wider uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              Handicrafts & Decor Manufacturer & Exporter
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Timeless Artistry,{" "}
              <span className="text-gradient-gold">Global Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              Discover the finest collection of traditional Indian handicrafts. Each piece tells a story of heritage, crafted by skilled artisans with generations of expertise.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
              <Button variant="gold" size="lg" asChild>
                <Link to="/products">
                  Explore Collection
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-charcoal-light">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="bg-background">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Craft Categories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of authentic Indian handicrafts, each category representing centuries of artisanal tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] animate-fade-in opacity-0"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal-light border-t border-border/50">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to Bring <span className="text-gradient-gold">Artistry Home?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Connect with us to explore our collection or discuss custom pieces tailored to your vision.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
