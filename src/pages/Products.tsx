import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import { Search, Filter, Grid, List } from "lucide-react";

// Import product images
import productDashboard from "@/assets/product-ui-dashboard.jpg";
import productTemplates from "@/assets/product-templates.jpg";
import productAnalytics from "@/assets/product-analytics.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const products = [
    {
      id: "1",
      name: "Premium UI Dashboard Kit",
      price: 49,
      image: productDashboard,
      category: "ui-ux",
      description: "Professional dashboard components with modern design patterns and clean code structure. Perfect for admin panels and data visualization."
    },
    {
      id: "2",
      name: "Website Template Collection",
      price: 79,
      image: productTemplates,
      category: "templates",
      description: "Ready-to-use website templates for various industries with responsive design and modern aesthetics."
    },
    {
      id: "3",
      name: "Analytics Dashboard Pro",
      price: 129,
      image: productAnalytics,
      category: "tools",
      description: "Advanced analytics dashboard with data visualization and reporting features for business intelligence."
    },
    {
      id: "4",
      name: "Mobile App UI Kit",
      price: 69,
      image: productDashboard,
      category: "ui-ux",
      description: "Complete mobile app UI kit with components for iOS and Android applications."
    },
    {
      id: "5",
      name: "E-commerce Template Bundle",
      price: 99,
      image: productTemplates,
      category: "templates",
      description: "Professional e-commerce templates with shopping cart, product pages, and checkout flows."
    },
    {
      id: "6",
      name: "Marketing Analytics Tool",
      price: 89,
      image: productAnalytics,
      category: "tools",
      description: "Comprehensive marketing analytics tool with campaign tracking and performance metrics."
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "ui-ux", label: "UI/UX" },
    { value: "templates", label: "Templates" },
    { value: "tools", label: "Tools" },
    { value: "resources", label: "Resources" }
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name", label: "Name A-Z" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-surface border-b border-border">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="heading-lg mb-4">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of premium digital products designed to elevate your projects
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-background">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center flex-1">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className={viewMode === "grid" ? "grid-products" : "space-y-6"}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No products found</p>
              <p className="text-muted-foreground mb-8">Try adjusting your search or filter criteria</p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;