import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { ArrowRight, Brain, BarChart3, Shield, Zap, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '@/assets/hero-bg.jpg';
import intellycaPreview from '@/assets/intellyca-preview.jpg';
import teamOffice from '@/assets/team-office.jpg';
import aiSolutions from '@/assets/ai-solutions.jpg';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    // Services grid animation
    gsap.fromTo(servicesRef.current?.children || [], 
      { opacity: 0, y: 80, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats counter animation
    gsap.fromTo(statsRef.current?.children || [], 
      { opacity: 0, scale: 0.5 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Product section animation
    gsap.fromTo(productRef.current, 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: productRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Expert guidance on AI adoption and implementation strategies across all industries.',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
    },
    {
      icon: Shield,
      title: 'AI Governance & Ethics',
      description: 'Ensure responsible AI deployment with comprehensive governance frameworks.',
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization.',
    },
    {
      icon: Users,
      title: 'Custom AI Solutions',
      description: 'Bespoke AI applications designed specifically for your business needs.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Enhance efficiency and ROI through AI-driven performance improvements.',
    },
  ];

  const stats = [
    { number: '2025', label: 'Founded' },
    { number: '1', label: 'Core Product' },
    { number: '100%', label: 'AI-Powered' },
    { number: '24/7', label: 'Support Available' },
  ];


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center gradient-hero">
        <div className="absolute inset-0 parallax-float opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-neon/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/15 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <motion.div 
            className="text-center text-foreground"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Transform Your Business with
              <span className="block text-gradient mt-2">AI-First Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              Technaptix delivers cutting-edge AI and data solutions for enterprises across all industries, 
              driving innovation and competitive advantage in the digital age.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 neon-border">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scale-in">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 glow-effect">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI services that drive real business value.
            </p>
          </motion.div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift gradient-card border-0 glow-effect">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 glow-effect">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground neon-border">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={productRef}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Intellyca
                <span className="block text-gradient">AI-Enabled ERP Analytics</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our flagship product transforms traditional ERP systems with advanced AI analytics, 
                providing real-time insights and predictive capabilities that drive smarter business decisions.
              </p>
              <motion.ul 
                className="space-y-3 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  'Real-time business intelligence',
                  'Predictive analytics and forecasting', 
                  'Seamless ERP integration',
                  'Customizable dashboards and reports'
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full glow-effect"></div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <div>
                <Link to="/products#intellyca">
                  <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground glow-effect">
                    Explore Intellyca
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="parallax-float"
            >
              <img 
                src={intellycaPreview} 
                alt="Intellyca Dashboard Preview" 
                className="rounded-lg shadow-2xl glow-effect"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl parallax-float"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-neon/30 rounded-full blur-2xl parallax-float"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the future of AI-powered business intelligence with our innovative solutions.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover glow-effect">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground neon-border">
                Learn About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
