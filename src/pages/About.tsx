import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Quality First",
      description: "We never compromise on quality. Every product goes through rigorous testing and review processes."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Driven",
      description: "Our community of creators and customers drives everything we do. Your feedback shapes our products."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Innovation",
      description: "We constantly push boundaries to create products that solve real problems in creative and elegant ways."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer Success",
      description: "Your success is our success. We provide ongoing support and resources to help you achieve your goals."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      description: "Former design director at leading tech companies, passionate about creating digital experiences that matter."
    },
    {
      name: "Sarah Chen",
      role: "Head of Design",
      description: "Award-winning designer with 10+ years experience crafting beautiful and functional digital products."
    },
    {
      name: "Michael Torres",
      role: "Lead Developer",
      description: "Full-stack developer focused on clean code, performance, and scalable digital solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">About Treeinapool</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate team dedicated to creating premium digital products that empower 
              creators, entrepreneurs, and professionals to build exceptional experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Our Story</h2>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, Treeinapool emerged from a simple question: "What's an experience better?" 
                This question drives everything we do, pushing us to create digital products that don't just 
                meet expectations, but exceed them in meaningful ways.
              </p>
              <p>
                Our journey began when our founders, working as freelance designers and developers, 
                noticed a gap in the market for truly premium digital products. While there were plenty 
                of options available, few combined exceptional design with practical functionality and 
                comprehensive support.
              </p>
              <p>
                Today, we're proud to serve thousands of creators, entrepreneurs, and businesses worldwide, 
                helping them bring their visions to life with our carefully crafted digital products. 
                Every product we create is born from real-world needs and refined through continuous 
                feedback from our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Our Values</h2>
          <div className="grid-features">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm bg-background">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-surface mb-6 mx-auto flex items-center justify-center">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              To democratize access to premium digital tools and resources, enabling creators 
              worldwide to build exceptional experiences without compromise.
            </p>
            <Button size="lg">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-md mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our products or want to collaborate? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Us
              </Button>
              <Button size="lg" variant="outline">
                View Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;