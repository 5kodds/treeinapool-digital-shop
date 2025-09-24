import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import { ArrowRight, Star, Shield, Zap, Award, Mail } from "lucide-react";

// Import product images
import productDashboard from "@/assets/product-ui-dashboard.jpg";
import productTemplates from "@/assets/product-templates.jpg";
import productAnalytics from "@/assets/product-analytics.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Premium UI Dashboard Kit",
      price: 49,
      image: productDashboard,
      category: "UI/UX",
      description: "Professional dashboard components with modern design patterns and clean code structure."
    },
    {
      id: "2",
      name: "Website Template Collection",
      price: 79,
      image: productTemplates,
      category: "Templates",
      description: "Ready-to-use website templates for various industries with responsive design."
    },
    {
      id: "3",
      name: "Analytics Dashboard Pro",
      price: 129,
      image: productAnalytics,
      category: "Tools",
      description: "Advanced analytics dashboard with data visualization and reporting features."
    }
  ];

  const features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Carefully crafted digital products that meet the highest standards of design and functionality."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Payments",
      description: "Multiple payment options including cryptocurrency, credit cards, and bank transfers."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Download",
      description: "Get immediate access to your purchases with our instant download system."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Support",
      description: "Professional support team ready to assist you with any questions or issues."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-background to-surface overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              What's an experience{" "}
              <span className="text-primary">better?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover premium digital products designed for creatives, entrepreneurs, and professionals who demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" className="group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked digital products that deliver exceptional value and quality
            </p>
          </div>
          <div className="grid-products">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Choose Treeinapool?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best digital products and customer experience
            </p>
          </div>
          <div className="grid-features">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm bg-background">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">About Treeinapool</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're a team of passionate creators dedicated to crafting premium digital products that empower businesses and individuals to achieve their goals. Our mission is to bridge the gap between exceptional design and practical functionality.
            </p>
            <Button size="lg" variant="outline">
              Learn Our Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Mail className="h-8 w-8" />
            </div>
            <h2 className="heading-md mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get notified about new products, exclusive offers, and design insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">T</span>
                </div>
                <span className="font-heading text-xl font-bold">Treeinapool</span>
              </div>
              <p className="text-muted-foreground">
                Premium digital products for modern creators and entrepreneurs.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="link-subtle">UI Kits</a></li>
                <li><a href="#" className="link-subtle">Templates</a></li>
                <li><a href="#" className="link-subtle">Tools</a></li>
                <li><a href="#" className="link-subtle">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="link-subtle">About</a></li>
                <li><a href="#" className="link-subtle">Blog</a></li>
                <li><a href="#" className="link-subtle">Contact</a></li>
                <li><a href="#" className="link-subtle">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="link-subtle">Privacy</a></li>
                <li><a href="#" className="link-subtle">Terms</a></li>
                <li><a href="#" className="link-subtle">Refunds</a></li>
                <li><a href="#" className="link-subtle">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Treeinapool. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;