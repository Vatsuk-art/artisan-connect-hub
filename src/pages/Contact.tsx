import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const officeAddress = "WeWork, The Pavilion, 62/63 Church Street, M.G. Road, Bengaluru - 560001";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=WeWork+The+Pavilion+62+63+Church+Street+MG+Road+Bengaluru+560001";

const contactInfo = [
  { icon: MapPin, label: "Address", value: officeAddress },
  { icon: Phone, label: "Phone", value: "+91 8981708798 / +91 9718022632", href: "tel:+918981708798" },
  { icon: Mail, label: "Email", value: "info@eramr.com", href: "mailto:info@eramr.com" },
  { icon: Globe, label: "Website", value: "www.eramr.com", href: "https://www.eramr.com" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOpenMap = () => {
    const popup = window.open(mapsUrl, "_blank", "noopener,noreferrer");

    if (!popup) {
      toast({
        title: "Could not open Google Maps",
        description: "Please allow popups for this site and click again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal-light py-24 md:py-32">
        <div className="container-custom section-padding py-0">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium tracking-wider uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Let's Create <span className="text-gradient-gold">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              Interested in our handicrafts? Have a custom requirement? We'd love to hear from you. Reach out and let's discuss how we can bring artistry to your space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-background">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 animate-fade-in-left opacity-0" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Contact <span className="text-gradient-gold">Information</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team is ready to assist you with inquiries, custom orders, or business partnerships.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-primary font-medium mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-in-right opacity-0" style={{ animationDelay: "0.4s" }}>
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button variant="gold" size="lg" type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-charcoal-light border-t border-border/50">
        <div className="container-custom section-padding">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Visit Our <span className="text-gradient-gold">Office</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={handleOpenMap}
            className="w-full rounded-2xl overflow-hidden border border-border/50 cursor-pointer group relative text-left"
            aria-label={`Open ${officeAddress} in Google Maps`}
          >
            <div className="w-full h-[400px] bg-muted flex flex-col items-center justify-center gap-4 px-6">
              <MapPin size={48} className="text-primary" />
              <p className="text-foreground font-medium text-lg text-center">WeWork, The Pavilion</p>
              <p className="text-muted-foreground text-center max-w-md">62/63 Church Street, M.G. Road, Bengaluru - 560001</p>
            </div>
            <div className="absolute inset-0 bg-transparent group-hover:bg-background/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg">
                <MapPin size={18} /> Open in Google Maps
              </span>
            </div>
          </button>
          <p className="text-center text-sm text-muted-foreground mt-3">Click the map card to open the exact office location in Google Maps.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
