import { Shield, Clock, Smartphone, Zap, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Assurance complète",
    description: "Tous nos véhicules sont entièrement assurés pour votre tranquillité d'esprit"
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Réservez et récupérez votre véhicule à toute heure, sans contrainte"
  },
  {
    icon: Smartphone,
    title: "Check-in digital",
    description: "Scan automatique des documents, signature électronique, photos 360°"
  },
  {
    icon: Zap,
    title: "Réservation instantanée",
    description: "Confirmation immédiate et accès à votre véhicule en quelques clics"
  },
  {
    icon: Award,
    title: "Programme fidélité",
    description: "Gagnez des points à chaque location et bénéficiez d'avantages exclusifs"
  },
  {
    icon: Headphones,
    title: "Support client dédié",
    description: "Une équipe disponible pour répondre à toutes vos questions"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expérience de location révolutionnaire, simple et sécurisée
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card hover:shadow-card transition-all duration-300 border border-border hover:border-primary/50"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
