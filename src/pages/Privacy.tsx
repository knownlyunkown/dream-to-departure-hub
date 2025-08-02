import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Users, FileText, Mail } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2024</p>
        </div>

        {/* Quick Overview */}
        <Card className="rounded-2xl border-0 shadow-soft mb-12 bg-gradient-to-r from-primary-50 to-secondary-50">
          <CardContent className="p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Privacy at a Glance</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Secure Data</h3>
                <p className="text-sm text-gray-600">All data encrypted and securely stored</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 text-secondary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Transparent</h3>
                <p className="text-sm text-gray-600">Clear about what we collect and why</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Your Control</h3>
                <p className="text-sm text-gray-600">You control your data and privacy settings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-8">
          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-primary-600" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Name, email address, and phone number</li>
                  <li>• Educational background and academic records</li>
                  <li>• Career goals and study preferences</li>
                  <li>• Financial information for loan and scholarship matching</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Usage Information</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• How you use our platform and features</li>
                  <li>• Pages visited and time spent on each section</li>
                  <li>• Device information and browser type</li>
                  <li>• IP address and location data (if permitted)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-secondary-600" />
                <span>How We Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Platform Services</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Provide personalized university and country recommendations</li>
                  <li>• Match you with relevant scholarships and loan options</li>
                  <li>• Track your application progress and deadlines</li>
                  <li>• Connect you with mentors and other students</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Send important updates about your applications</li>
                  <li>• Notify you of new opportunities and deadlines</li>
                  <li>• Provide customer support and assistance</li>
                  <li>• Share relevant educational content and tips</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-primary-600" />
                <span>Data Protection & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Security Measures</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• End-to-end encryption for all sensitive data</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Secure servers with 24/7 monitoring</li>
                  <li>• Two-factor authentication for account access</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Storage</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Data stored in secure, compliant data centers</li>
                  <li>• Regular backups to prevent data loss</li>
                  <li>• Data retention policies to remove old information</li>
                  <li>• Compliance with international privacy standards</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-secondary-600" />
                <span>Sharing & Third Parties</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">When We Share Information</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• With universities when you submit applications</li>
                  <li>• With loan providers when you apply for financing</li>
                  <li>• With service providers who help operate our platform</li>
                  <li>• When required by law or to protect our users</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">We Never</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Sell your personal information to third parties</li>
                  <li>• Share data without your explicit consent</li>
                  <li>• Use your information for purposes not disclosed</li>
                  <li>• Keep data longer than necessary</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-primary-600" />
                <span>Your Rights & Choices</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">You Have the Right To</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Access all personal information we have about you</li>
                  <li>• Correct any inaccurate or incomplete information</li>
                  <li>• Delete your account and all associated data</li>
                  <li>• Download your data in a portable format</li>
                  <li>• Opt out of marketing communications</li>
                  <li>• Restrict how we process your information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How to Exercise Your Rights</h3>
                <p className="text-gray-600">
                  To exercise any of these rights, contact us at privacy@altvis.com or use the privacy controls in your account settings. We'll respond to your request within 30 days.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="w-6 h-6 text-secondary-600" />
                <span>Contact Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@altvis.com</p>
                <p><strong>Address:</strong> 123 Education Street, New York, NY 10001</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We'll review and update this policy regularly to reflect changes in our practices and applicable laws.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;