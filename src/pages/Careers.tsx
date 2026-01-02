import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Coffee,
  Laptop,
  GraduationCap,
  Briefcase,
  Filter
} from 'lucide-react';
import teamOffice from '@/assets/team-office.jpg';

const Careers = () => {
  const { toast } = useToast();
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');

  // Quick Application form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!coverLetterFile) {
      toast({ title: 'Please attach a PDF cover letter.', variant: 'destructive' });
      return;
    }

    if (coverLetterFile.type !== 'application/pdf') {
      toast({ title: 'Cover letter must be a PDF file.', variant: 'destructive' });
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('areaOfInterest', areaOfInterest);
      formData.append('coverLetter', coverLetterFile);

      const apiBase = (import.meta.env.VITE_API_URL as string) ?? 'http://localhost:4000';
      const res = await fetch(`${apiBase}/api/apply`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Server error');
      }

      toast({ title: 'Application Submitted!', description: "Thank you for your interest. We'll review your application and get back to you soon." });
      // reset
      setFirstName('');
      setLastName('');
      setEmail('');
      setAreaOfInterest('');
      setCoverLetterFile(null);
      const fi = document.getElementById('coverLetter') as HTMLInputElement | null;
      if (fi) fi.value = '';
    } catch (err: any) {
      console.error(err);
      toast({ title: 'Submission failed', description: err?.message ?? 'An error occurred', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.',
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policy.',
    },
    {
      icon: Laptop,
      title: 'Latest Technology',
      description: 'Top-tier equipment and access to cutting-edge AI tools and platforms.',
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Conference budget, online courses, and internal training programs.',
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150,000 - $200,000',
      description: 'Build and deploy AI models at scale for enterprise clients.',
      requirements: ['5+ years ML experience', 'Python/TensorFlow', 'Cloud platforms'],
    },
    {
      id: 2,
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Drive product strategy for our AI-enabled enterprise solutions.',
      requirements: ['Product management experience', 'AI/ML knowledge', 'Enterprise software'],
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Analyze complex datasets and develop predictive models.',
      requirements: ['PhD/MS in quantitative field', 'Statistical modeling', 'Python/R'],
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110,000 - $150,000',
      description: 'Manage infrastructure and deployment pipelines for AI applications.',
      requirements: ['Kubernetes/Docker', 'AWS/GCP', 'CI/CD pipelines'],
    },
    {
      id: 5,
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100,000 - $140,000',
      description: 'Design intuitive interfaces for complex AI-powered applications.',
      requirements: ['Enterprise UX experience', 'Design systems', 'User research'],
    },
    {
      id: 6,
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$90,000 - $130,000 + Commission',
      description: 'Technical sales support for enterprise AI solution implementations.',
      requirements: ['Technical sales experience', 'Enterprise software', 'Presentation skills'],
    },
  ];

  const filteredPositions = openPositions.filter(position => {
    const locationMatch = filterLocation === 'all' || position.location.includes(filterLocation) || position.location === 'Remote';
    const departmentMatch = filterDepartment === 'all' || position.department === filterDepartment;
    return locationMatch && departmentMatch;
  });

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
            Join the AI Revolution
          </h1>
          <p className="text-xl opacity-90">
            Build the future of enterprise AI with a team of passionate innovators 
            who are transforming industries worldwide.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Technaptix?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Technaptix, we believe that the best AI solutions come from diverse, talented teams 
                working together to solve real-world problems. Join us in shaping the future of enterprise AI.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Work on cutting-edge AI projects with global impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Collaborate with world-class AI researchers and engineers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Competitive compensation and comprehensive benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Remote-first culture with flexible working arrangements</span>
                </div>
              </div>
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

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-muted-foreground">
              We take care of our team so they can focus on building amazing AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Opportunities</h2>
            <p className="text-xl text-muted-foreground">
              As we grow, we'll be looking for talented individuals to join our team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
                <p className="text-muted-foreground mb-6">
                  We're a growing startup with exciting opportunities ahead. Join our talent pool 
                  to be notified when positions become available.
                </p>
                <Button className="bg-accent hover:bg-accent-hover">
                  Join Talent Pool
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Internships</h3>
                <p className="text-muted-foreground mb-6">
                  We offer internship opportunities for students and recent graduates 
                  passionate about AI and technology.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  Apply for Internship
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Application</h2>
            <p className="text-xl text-muted-foreground">
              Interested in joining our team? Send us your information and we'll be in touch.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input required value={firstName} onChange={(e: any) => setFirstName(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input required value={lastName} onChange={(e: any) => setLastName(e.target.value)} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" required value={email} onChange={(e: any) => setEmail(e.target.value)} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Area of Interest</label>
                  <Select value={areaOfInterest} onValueChange={(v) => setAreaOfInterest(v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Software Engineering</SelectItem>
                      <SelectItem value="ai-ml">AI/Machine Learning</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="product">Product Management</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="sales">Sales & Marketing</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cover Letter (PDF)</label>
                  <input
                    id="coverLetter"
                    name="coverLetter"
                    accept="application/pdf"
                    required
                    type="file"
                    onChange={(e) => setCoverLetterFile(e.target.files?.[0] ?? null)}
                    className="block w-full text-sm text-muted-foreground"
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent-hover" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;