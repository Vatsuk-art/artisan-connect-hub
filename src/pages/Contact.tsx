import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "WeWork, The Pavilion, 62/63 Church Street, M.G. Road, Bengaluru - 560001" },
  { icon: Phone, label: "Phone", value: "+91 8981708798 / +91 9718022632", href: "tel:+918981708798" },
  { icon: Mail, label: "Email", value: "info@eramrglobal.com", href: "mailto:info@eramrglobal.com" },
  { icon: Globe, label: "Website", value: "www.eramrglobal.com", href: "https://www.eramrglobal.com" },
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
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

              {/* Directors */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <h3 className="font-display text-lg text-foreground mb-4">Directors</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-foreground font-medium">Eram Roohi</p>
                    <p className="text-sm text-muted-foreground">Director | +91 8981708798</p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Arfat Hussain</p>
                    <p className="text-sm text-muted-foreground">Director | +91 9718022632</p>
                  </div>
                </div>
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
          <div className="rounded-lg overflow-hidden border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.008607082428!2d77.60617277454666!3d12.972198814880234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681a6d8c39d%3A0x467aed9fad8ab3e0!2sWeWork%20The%20Pavilion!5e0!3m2!1sen!2sin!4v1702726800000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EramR Global Office Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
