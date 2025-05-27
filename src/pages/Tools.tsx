
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Calculator, 
  CheckSquare, 
  MessageSquare, 
  BookOpen, 
  Target,
  PenTool,
  CreditCard,
  Plane
} from 'lucide-react';

const Tools = () => {
  const tools = [
    {
      icon: FileText,
      title: 'SOP Builder',
      description: 'AI-powered Statement of Purpose writer with templates and guidance',
      category: 'Application',
      status: 'Available',
      features: ['AI Writing Assistant', 'University-specific templates', 'Grammar check']
    },
    {
      icon: MessageSquare,
      title: 'LOR Generator',
      description: 'Create compelling Letters of Recommendation with professional templates',
      category: 'Application',
      status: 'Available',
      features: ['Multiple formats', 'Professor templates', 'Industry-specific']
    },
    {
      icon: Calculator,
      title: 'Cost Calculator',
      description: 'Calculate total study abroad costs including tuition, living, and travel',
      category: 'Finance',
      status: 'Available',
      features: ['Country-wise breakdown', 'Currency converter', 'Budget planner']
    },
    {
      icon: CreditCard,
      title: 'Loan Finder',
      description: 'Find and compare education loans from top providers',
      category: 'Finance',
      status: 'Available',
      features: ['Interest rate comparison', 'Eligibility checker', 'Application tracking']
    },
    {
      icon: CheckSquare,
      title: 'Application Tracker',
      description: 'Track your applications across multiple universities',
      category: 'Management',
      status: 'Available',
      features: ['Deadline reminders', 'Document checklist', 'Status updates']
    },
    {
      icon: Target,
      title: 'IELTS Prep',
      description: 'Comprehensive IELTS preparation with practice tests',
      category: 'Test Prep',
      status: 'Coming Soon',
      features: ['Mock tests', 'Speaking practice', 'Score prediction']
    },
    {
      icon: BookOpen,
      title: 'GRE/GMAT Prep',
      description: 'Standardized test preparation with adaptive learning',
      category: 'Test Prep',
      status: 'Coming Soon',
      features: ['Adaptive practice', 'Video lessons', 'Progress tracking']
    },
    {
      icon: PenTool,
      title: 'Visa Interview Prep',
      description: 'Practice visa interviews with AI-powered mock sessions',
      category: 'Visa',
      status: 'Beta',
      features: ['Country-specific questions', 'AI feedback', 'Confidence building']
    },
    {
      icon: Plane,
      title: 'Pre-Departure Checklist',
      description: 'Complete checklist for your journey to study abroad',
      category: 'Travel',
      status: 'Available',
      features: ['Packing lists', 'Document verification', 'Airport guidance']
    }
  ];

  const categories = ['All', 'Application', 'Finance', 'Test Prep', 'Visa', 'Management', 'Travel'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Beta': return 'bg-yellow-100 text-yellow-800';
      case 'Coming Soon': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Study Abroad Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in your study abroad journey. From application prep to visa guidance, 
            we've got the tools to make your dreams come true.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(tool.status)}`}>
                    {tool.status}
                  </Badge>
                </div>
                <CardDescription className="mt-3">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full" 
                    disabled={tool.status === 'Coming Soon'}
                  >
                    {tool.status === 'Coming Soon' ? 'Coming Soon' : 
                     tool.status === 'Beta' ? 'Try Beta' : 'Use Tool'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need a Custom Tool?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Can't find what you're looking for? Let us know what tools would help your study abroad journey.
          </p>
          <Button size="lg" variant="secondary">
            Request a Tool
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
