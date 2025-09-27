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

  const aiTools = [
    {
      id: "1",
      name: "InstaContent Writer",
      price: 29,
      image: productDashboard,
      category: "content-creation",
      skillLevel: "Beginner" as const,
      description: "AI-powered content writer that creates engaging blog posts, social media content, and marketing copy in minutes."
    },
    {
      id: "2",
      name: "Image Stylist AI",
      price: 19,
      image: productTemplates,
      category: "art-design",
      skillLevel: "Beginner" as const,
      description: "Transform your photos with AI-powered filters, effects, and artistic styles. No design experience needed."
    },
    {
      id: "3",
      name: "Sentiment Analysis API",
      price: 99,
      image: productAnalytics,
      category: "data-apis",
      skillLevel: "Pro" as const,
      description: "Advanced sentiment analysis API for developers to analyze customer feedback, reviews, and social media mentions."
    },
    {
      id: "4",
      name: "Automated Workflow Builder",
      price: 49,
      image: productDashboard,
      category: "productivity",
      skillLevel: "Intermediate" as const,
      description: "Create complex automated workflows without coding. Connect apps and automate repetitive tasks effortlessly."
    },
    {
      id: "5",
      name: "Smart Business Assistant",
      price: 79,
      image: productTemplates,
      category: "business-tools",
      skillLevel: "Beginner" as const,
      description: "AI assistant that helps with scheduling, email management, and business process optimization."
    },
    {
      id: "6",
      name: "Voice Clone Studio",
      price: 159,
      image: productAnalytics,
      category: "art-design",
      skillLevel: "Pro" as const,
      description: "Professional voice cloning and synthesis API for creating realistic voiceovers and audio content."
    }
  ];

  const categories = [
    { value: "all", label: "All Use Cases" },
    { value: "content-creation", label: "Content Creation" },
    { value: "art-design", label: "Art & Design" },
    { value: "productivity", label: "Productivity" },
    { value: "business-tools", label: "Business Tools" },
    { value: "data-apis", label: "Data & APIs" }
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name", label: "Name A-Z" }
  ];

  const filteredAITools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-surface border-b border-border">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="heading-lg mb-4">AI Tools & Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of AI tools and services designed for every skill level - from beginners to professionals
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
                  placeholder="Search AI tools..."
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
              Showing {filteredAITools.length} of {aiTools.length} AI tools
            </p>
          </div>
          
          {filteredAITools.length > 0 ? (
            <div className={viewMode === "grid" ? "grid-products" : "space-y-6"}>
              {filteredAITools.map((tool) => (
                <ProductCard key={tool.id} {...tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No AI tools found</p>
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