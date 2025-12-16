import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import craftsmanImage from "@/assets/about-craftsman.jpg";
import heroImage from "@/assets/hero-handicrafts.jpg";

const values = [
  { icon: Heart, title: "Passion for Craft", desc: "Every piece we create is born from deep love for traditional artistry and dedication to excellence." },
  { icon: Target, title: "Quality First", desc: "We never compromise on quality, using only the finest materials and time-tested techniques." },
  { icon: Globe, title: "Global Reach", desc: "From Bengaluru to the world, we export our heritage to customers across continents." },
  { icon: Users, title: "Artisan Community", desc: "We empower local craftsmen, preserving traditions while providing sustainable livelihoods." },
];

const About = () => {
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
              About EramR Global
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Crafting <span className="text-gradient-gold">Heritage</span>, Delivering Excellence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              We are a premier handicrafts and decor manufacturer & exporter based in Bengaluru, India. Our mission is to bring the finest traditional Indian craftsmanship to homes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-charcoal-light">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-left opacity-0" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <img
                  src={craftsmanImage}
                  alt="Artisan at work"
                  className="rounded-lg shadow-card w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-gold hidden md:block">
                  <p className="text-4xl font-display font-bold">10+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right opacity-0" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  EramR Global Private Limited was founded with a vision to bridge the gap between traditional Indian artisans and the global marketplace. What started as a small initiative has grown into a respected name in handicrafts and decor export.
                </p>
                <p>
                  Under the leadership of our directors, Eram Roohi and Arfat Hussain, we have built a network of skilled craftsmen who specialize in various forms of traditional art – from intricate metalwork to fine textiles.
                </p>
                <p>
                  Every product that leaves our facility carries with it the essence of Indian heritage, crafted with meticulous attention to detail and an unwavering commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex items-start gap-5 p-8 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                  <value.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal-light border-t border-border/50">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Want to <span className="text-gradient-gold">Work With Us?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you're a retailer, interior designer, or an individual collector, we'd love to hear from you.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Contact Our Team
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
