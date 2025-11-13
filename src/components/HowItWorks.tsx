import { Search, FileCheck, Key, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Recherchez",
    description: "Trouvez le véhicule parfait selon vos critères et dates"
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Réservez",
    description: "Validez votre réservation en ligne avec paiement sécurisé"
  },
  {
    icon: Key,
    number: "03",
    title: "Récupérez",
    description: "Check-in digital avec scan des documents et photos 360°"
  },
  {
    icon: ThumbsUp,
    number: "04",
    title: "Profitez",
    description: "Partez à l'aventure et profitez de votre location en toute sérénité"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            4 étapes simples pour louer votre véhicule
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                )}
                <div className="relative bg-card rounded-2xl p-8 text-center hover:shadow-card transition-all duration-300">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 mt-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
