import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  skillLevel?: 'Beginner' | 'Intermediate' | 'Pro';
}

const ProductCard = ({ id, name, price, image, category, description, skillLevel }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <OptimizedImage
          src={image}
          alt={name}
          aspectRatio="4/3"
          className="group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            {category}
          </span>
          {skillLevel && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
              {skillLevel}
            </span>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="bg-background/95 backdrop-blur">
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
            <Button size="sm" className="bg-primary/95 backdrop-blur">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Get Access
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <Link to={`/product/${id}`} className="group">
              <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                {name}
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-heading text-2xl font-bold text-primary">
              ${price}
            </span>
            <Button size="sm" variant="minimal">
              Get Started
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;