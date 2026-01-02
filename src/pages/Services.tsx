import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp,
  Database,
  Settings,
  MessageSquare,
  Eye,
  Cloud,
  Lock
} from 'lucide-react';
import aiSolutions from '@/assets/ai-solutions.jpg';

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Expert guidance on AI adoption and implementation strategies tailored to your industry.',
      features: ['AI Readiness Assessment', 'Strategic Roadmap Development', 'ROI Analysis', 'Change Management'],
      industries: ['Healthcare', 'Finance', 'Manufacturing', 'Retail'],
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Advanced Analytics', 'Predictive Modeling', 'Real-time Dashboards', 'Data Visualization'],
      industries: ['Banking', 'E-commerce', 'Logistics', 'Energy'],
    },
    {
      icon: Shield,
      title: 'AI Governance & Ethics',
      description: 'Ensure responsible AI deployment with comprehensive governance frameworks.',
      features: ['Ethical AI Guidelines', 'Bias Detection', 'Compliance Monitoring', 'Risk Assessment'],
      industries: ['Government', 'Legal', 'Financial Services', 'Healthcare'],
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization.',
      features: ['RPA Implementation', 'Workflow Optimization', 'Document Processing', 'Task Automation'],
      industries: ['Insurance', 'HR Services', 'Supply Chain', 'Customer Service'],
    },
    {
      icon: Users,
      title: 'Custom AI Solutions',
      description: 'Bespoke AI applications designed specifically for your business needs.',
      features: ['ML Model Development', 'AI Application Design', 'Integration Services', 'Maintenance & Support'],
      industries: ['Technology', 'Media', 'Agriculture', 'Transportation'],
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Enhance efficiency and ROI through AI-driven performance improvements.',
      features: ['Performance Analytics', 'Optimization Algorithms', 'Resource Planning', 'Cost Reduction'],
      industries: ['Operations', 'Supply Chain', 'Manufacturing', 'Logistics'],
    },
  ];

  const additionalServices = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure for AI initiatives.',
    },
    {
      icon: Settings,
      title: 'MLOps & DevOps',
      description: 'Streamline AI model deployment and operational excellence.',
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants for customer engagement.',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for various business applications.',
    },
    {
      icon: Cloud,
      title: 'Cloud AI Migration',
      description: 'Seamless transition of AI workloads to cloud platforms.',
    },
    {
      icon: Lock,
      title: 'AI Security',
      description: 'Comprehensive security solutions for AI systems and data.',
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive AI Services
          </h1>
          <p className="text-xl opacity-90">
            End-to-end AI solutions designed to transform your business operations 
            and drive sustainable growth across all industries.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-muted-foreground">
              Our flagship offerings that drive enterprise transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-accent rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Industries:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.industries.map((industry, industryIndex) => (
                            <Badge key={industryIndex} variant="secondary" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Discovery & Assessment</h3>
                    <p className="text-muted-foreground">
                      Comprehensive analysis of your current state and AI readiness
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Strategy Development</h3>
                    <p className="text-muted-foreground">
                      Custom AI strategy aligned with your business objectives
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Implementation</h3>
                    <p className="text-muted-foreground">
                      Agile deployment with continuous monitoring and optimization
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Support & Evolution</h3>
                    <p className="text-muted-foreground">
                      Ongoing support and continuous improvement of AI solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={aiSolutions} 
                alt="AI Solutions Process" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Services</h2>
            <p className="text-xl text-muted-foreground">
              Additional expertise to support your AI journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover-lift gradient-card border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/products#intellyca">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;