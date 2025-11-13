import { Car, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Car className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">RentPro</span>
            </div>
            <p className="text-white/80 mb-6">
              La plateforme de location de véhicules nouvelle génération. Simple, rapide et sécurisé.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Véhicules</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Berlines</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">SUV</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sportives</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Électriques</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Luxe</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Partenaires</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Presse</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Conditions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sécurité</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2024 RentPro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
