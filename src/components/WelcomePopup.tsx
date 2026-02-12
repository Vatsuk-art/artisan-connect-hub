import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-primary/30 bg-card text-center">
        <DialogHeader className="items-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
            <Sparkles className="h-7 w-7 text-primary" />
          </div>
          <DialogTitle className="font-display text-2xl text-gradient-gold">
            Specialisation in Customisation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base mt-2 leading-relaxed">
            At <span className="text-foreground font-medium">EramR Global</span>, we craft bespoke handicrafts &amp; home décor tailored to your vision. From design to delivery — every piece is made just for you.
          </DialogDescription>
        </DialogHeader>
        <Button variant="gold" size="lg" className="mt-2 w-full" onClick={() => setOpen(false)}>
          Explore Our Collection
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
