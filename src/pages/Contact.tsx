import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you with your study abroad journey. Reach out to us anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your question or how we can help..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                    <p className="text-gray-600">support@altvis.com</p>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                    <p className="text-gray-600">Available on our website</p>
                    <p className="text-sm text-gray-500 mt-1">Instant support during business hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-600">123 Education Street<br />New York, NY 10001</p>
                    <p className="text-sm text-gray-500 mt-1">Visit by appointment only</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How much does Altvis cost?</h3>
                <p className="text-gray-600">Altvis is completely free to use! We make money through partnerships with universities and service providers.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Which countries do you support?</h3>
                <p className="text-gray-600">We support all major study destinations including USA, Canada, UK, Australia, Germany, and many more.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can you guarantee admission?</h3>
                <p className="text-gray-600">While we can't guarantee admission, our tools and guidance significantly improve your chances of success.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you help with visa applications?</h3>
                <p className="text-gray-600">Yes! We provide comprehensive visa guidance, document checklists, and interview preparation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;