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
  const featuredAITools = [
    {
      id: "1",
      name: "InstaContent Writer",
      price: 29,
      image: productDashboard,
      category: "Content Creation",
      skillLevel: "Beginner" as const,
      description: "AI-powered content writer that creates engaging blog posts, social media content, and marketing copy in minutes."
    },
    {
      id: "2",
      name: "Image Stylist AI",
      price: 19,
      image: productTemplates,
      category: "Art & Design", 
      skillLevel: "Beginner" as const,
      description: "Transform your photos with AI-powered filters, effects, and artistic styles. No design experience needed."
    },
    {
      id: "3",
      name: "Sentiment Analysis API",
      price: 99,
      image: productAnalytics,
      category: "Data & APIs",
      skillLevel: "Pro" as const,
      description: "Advanced sentiment analysis API for developers to analyze customer feedback, reviews, and social media mentions."
    }
  ];

  const features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Easy No-Code Tools",
      description: "Start in minutes with intuitive AI tools that require no technical expertise or coding knowledge."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Powerful APIs",
      description: "Scalable AI models and robust APIs for developers to build advanced automation workflows."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Access",
      description: "Get immediate access to AI tools and start automating your work within minutes of purchase."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Creative Power",
      description: "Unlock your potential with AI tools designed for content creation, design, and business automation."
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
              Unlock Your Potential with AI:{" "}
              <span className="text-primary">Tools for Everyone</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              From simple no-code solutions for beginners to powerful APIs for developers, find the perfect AI tool to elevate your work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" className="group">
                Explore AI Tools
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
            <h2 className="heading-lg mb-4">Featured AI Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked AI solutions that deliver exceptional value for beginners and professionals
            </p>
          </div>
          <div className="grid-products">
            {featuredAITools.map((tool) => (
              <ProductCard key={tool.id} {...tool} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All AI Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Choose Our AI Marketplace?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best AI tools and services for every skill level
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
              We're a team of AI enthusiasts dedicated to curating the best AI tools and services for creators, entrepreneurs, and developers. Our mission is to democratize AI technology and make it accessible to everyone, regardless of technical skill level.
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
              Get notified about new AI tools, exclusive offers, and latest AI insights
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
                AI tools and services for creators, entrepreneurs, and developers.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">AI Categories</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="link-subtle">Content Creation</a></li>
                <li><a href="#" className="link-subtle">Art & Design</a></li>
                <li><a href="#" className="link-subtle">Productivity</a></li>
                <li><a href="#" className="link-subtle">Business Tools</a></li>
                <li><a href="#" className="link-subtle">Data & APIs</a></li>
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