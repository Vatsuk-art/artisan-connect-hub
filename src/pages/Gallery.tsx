import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import metalworkImage from "@/assets/product-metalwork.jpg";
import textilesImage from "@/assets/product-textiles.jpg";
import woodworkImage from "@/assets/product-woodwork.jpg";
import potteryImage from "@/assets/product-pottery.jpg";
import heroImage from "@/assets/hero-handicrafts.jpg";

const galleryItems = [
  { id: 1, name: "Brass Tea Set Collection", category: "Metal Work", image: heroImage },
  { id: 2, name: "Traditional Copper Vessels", category: "Metal Work", image: metalworkImage },
  { id: 3, name: "Silk Saree with Gold Thread", category: "Textiles", image: textilesImage },
  { id: 4, name: "Hand-Carved Rosewood Console", category: "Wood Carving", image: woodworkImage },
  { id: 5, name: "Blue Pottery Collection", category: "Pottery", image: potteryImage },
  { id: 6, name: "Decorative Brass Urns", category: "Metal Work", image: metalworkImage },
  { id: 7, name: "Embroidered Table Runner", category: "Textiles", image: textilesImage },
  { id: 8, name: "Carved Wooden Panel", category: "Wood Carving", image: woodworkImage },
  { id: 9, name: "Terracotta Planters", category: "Pottery", image: potteryImage },
  { id: 10, name: "Antique Brass Lamps", category: "Metal Work", image: heroImage },
  { id: 11, name: "Handwoven Silk Fabric", category: "Textiles", image: textilesImage },
  { id: 12, name: "Glazed Ceramic Vases", category: "Pottery", image: potteryImage },
];

const categories = ["All", "Metal Work", "Textiles", "Wood Carving", "Pottery"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal-light py-20 md:py-28">
        <div className="container-custom section-padding py-0">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium tracking-wider uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              Product Gallery
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Explore Our <span className="text-gradient-gold">Masterpieces</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              Browse through our curated collection of handcrafted treasures from India's finest artisans.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-background border-b border-border/50 sticky top-20 z-40">
        <div className="container-custom section-padding py-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-background">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer animate-fade-in opacity-0"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg text-foreground mt-1">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div
            className="max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {selectedImage.category}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mt-2">
                {selectedImage.name}
              </h2>
              <p className="text-muted-foreground mt-2">
                Contact us to inquire about this piece
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
