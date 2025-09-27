import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Navigation from "@/components/Navigation";
import { ShoppingCart, Heart, Share2, Download, Shield, Clock } from "lucide-react";

// Import product images
import productDashboard from "@/assets/product-ui-dashboard.jpg";
import productTemplates from "@/assets/product-templates.jpg";
import productAnalytics from "@/assets/product-analytics.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  
  // Mock product data - in real app, fetch based on ID
  const product = {
    id: "1",
    name: "Premium UI Dashboard Kit",
    price: 49,
    originalPrice: 79,
    image: productDashboard,
    category: "UI/UX",
    description: "Professional dashboard components with modern design patterns and clean code structure. Perfect for admin panels and data visualization.",
    longDescription: `This comprehensive UI dashboard kit includes over 100+ carefully crafted components designed for modern web applications. Built with attention to detail and user experience in mind.

Features included:
• 15+ Dashboard layouts
• 50+ UI components
• Dark & Light themes
• Responsive design
• Clean, modern code
• Figma files included
• Lifetime updates
• Commercial license

Perfect for SaaS applications, admin panels, analytics dashboards, and more. All components are built with modern design principles and best practices.`,
    features: [
      "15+ Dashboard Layouts",
      "50+ UI Components", 
      "Dark & Light Themes",
      "Responsive Design",
      "Figma Files Included",
      "Commercial License",
      "Lifetime Updates",
      "Premium Support"
    ],
    specifications: {
      "File Format": "Figma, Sketch, Adobe XD",
      "Compatibility": "All modern browsers",
      "License": "Commercial",
      "Support": "1 year premium support",
      "Updates": "Lifetime updates"
    },
    tags: ["Dashboard", "UI Kit", "Components", "Admin", "SaaS"],
    rating: 4.9,
    reviews: 127,
    downloads: 1453
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-border">
              <OptimizedImage
                src={product.image}
                alt={product.name}
                aspectRatio="4/3"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden border border-border opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <OptimizedImage 
                  src={product.image} 
                  alt="Preview 1" 
                  aspectRatio="1/1"
                  sizes="(max-width: 1024px) 33vw, 16vw"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-border opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <OptimizedImage 
                  src={productTemplates} 
                  alt="Preview 2" 
                  aspectRatio="1/1"
                  sizes="(max-width: 1024px) 33vw, 16vw"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-border opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <OptimizedImage 
                  src={productAnalytics} 
                  alt="Preview 3" 
                  aspectRatio="1/1"
                  sizes="(max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="heading-lg mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.downloads} downloads
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-primary">${product.price}</span>
              <span className="text-xl text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
              <Badge variant="destructive">Save ${product.originalPrice - product.price}</Badge>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <Button size="xl" className="w-full" variant="hero">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Payment Methods */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold mb-4">Payment Methods</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm">Cryptocurrency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm">Credit Cards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-primary" />
                    <span className="text-sm">Instant Download</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">Bank Transfer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="heading-md mb-6">Description</h2>
              <div className="prose prose-neutral max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {product.longDescription}
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="font-heading text-xl font-semibold mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="heading-md mb-6">Specifications</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col gap-1">
                        <span className="text-sm font-medium">{key}</span>
                        <span className="text-sm text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6">
                <h3 className="font-heading text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;