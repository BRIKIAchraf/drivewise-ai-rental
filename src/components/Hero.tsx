import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroCarImage from "@/assets/hero-car.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDE2ek0zOCAzMHYtMkg0NnYyaC04em0tMiA0djItSDM0di0yaDJ6bS0yIDRINDh2LTJIMzZ2Mm0wLTh2LTJIMjZ2MmgxMHptMTYtNGgydjhoLTJ2LThaTTM4IDEydjJIMjZ2LTJoMTJ6bTAgNHYtMkg0NHYyaC02em0wIDR2LTJoOHYyaC04em0tMiAydjItSDI0di0yaDE0em0tMiA0djJIMjR2LTJoMTB6bS0yIDRoMTB2MkgyNHYtMmgxMHptMTYtNGgydjRoLTJ2LTR6bS0yIDBoMnYtMmgtMnYyem0tMTYtOGgydjJoLTJ2LTJ6bS0yIDBoMnYtMmgtMnYyem0tMi00aDJ2Mmgtdi0yem0tMiAwaDJ2LTJoLTJ2MnptLTItNGgydjJoLTJ2LTJ6bS0yIDBoMnYtMmgtMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Louez la voiture de vos rêves
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0">
              Réservation instantanée, assurance comprise, flotte premium à votre service 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground shadow-glow text-lg px-8 py-6">
                <Search className="mr-2 h-5 w-5" />
                Rechercher un véhicule
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6">
                Comment ça marche ?
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm mt-1">Véhicules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">10K+</div>
                <div className="text-white/80 text-sm mt-1">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">4.9</div>
                <div className="text-white/80 text-sm mt-1">Note moyenne</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary-glow/20 blur-3xl rounded-full"></div>
            <img 
              src={heroCarImage} 
              alt="Luxury car" 
              className="relative z-10 w-full h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
