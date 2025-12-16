import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import metalworkImage from "@/assets/product-metalwork.jpg";
import textilesImage from "@/assets/product-textiles.jpg";
import woodworkImage from "@/assets/product-woodwork.jpg";
import potteryImage from "@/assets/product-pottery.jpg";
import heroImage from "@/assets/hero-handicrafts.jpg";

const categories = [
  {
    name: "Metal Work",
    image: metalworkImage,
    description: "Exquisite brass and copper pieces featuring traditional Indian motifs. Our metalwork includes decorative vessels, sculptures, lamps, and religious artifacts crafted by master artisans.",
    items: ["Brass Urns & Vases", "Copper Vessels", "Decorative Lamps", "Religious Artifacts", "Wall Hangings"],
  },
  {
    name: "Textiles",
    image: textilesImage,
    description: "Handwoven fabrics showcasing India's rich textile heritage. From silk sarees with gold thread embroidery to intricate tapestries and home furnishings.",
    items: ["Silk Fabrics", "Embroidered Textiles", "Handwoven Rugs", "Decorative Throws", "Table Linens"],
  },
  {
    name: "Wood Carving",
    image: woodworkImage,
    description: "Masterfully carved furniture and decorative items in rosewood, teak, and sandalwood. Each piece showcases traditional carving techniques passed down through generations.",
    items: ["Carved Furniture", "Decorative Panels", "Wooden Sculptures", "Jewelry Boxes", "Mirror Frames"],
  },
  {
    name: "Pottery & Ceramics",
    image: potteryImage,
    description: "Artistic ceramics including blue pottery, terracotta items, and glazed earthenware. Our pottery combines traditional forms with contemporary aesthetics.",
    items: ["Blue Pottery", "Terracotta Items", "Glazed Ceramics", "Decorative Plates", "Planters & Vases"],
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
              Explore our curated collection of authentic Indian handicrafts. Each piece is a testament to the skill and dedication of our artisans.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background">
        <div className="container-custom section-padding">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in opacity-0`}
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div
                className={`${index % 2 === 1 ? "lg:order-1" : ""} animate-fade-in opacity-0`}
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {category.name.split(" ")[0]}{" "}
                  <span className="text-gradient-gold">{category.name.split(" ").slice(1).join(" ") || category.name.split(" ")[0]}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>
                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-wider text-primary mb-3">Featured Items</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/contact">
                    Inquire About {category.name}
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Orders */}
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
                Discuss Your Requirements
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
