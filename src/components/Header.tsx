import { Button } from "@/components/ui/button";
import { Car, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <Car className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="text-2xl font-bold text-white">RentPro</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
              Véhicules
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
              Comment ça marche
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
              Tarifs
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10 hidden md:flex">
              <User className="h-5 w-5 mr-2" />
              Connexion
            </Button>
            <Button className="bg-accent hover:bg-accent-light text-accent-foreground hidden md:flex">
              S'inscrire
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
