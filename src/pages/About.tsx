import { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, TrendingUp, Globe, Lightbulb, Rocket, Code, Zap } from 'lucide-react';
import teamOffice from '@/assets/team-office.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const milestonesRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Values cards animation
    gsap.fromTo(valuesRef.current?.children || [], 
      { opacity: 0, y: 60, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Milestones timeline animation
    gsap.fromTo(milestonesRef.current?.children || [], 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: milestonesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI technology.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and ethical AI practices in everything we do.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering exceptional results that exceed client expectations.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and mutual success.',
    },
  ];

  const milestones = [
    { 
      icon: Lightbulb,
      year: '2025', 
      title: 'Company Founded',
      description: 'Technaptix established with vision to revolutionize enterprise AI solutions in Pakistan'
    },
    { 
      icon: Code,
      year: 'Q1 2025', 
      title: 'Intellyca Development',
      description: 'Started development of our flagship AI-enabled ERP analytics platform'
    },
    { 
      icon: Rocket,
      year: 'Q2 2025', 
      title: 'Supernova Partnership',
      description: 'Strategic partnership with Supernova Solutions to expand our technological capabilities'
    },
    { 
      icon: Zap,
      year: 'Q3 2025', 
      title: 'Market Launch',
      description: 'Preparing for Intellyca\'s market launch to transform business intelligence'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 parallax-float opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-neon/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/15 rounded-full blur-xl"></div>
        </div>
        <div ref={heroRef} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering the Future of Enterprise AI
          </h1>
          <p className="text-xl opacity-90">
            Founded in 2025, Technaptix is at the forefront of AI innovation, 
            helping enterprises harness the power of artificial intelligence to transform their operations.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower enterprises with cutting-edge AI solutions that transform data into actionable insights, 
                starting with our flagship product Intellyca for ERP analytics.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To become the leading AI solutions provider in Pakistan and beyond, helping businesses 
                harness the power of artificial intelligence for competitive advantage.
              </p>
            </div>
            <div>
              <img 
                src={teamOffice} 
                alt="Technaptix Team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our AI innovation journey
            </p>
          </div>

          <div ref={milestonesRef} className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <milestone.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                    <div className="h-px bg-accent/30 flex-1"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate professionals building the future of AI
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="w-24 h-24 rounded-full border-[2px] border-[#11A4D4] shadow-[0_0_4px_#11A4D4] hover:shadow-[0_0_6px_#11A4D4] transition duration-300 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-semibold text-[#11A4D4]">T</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Growing Team</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  As a startup, we're building our team of AI experts, engineers, and innovators. 
                  We're looking for passionate individuals who want to shape the future of enterprise AI solutions.
                </p>
                <Link to="/careers">
                  <Button className="bg-accent hover:bg-accent-hover">
                    Join Our Team
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of a team that's shaping the future of enterprise AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers">
              <Button size="lg" className="bg-accent hover:bg-accent-hover">
                View Open Positions
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;