import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Fuel, Settings } from "lucide-react";
import sportsCarImage from "@/assets/sports-car.png";
import suvCarImage from "@/assets/suv-car.png";
import electricCarImage from "@/assets/electric-car.png";

const cars = [
  {
    id: 1,
    name: "BMW Série 5",
    category: "Berline Premium",
    price: "89",
    rating: 4.9,
    image: sportsCarImage,
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatique",
    badge: "Populaire"
  },
  {
    id: 2,
    name: "Range Rover Sport",
    category: "SUV Luxe",
    price: "159",
    rating: 4.8,
    image: suvCarImage,
    seats: 7,
    fuel: "Hybride",
    transmission: "Automatique",
    badge: "Premium"
  },
  {
    id: 3,
    name: "Tesla Model 3",
    category: "Électrique",
    price: "79",
    rating: 5.0,
    image: electricCarImage,
    seats: 5,
    fuel: "Électrique",
    transmission: "Automatique",
    badge: "Éco"
  }
];

const FeaturedCars = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre flotte premium
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de véhicules soigneusement entretenus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-glow transition-all duration-300 group">
              <div className="relative overflow-hidden bg-gradient-to-br from-muted to-muted/50 p-6">
                <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
                  {car.badge}
                </Badge>
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{car.name}</h3>
                  <p className="text-muted-foreground">{car.category}</p>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="font-semibold text-foreground">{car.rating}</span>
                  <span className="text-muted-foreground text-sm">(128 avis)</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-border">
                  <div className="text-center">
                    <Users className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-sm font-medium">{car.seats} places</div>
                  </div>
                  <div className="text-center">
                    <Fuel className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-sm font-medium">{car.fuel}</div>
                  </div>
                  <div className="text-center">
                    <Settings className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-sm font-medium">Auto</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-foreground">{car.price}€</span>
                    <span className="text-muted-foreground">/jour</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary-light">
                    Réserver
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Voir tous les véhicules
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
