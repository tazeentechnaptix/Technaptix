import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Zap, 
  Database,
  Eye,
  MessageSquare,
  Brain,
  CheckCircle,
  Star
} from 'lucide-react';
import intellycaPreview from '@/assets/intellyca-preview.jpg';

const Products = () => {
  useEffect(() => {
    if (window.location.hash === '#intellyca') {
      const intellycaSection = document.getElementById('intellyca');
      if (intellycaSection) {
        intellycaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const intellycaFeatures = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep dive into your ERP data with AI-powered analytics and insights.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Forecasting',
      description: 'Forecast business trends and outcomes with machine learning models.',
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Monitor KPIs and business metrics in real-time with intelligent alerts.',
    },
    {
      icon: Shield,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-driven insights.',
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly integrate with existing ERP systems and data sources.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize business processes based on AI recommendations.',
    },
  ];

  const benefits = [
    'Reduce reporting time by 80%',
    'Improve forecast accuracy by 40%',
    'Identify cost savings opportunities',
    'Enhance decision-making speed',
    'Automate routine analytics tasks',
    'Scale insights across departments',
  ];

  const supportedSystems = [
    'SAP ERP', 'Oracle ERP', 'Microsoft Dynamics', 'NetSuite',
    'Salesforce', 'Workday', 'QuickBooks Enterprise', 'Sage'
  ];

  const additionalProducts = [
    {
      icon: MessageSquare,
      title: 'ConversaAI',
      description: 'Enterprise chatbot platform with advanced NLP capabilities.',
      status: 'Available',
      features: ['Multi-language support', 'Custom training', 'API integration'],
    },
    {
      icon: Eye,
      title: 'VisionPro',
      description: 'Computer vision platform for industrial quality control and inspection.',
      status: 'Available',
      features: ['Real-time analysis', 'Defect detection', 'Custom models'],
    },
    {
      icon: Brain,
      title: 'PredictaMax',
      description: 'Predictive maintenance solution for manufacturing and equipment.',
      status: 'Coming Soon',
      features: ['IoT integration', 'Failure prediction', 'Cost optimization'],
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
            AI-Powered Products
          </h1>
          <p className="text-xl opacity-90">
            Cutting-edge AI solutions designed to solve real business challenges 
            and drive measurable results.
          </p>
        </div>
      </section>

      {/* Intellyca Spotlight */}
      <section id="intellyca" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-accent-foreground mb-4">Flagship Product</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intellyca
              <span className="block text-accent">AI-Enabled ERP Analytics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your ERP data into strategic insights with our flagship AI analytics platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={intellycaPreview} 
                alt="Intellyca Dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Revolutionize Your ERP Analytics</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Intellyca seamlessly integrates with your existing ERP systems to provide 
                AI-powered analytics, predictive insights, and automated reporting that transforms 
                how you understand and manage your business.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent-hover">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {intellycaFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Supported Systems */}
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Compatible with Leading ERP Systems
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {supportedSystems.map((system, index) => (
                <div key={index} className="text-center">
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    {system}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Products */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground">
              We're continuously developing new AI solutions to meet evolving business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalProducts.map((product, index) => (
              <Card key={index} className="hover-lift opacity-60">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="secondary">
                      In Development
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <Star className="h-4 w-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    disabled
                  >
                    Notify Me
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Something Custom?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team specializes in building bespoke AI solutions tailored to your specific 
            business requirements and industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-hover">
                Discuss Custom Solution
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;