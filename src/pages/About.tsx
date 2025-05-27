
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  Globe,
  TrendingUp,
  MessageCircle,
  Mail
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Students Helped', icon: Users },
    { number: '150+', label: 'Partner Universities', icon: Globe },
    { number: '25+', label: 'Countries Covered', icon: Target },
    { number: '95%', label: 'Success Rate', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Student-First Approach',
      description: 'Every decision we make is centered around what\'s best for our students and their dreams.'
    },
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'We believe every student\'s journey is unique and deserves customized support and advice.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'We maintain the highest standards in all our services, from counseling to application support.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We bring a worldwide view to education, connecting students with opportunities across continents.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      background: 'Former international student advisor at Stanford University',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b606?w=150&h=150&fit=crop&crop=face',
      story: 'Sarah\'s own journey from Malaysia to MIT inspired her to help other students navigate the complex world of international education.'
    },
    {
      name: 'Rajesh Patel',
      role: 'Head of Counseling',
      background: 'PhD in Education, 15+ years in international admissions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      story: 'Rajesh has personally guided over 2000 students to their dream universities across the globe.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Director of Partnerships',
      background: 'Former admissions officer at top US and UK universities',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      story: 'Emma leverages her insider knowledge of university admissions to give students a competitive edge.'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Founded by international students who understood the challenges firsthand'
    },
    {
      year: '2020',
      title: 'First 1000 Students',
      description: 'Helped our first thousand students get admits to top universities'
    },
    {
      year: '2021',
      title: 'Platform Launch',
      description: 'Launched our comprehensive digital platform with AI-powered tools'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded services to cover 25+ countries and 150+ partner universities'
    },
    {
      year: '2023',
      title: 'Community Growth',
      description: 'Built a thriving community of 50,000+ students and alumni'
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Launching AI counselors and expanding to new markets across Asia and Africa'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Making Study Abroad Dreams Come True
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We started StudyBridge because we believe every student deserves the opportunity to pursue 
            world-class education, regardless of where they come from. Our mission is to democratize 
            access to international education through technology, guidance, and community.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">Join Our Community</Button>
            <Button size="lg" variant="outline">Our Story</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Story</h2>
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  From Students, For Students
                </h3>
                <p className="text-gray-600 mb-6">
                  StudyBridge was born from the frustration of navigating the complex world of international 
                  education. Our founders, all former international students themselves, experienced firsthand 
                  the challenges of finding reliable information, understanding application processes, and 
                  making life-changing decisions with limited guidance.
                </p>
                <p className="text-gray-600">
                  Today, we've transformed those challenges into solutions, building a platform that provides 
                  clear guidance, reliable information, and a supportive community for students worldwide.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl h-64 flex items-center justify-center">
                <div className="text-white text-center">
                  <Globe className="w-16 h-16 mx-auto mb-4" />
                  <div className="text-xl font-semibold">Connecting Dreams</div>
                  <div className="text-sm opacity-90">Across Continents</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                  <CardDescription className="mt-2">{member.background}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{event.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Have Questions? We're Here to Help
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Whether you're just starting to think about studying abroad or ready to apply, 
            our team is here to support you every step of the way.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start a Chat
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
