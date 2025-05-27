
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Users, 
  CheckCircle, 
  Star, 
  Globe, 
  BookOpen, 
  FileText, 
  Plane 
} from 'lucide-react';

const Landing = () => {
  const steps = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Think",
      description: "Discover your study abroad potential"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research", 
      description: "Explore countries, universities & courses"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Apply",
      description: "Build applications with AI assistance"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Visa",
      description: "Navigate visa requirements smoothly"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Fly",
      description: "Prepare for departure & arrival"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      university: "University of Toronto",
      image: "/api/placeholder/60/60",
      text: "StudyBridge made my Canadian dream a reality. The step-by-step guidance was invaluable!",
      rating: 5
    },
    {
      name: "Raj Patel", 
      university: "TU Delft",
      image: "/api/placeholder/60/60",
      text: "From finding the right program to visa prep, everything was so well organized. Highly recommend!",
      rating: 5
    },
    {
      name: "Maria Santos",
      university: "University of Melbourne", 
      image: "/api/placeholder/60/60",
      text: "The SOP builder and community support helped me secure admission to my dream university.",
      rating: 5
    }
  ];

  const partners = [
    "IELTS", "GRE", "TOEFL", "British Council", "IDP", "Kaplan", "Prodigy Finance", "MPOWER"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-inter">
              From Dream to Departure
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your Complete Study Abroad Companion
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Navigate your entire international education journey with confidence. From choosing the right country to stepping off the plane.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-4 rounded-2xl" asChild>
                <Link to="/quiz">
                  Find My Perfect Country & Course
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-2xl" asChild>
                <Link to="/dashboard">
                  Sign Up for Free Dashboard
                </Link>
              </Button>
            </div>
          </div>

          {/* Value Proposition Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {steps.map((step, index) => (
              <Card key={step.title} className="text-center p-6 rounded-2xl border-0 shadow-soft hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 mx-auto mt-4 hidden lg:block" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, guided, and personalized — just the way studying abroad should be
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 rounded-2xl border-0 shadow-soft text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Discover</h3>
                <p className="text-gray-600">Take our smart quiz to find countries, universities, and courses that match your goals, budget, and preferences.</p>
              </CardContent>
            </Card>

            <Card className="p-8 rounded-2xl border-0 shadow-soft text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Prepare</h3>
                <p className="text-gray-600">Use our AI-powered tools to build SOPs, prepare for tests, plan finances, and track your application progress.</p>
              </CardContent>
            </Card>

            <Card className="p-8 rounded-2xl border-0 shadow-soft text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Apply</h3>
                <p className="text-gray-600">Submit applications, get visa guidance, and prepare for departure with our comprehensive support system.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of students who've achieved their study abroad dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 rounded-2xl border-0 shadow-soft">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/photo-${1494790108755 + index}-40e76d47acd4?w=60&h=60&fit=crop&crop=face`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.university}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">Trusted by partners worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-gray-500 font-medium text-lg">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who've successfully studied abroad with our guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 rounded-2xl" asChild>
              <Link to="/dashboard">
                Get Your Free Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-2xl bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary-600" asChild>
              <Link to="/quiz">Take the Quiz</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
