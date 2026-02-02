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

// Wall Decor Images
import walldecorGinkgoArt from "@/assets/walldecor-ginkgo-art.jpg";
import walldecorTrifoldMirror from "@/assets/walldecor-trifold-mirror.jpg";
import walldecorOctagonMirror from "@/assets/walldecor-octagon-mirror.jpg";
import walldecorCandleHolders from "@/assets/walldecor-candle-holders.jpg";
import walldecorMirrorShelf from "@/assets/walldecor-mirror-shelf.jpg";
import walldecorHangingCandle from "@/assets/walldecor-hanging-candle.jpg";
import walldecorMetalArtBlue from "@/assets/walldecor-metal-art-blue.jpg";
import walldecorLotusFlowers from "@/assets/walldecor-lotus-flowers.jpg";
import walldecorGoldenFlowers from "@/assets/walldecor-golden-flowers.jpg";

// Tables Images
import tableDining from "@/assets/table-dining.jpg";
import tableOctagonCoffee from "@/assets/table-octagon-coffee.jpg";
import tableMarbleRound from "@/assets/table-marble-round.jpg";
import tableBrassFrame from "@/assets/table-brass-frame.jpg";
import tableBarCart from "@/assets/table-bar-cart.jpg";
import tableRattanSet from "@/assets/table-rattan-set.jpg";

// Bathroom Images
import bathroomGlassShelf from "@/assets/bathroom-glass-shelf.jpg";
import bathroomChromeRack from "@/assets/bathroom-chrome-rack.jpg";
import bathroomGoldSink from "@/assets/bathroom-gold-sink.jpg";
import bathroomBrassShelf from "@/assets/bathroom-brass-shelf.jpg";
import bathroomRoundMirror from "@/assets/bathroom-round-mirror.jpg";
import bathroomWallMirrorShelf from "@/assets/bathroom-wall-mirror-shelf.jpg";
import bathroomGeometricMirror from "@/assets/bathroom-geometric-mirror.jpg";
import bathroomGoldBathSet from "@/assets/bathroom-gold-bath-set.jpg";
import bathroomWhiteGoldSet from "@/assets/bathroom-white-gold-set.jpg";

// Chandelier Images
import chandelierVolcanicPendant from "@/assets/chandelier-volcanic-pendant.jpg";
import chandelierTealDome from "@/assets/chandelier-teal-dome.jpg";
import chandelierBlueBrass from "@/assets/chandelier-blue-brass.jpg";
import chandelierCrystalGlobe from "@/assets/chandelier-crystal-globe.jpg";
import chandelierClassicCrystal from "@/assets/chandelier-classic-crystal.jpg";
import chandelierTeardropRain from "@/assets/chandelier-teardrop-rain.jpg";
import chandelierModernLoop from "@/assets/chandelier-modern-loop.jpg";
import chandelierBranchCrystal from "@/assets/chandelier-branch-crystal.jpg";
import chandelierGrandBallroom from "@/assets/chandelier-grand-ballroom.jpg";
import chandelierSpiralCrystal from "@/assets/chandelier-spiral-crystal.jpg";

// Lights Images
import lightsBluePorcelain from "@/assets/lights-blue-porcelain.jpg";
import lightsTealMarble from "@/assets/lights-teal-marble.jpg";
import lightsBrassFloral from "@/assets/lights-brass-floral.jpg";
import lightsPorcelainFloral from "@/assets/lights-porcelain-floral.jpg";
import lightsBlueGinger from "@/assets/lights-blue-ginger.jpg";
import lightsBlushPendant from "@/assets/lights-blush-pendant.jpg";
import lightsGreenRibbed from "@/assets/lights-green-ribbed.jpg";
import lightsFloorTray from "@/assets/lights-floor-tray.jpg";
import lightsFloorCone from "@/assets/lights-floor-cone.jpg";
import lightsWallSconce from "@/assets/lights-wall-sconce.jpg";
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
      { name: "Three-Tier Glass Shelf", image: bathroomGlassShelf, description: "Elegant chrome and glass three-tier wall shelf, perfect for bathroom storage and display." },
      { name: "Chrome Double Rack Shelf", image: bathroomChromeRack, description: "Sturdy stainless steel double-tier wall rack, ideal for toiletries and towels." },
      { name: "Sculpted Gold Sink Basin", image: bathroomGoldSink, description: "Luxurious handcrafted gold-plated sink basin with organic sculptural form and artistic finish." },
      { name: "Brass & Glass Wall Shelf", image: bathroomBrassShelf, description: "Elegant two-tier bathroom shelf with polished brass frame and tempered glass shelves." },
      { name: "Round Hanging Mirror", image: bathroomRoundMirror, description: "Minimalist round wall mirror with silver frame and decorative ring hanger detail." },
      { name: "Wall Mirror with Shelf", image: bathroomWallMirrorShelf, description: "Vintage-style brass-framed mirror with integrated glass shelf and chain hanger." },
      { name: "Geometric Console Mirror", image: bathroomGeometricMirror, description: "Modern geometric mirror with abstract multi-panel design and matching console table." },
      { name: "Gold Plating Bath Set", image: bathroomGoldBathSet, description: "Complete 5-piece gold-plated bathroom accessory set including dispenser, tumbler, and soap dish." },
      { name: "White & Gold Bath Collection", image: bathroomWhiteGoldSet, description: "Elegant matte white ceramic bath set with brass accents, includes dispenser, tray, and vanity mirror." },
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
      { name: "Teal Ginkgo Leaf Canvas Art", image: walldecorGinkgoArt, description: "Elegant canvas art featuring teal ginkgo leaves with gold accents on textured background." },
      { name: "Brass Tri-Fold Wall Mirror", image: walldecorTrifoldMirror, description: "Minimalist brass-framed trifold wall mirror with chain hanging, perfect for modern spaces." },
      { name: "Octagonal Brass Mirror", image: walldecorOctagonMirror, description: "Classic octagonal mirror with polished brass frame, adds geometric elegance to any room." },
      { name: "Modern Gold Candle Holders", image: walldecorCandleHolders, description: "Contemporary brass candle holders with geometric designs, ideal for minimalist decor." },
      { name: "Mirror with Display Shelf", image: walldecorMirrorShelf, description: "Functional brass-framed mirror featuring an integrated shelf for decorative displays." },
      { name: "Teardrop Hanging Candle Holder", image: walldecorHangingCandle, description: "Handcrafted brass teardrop-shaped hanging candle holder with three tea light spaces." },
      { name: "Blue Abstract Metal Wall Art", image: walldecorMetalArtBlue, description: "Stunning metal wall sculpture with blue and gold circular patterns, a true statement piece." },
      { name: "Lotus Flower Metal Wall Art", image: walldecorLotusFlowers, description: "Elegant metal wall art featuring dark teal lotus flowers with gold accents." },
      { name: "Golden Floral Wall Sculpture", image: walldecorGoldenFlowers, description: "Handcrafted metal wall sculpture with cascading golden flowers in varied tones." },
    ],
  },
  {
    name: "Tables",
    slug: "tables",
    products: [
      { name: "Modern Dining Table Set", image: tableDining, description: "Contemporary oak dining table with sleek design, seats 8 comfortably with matching chairs." },
      { name: "Octagonal Marble Coffee Table", image: tableOctagonCoffee, description: "Luxurious octagonal coffee table with black marble top and geometric brass base." },
      { name: "Round Marble Center Table", image: tableMarbleRound, description: "Elegant round coffee table with white marble top and sculptural gold-finish base." },
      { name: "Brass Frame Dining Table", image: tableBrassFrame, description: "Stunning polished brass dining table frame with modern geometric design for glass top." },
      { name: "Three-Tier Bar Cart", image: tableBarCart, description: "Minimalist matte black bar cart with three glass tiers and brass accent wheels." },
      { name: "Rattan Table & Stool Set", image: tableRattanSet, description: "Handwoven natural rattan table set with matching barrel stools, perfect for patios." },
    ],
  },
  {
    name: "Chandeliers",
    slug: "chandeliers",
    products: [
      { name: "Volcanic Pendant Light", image: chandelierVolcanicPendant, description: "Dramatic handcrafted pendant with textured volcanic exterior and warm gold-leaf interior." },
      { name: "Teal Dome Pendant", image: chandelierTealDome, description: "Contemporary dome pendant in rich teal with textured finish and warm ambient glow." },
      { name: "Mid-Century Blue Chandelier", image: chandelierBlueBrass, description: "Retro-inspired three-arm chandelier with blue shades and polished brass accents." },
      { name: "Crystal Globe Pendant", image: chandelierCrystalGlobe, description: "Stunning spherical pendant covered in glittering crystal beads for elegant spaces." },
      { name: "Grand Crystal Chandelier", image: chandelierClassicCrystal, description: "Majestic multi-tier crystal chandelier with cascading prisms and candle-style lights." },
      { name: "Teardrop Rain Chandelier", image: chandelierTeardropRain, description: "Modern rectangular chandelier with cascading glass teardrop pendants and brass rods." },
      { name: "Modern Loop Chandelier", image: chandelierModernLoop, description: "Contemporary gold-finish chandelier with geometric oval frames and globe lights." },
      { name: "Branch Crystal Chandelier", image: chandelierBranchCrystal, description: "Nature-inspired brass branch design with delicate crystal droplets and warm lighting." },
      { name: "Grand Ballroom Installation", image: chandelierGrandBallroom, description: "Custom luxury chandelier installation with crystal curtains and golden rod centerpiece." },
      { name: "Spiral Crystal Cascade", image: chandelierSpiralCrystal, description: "Dramatic spiral design with crystal beads and sphere, perfect for high ceilings." },
    ],
  },
  {
    name: "Lights",
    slug: "lights",
    products: [
      { name: "Blue Porcelain Table Lamp", image: lightsBluePorcelain, description: "Classic blue and white porcelain ginger jar lamp with intricate floral patterns and silk shade." },
      { name: "Teal Marble Table Lamp", image: lightsTealMarble, description: "Elegant teal marble-finish lamp with brass floral appliqué and pleated cream shade." },
      { name: "Brass Floral Table Lamp", image: lightsBrassFloral, description: "Sophisticated satin brass lamp with embossed floral branch design and pleated shade." },
      { name: "Black Floral Porcelain Lamp", image: lightsPorcelainFloral, description: "Stunning black and white floral porcelain lamp with polished brass accents." },
      { name: "Blue Ginger Jar Lamp", image: lightsBlueGinger, description: "Ribbed blue ceramic ginger jar lamp with brass leaf detail and classic pleated shade." },
      { name: "Blush Globe Pendant", image: lightsBlushPendant, description: "Modern blush pink glass globe pendant with cluster design, perfect for contemporary spaces." },
      { name: "Forest Green Table Lamp", image: lightsGreenRibbed, description: "Ribbed ceramic lamp in deep forest green with brass floral accents and pleated shade." },
      { name: "Floor Lamp with Tray", image: lightsFloorTray, description: "Modern brass floor lamp with integrated display tray and black shade with gold interior." },
      { name: "Cone Floor Lamp", image: lightsFloorCone, description: "Industrial-chic floor lamp with brass cone shade and wooden display shelf." },
      { name: "Mid-Century Wall Sconce", image: lightsWallSconce, description: "Retro-inspired double wall sconce with two-tone shades and adjustable brass arms." },
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
