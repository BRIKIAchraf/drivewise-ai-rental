import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="container mx-auto px-4 -mt-8 relative z-20">
      <div className="bg-card rounded-2xl shadow-glow p-6 md:p-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Lieu de prise en charge
            </label>
            <Input placeholder="Ville ou aéroport" className="h-12" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date de début
            </label>
            <Input type="date" className="h-12" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date de fin
            </label>
            <Input type="date" className="h-12" />
          </div>
          
          <div className="flex items-end">
            <Button className="w-full h-12 bg-primary hover:bg-primary-light text-primary-foreground">
              <Search className="mr-2 h-5 w-5" />
              Rechercher
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
