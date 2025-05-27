
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  FileText, 
  CheckCircle, 
  Clock, 
  Users, 
  DollarSign, 
  Plane,
  Target,
  GraduationCap,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [overallProgress] = useState(35);

  const milestones = [
    { title: 'Take Quiz', completed: true, date: '2024-01-15' },
    { title: 'Choose Countries', completed: true, date: '2024-01-20' },
    { title: 'Test Prep Started', completed: true, date: '2024-02-01' },
    { title: 'SOP Draft', completed: false, date: null },
    { title: 'Applications Submitted', completed: false, date: null },
    { title: 'Visa Application', completed: false, date: null },
    { title: 'Departure', completed: false, date: null }
  ];

  const savedUniversities = [
    {
      name: 'University of Toronto',
      country: 'Canada',
      program: 'Master of Computer Science',
      deadline: '2024-12-01',
      status: 'Planning to Apply',
      tuition: '$45,000'
    },
    {
      name: 'TU Delft',
      country: 'Netherlands', 
      program: 'MSc Computer Science',
      deadline: '2024-11-15',
      status: 'In Progress',
      tuition: '€18,000'
    },
    {
      name: 'University of Melbourne',
      country: 'Australia',
      program: 'Master of Information Technology',
      deadline: '2024-10-31',
      status: 'Documents Ready',
      tuition: '$42,000'
    }
  ];

  const testProgress = [
    { test: 'IELTS', score: '7.5', target: '8.0', status: 'Completed' },
    { test: 'GRE', score: '315', target: '320', status: 'In Progress' },
    { test: 'TOEFL', score: '-', target: '100', status: 'Not Started' }
  ];

  const recentActivity = [
    { action: 'Saved University of Toronto to wishlist', date: '2 hours ago' },
    { action: 'Completed IELTS practice test', date: '1 day ago' },
    { action: 'Updated SOP draft for Canada applications', date: '3 days ago' },
    { action: 'Scheduled GRE exam for next month', date: '1 week ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      case 'Planning to Apply': return 'bg-yellow-100 text-yellow-700';
      case 'Documents Ready': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah! 👋</h1>
          <p className="text-gray-600">Here's your study abroad journey progress</p>
        </div>

        {/* Progress Overview */}
        <Card className="rounded-2xl border-0 shadow-soft mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary-600" />
              Your Journey Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-gray-900">{overallProgress}% Complete</span>
              <span className="text-sm text-gray-600">Keep going! You're making great progress</span>
            </div>
            <Progress value={overallProgress} className="h-3 mb-6" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                    milestone.completed 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {milestone.completed ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Clock className="w-6 h-6" />
                    )}
                  </div>
                  <p className="text-xs font-medium text-gray-700">{milestone.title}</p>
                  {milestone.date && (
                    <p className="text-xs text-gray-500">{milestone.date}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="universities" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full rounded-2xl p-1 h-auto">
            <TabsTrigger value="universities" className="rounded-xl py-3">Universities</TabsTrigger>
            <TabsTrigger value="tests" className="rounded-xl py-3">Test Prep</TabsTrigger>
            <TabsTrigger value="documents" className="rounded-xl py-3">Documents</TabsTrigger>
            <TabsTrigger value="applications" className="rounded-xl py-3">Applications</TabsTrigger>
            <TabsTrigger value="finances" className="rounded-xl py-3">Finances</TabsTrigger>
            <TabsTrigger value="community" className="rounded-xl py-3">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="universities">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="rounded-2xl border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary-600" />
                      My Saved Universities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {savedUniversities.map((uni, index) => (
                        <div key={index} className="border border-gray-100 rounded-xl p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-900">{uni.name}</h3>
                              <p className="text-sm text-gray-600">{uni.country} • {uni.program}</p>
                            </div>
                            <Badge className={getStatusColor(uni.status)}>
                              {uni.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Deadline:</span>
                              <p className="font-medium">{uni.deadline}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Tuition:</span>
                              <p className="font-medium">{uni.tuition}</p>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline" className="rounded-lg">
                              View Details
                            </Button>
                            <Button size="sm" className="rounded-lg">
                              Start Application
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4 rounded-xl" asChild>
                      <Link to="/explore">
                        + Add More Universities
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="rounded-2xl border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm text-gray-700">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tests">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testProgress.map((test, index) => (
                <Card key={index} className="rounded-2xl border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {test.test}
                      <Badge className={getStatusColor(test.status)}>
                        {test.status}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Current Score</p>
                          <p className="text-2xl font-bold text-primary-600">{test.score}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Target Score</p>
                          <p className="text-2xl font-bold text-secondary-600">{test.target}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button size="sm" className="w-full rounded-lg">
                          Practice Tests
                        </Button>
                        <Button size="sm" variant="outline" className="w-full rounded-lg">
                          Study Materials
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary-600" />
                  Document Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">SOP & Essays</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-xl">
                        <span>Personal Statement - Canada</span>
                        <Badge variant="outline">Draft</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-xl">
                        <span>SOP - Netherlands</span>
                        <Badge className="bg-yellow-100 text-yellow-700">In Review</Badge>
                      </div>
                    </div>
                    <Button className="w-full rounded-xl" asChild>
                      <Link to="/tools/sop">
                        Build New SOP
                      </Link>
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Supporting Documents</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-xl">
                        <span>Academic Transcripts</span>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-xl">
                        <span>Letters of Recommendation</span>
                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-xl">
                        <span>English Test Scores</span>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Application Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center py-8">
                  Start your first application to track progress here.
                </p>
                <Button className="w-full rounded-xl">
                  Start First Application
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finances">
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-secondary-600" />
                  Financial Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Budget Overview</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Total Budget</span>
                        <span className="font-semibold">$60,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Available Funds</span>
                        <span className="font-semibold text-secondary-600">$25,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Funding Needed</span>
                        <span className="font-semibold text-orange-600">$35,000</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Funding Options</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full rounded-xl" asChild>
                        <Link to="/loans">
                          Explore Education Loans
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full rounded-xl">
                        Find Scholarships
                      </Button>
                      <Button variant="outline" className="w-full rounded-xl">
                        Financial Aid Calculator
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community">
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  Community & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Connect with Students</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-primary-50 rounded-xl">
                        <h4 className="font-medium text-primary-700">Canada Study Group</h4>
                        <p className="text-sm text-primary-600">125 members • Join discussions</p>
                      </div>
                      <div className="p-4 bg-secondary-50 rounded-xl">
                        <h4 className="font-medium text-secondary-700">Computer Science Masters</h4>
                        <p className="text-sm text-secondary-600">89 members • Share experiences</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Get Help</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full rounded-xl">
                        Ask the Community
                      </Button>
                      <Button variant="outline" className="w-full rounded-xl">
                        Book 1:1 Counselling
                      </Button>
                      <Button variant="outline" className="w-full rounded-xl" asChild>
                        <Link to="/contact">
                          Contact Support
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
