
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Users, 
  Download,
  ExternalLink,
  Clock,
  Star
} from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Study Guides',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      resources: [
        {
          title: 'Complete IELTS Preparation Guide',
          type: 'PDF Guide',
          description: 'Comprehensive guide covering all 4 modules with practice questions',
          duration: '45 min read',
          rating: 4.9,
          downloads: '12.5k',
          tags: ['IELTS', 'Test Prep', 'English']
        },
        {
          title: 'GRE Quantitative Reasoning Mastery',
          type: 'Video Series',
          description: 'Step-by-step video tutorials for GRE quant section',
          duration: '8 hours',
          rating: 4.8,
          downloads: '8.3k',
          tags: ['GRE', 'Mathematics', 'Test Prep']
        }
      ]
    },
    {
      title: 'Application Templates',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      resources: [
        {
          title: 'SOP Templates by Field',
          type: 'Template Pack',
          description: '20+ Statement of Purpose templates for different fields',
          duration: 'Instant access',
          rating: 4.9,
          downloads: '25.7k',
          tags: ['SOP', 'Templates', 'Application']
        },
        {
          title: 'LOR Format Guidelines',
          type: 'Document',
          description: 'Professional LOR formats with examples',
          duration: '15 min read',
          rating: 4.7,
          downloads: '18.2k',
          tags: ['LOR', 'References', 'Application']
        }
      ]
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      color: 'from-purple-500 to-purple-600',
      resources: [
        {
          title: 'Visa Interview Success Masterclass',
          type: 'Video Course',
          description: 'Complete guide to acing your student visa interview',
          duration: '2.5 hours',
          rating: 4.9,
          downloads: '15.8k',
          tags: ['Visa', 'Interview', 'Tips']
        },
        {
          title: 'University Application Walkthrough',
          type: 'Video Tutorial',
          description: 'Step-by-step application process for top universities',
          duration: '1.5 hours',
          rating: 4.8,
          downloads: '22.1k',
          tags: ['Application', 'Universities', 'Process']
        }
      ]
    },
    {
      title: 'Community Resources',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      resources: [
        {
          title: 'Student Success Stories',
          type: 'Case Studies',
          description: 'Real stories from students who made it abroad',
          duration: '20 min read',
          rating: 4.9,
          downloads: '9.7k',
          tags: ['Stories', 'Inspiration', 'Success']
        },
        {
          title: 'Country-wise Student Groups',
          type: 'Community Access',
          description: 'Connect with students going to your target country',
          duration: 'Ongoing',
          rating: 4.6,
          downloads: '5.2k',
          tags: ['Community', 'Networking', 'Support']
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'Complete Study Abroad Handbook 2024',
      description: 'Everything you need to know about studying abroad in one comprehensive guide',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop',
      type: 'E-book',
      size: '15 MB',
      pages: '127 pages',
      downloads: '45.2k'
    },
    {
      title: 'Scholarship Database Access',
      description: 'Curated list of 1000+ scholarships with application deadlines and requirements',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop',
      type: 'Database',
      size: 'Online Access',
      pages: '1000+ entries',
      downloads: '32.8k'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Study Abroad Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free guides, templates, and resources to help you navigate every step of your study abroad journey. 
            From test prep to visa applications, we've got you covered.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <Badge variant="outline" className="mt-2">{resource.type}</Badge>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>{resource.downloads} downloads</div>
                    </div>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{resource.size}</span>
                    <span>{resource.pages}</span>
                  </div>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <Badge variant="outline" className="mt-2">{resource.type}</Badge>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {resource.rating}
                          </div>
                          <div>{resource.downloads} downloads</div>
                        </div>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {resource.duration}
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button className="flex-1">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" size="icon">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get Weekly Resources
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to our newsletter and get the latest study abroad resources delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto space-x-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
