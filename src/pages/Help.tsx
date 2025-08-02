import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, Users, FileText, CreditCard, Plane, Globe } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: 'Getting Started',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-600',
      faqs: [
        {
          question: 'How do I create an account?',
          answer: 'Click on "Sign Up for Free" or "Dashboard" button and fill out the registration form with your basic information.'
        },
        {
          question: 'Is Altvis really free?',
          answer: 'Yes, Altvis is completely free for students. We earn through partnerships with universities and service providers.'
        },
        {
          question: 'What services does Altvis provide?',
          answer: 'We help with country selection, university research, application building, visa guidance, test prep, and pre-departure support.'
        }
      ]
    },
    {
      title: 'Country & University Search',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-green-100 text-green-600',
      faqs: [
        {
          question: 'How does the country recommendation quiz work?',
          answer: 'Our quiz considers your academic background, budget, career goals, and preferences to suggest the best-fit countries and programs.'
        },
        {
          question: 'Can I save universities to compare later?',
          answer: 'Yes, you can bookmark universities and programs to your dashboard for easy comparison and tracking.'
        },
        {
          question: 'How often is university information updated?',
          answer: 'We update university information, rankings, and requirements regularly to ensure accuracy.'
        }
      ]
    },
    {
      title: 'Applications & Documents',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-600',
      faqs: [
        {
          question: 'How does the SOP builder work?',
          answer: 'Our AI-powered SOP builder guides you through creating compelling statements of purpose with templates and examples.'
        },
        {
          question: 'What documents do I need for applications?',
          answer: 'Common documents include transcripts, test scores, SOP, LORs, CV, and financial statements. Requirements vary by university.'
        },
        {
          question: 'Can you review my application documents?',
          answer: 'We provide automated feedback through our AI tools and connect you with mentors for detailed reviews.'
        }
      ]
    },
    {
      title: 'Financial Planning',
      icon: <CreditCard className="w-6 h-6" />,
      color: 'bg-yellow-100 text-yellow-600',
      faqs: [
        {
          question: 'How do I find scholarships?',
          answer: 'Use our scholarship finder tool that matches you with relevant opportunities based on your profile and chosen programs.'
        },
        {
          question: 'What about education loans?',
          answer: 'We partner with multiple lenders to help you find the best loan options with competitive rates and terms.'
        },
        {
          question: 'How much should I budget for living expenses?',
          answer: 'Our cost calculator provides detailed breakdowns of living expenses for different cities and countries.'
        }
      ]
    },
    {
      title: 'Visa Process',
      icon: <Plane className="w-6 h-6" />,
      color: 'bg-red-100 text-red-600',
      faqs: [
        {
          question: 'When should I apply for my visa?',
          answer: 'Apply for your visa as soon as you receive your admission letter. Processing times vary by country (typically 2-8 weeks).'
        },
        {
          question: 'What documents are needed for visa application?',
          answer: 'Common documents include passport, admission letter, financial proof, medical certificates, and visa application forms.'
        },
        {
          question: 'How do I prepare for the visa interview?',
          answer: 'Use our mock interview simulator and preparation guides to practice common questions and build confidence.'
        }
      ]
    },
    {
      title: 'Community & Support',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-indigo-100 text-indigo-600',
      faqs: [
        {
          question: 'How can I connect with other students?',
          answer: 'Join our community forum to connect with students going to the same university or country.'
        },
        {
          question: 'Can I get mentorship from current students?',
          answer: 'Yes, we connect you with current students and alumni who can provide guidance and insider tips.'
        },
        {
          question: 'What if I need urgent help?',
          answer: 'Contact our support team via live chat, email, or phone. We also have an active community forum for peer support.'
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to your questions and get the support you need for your study abroad journey
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg rounded-2xl"
            />
          </div>
        </div>

        {/* Quick Actions */}
        {!searchQuery && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="rounded-2xl border-0 shadow-soft hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Getting Started Guide</h3>
                <p className="text-sm text-gray-600">New to Altvis? Start here for a complete overview</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
                <p className="text-sm text-gray-600">Need personal assistance? Reach out to our team</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-sm text-gray-600">Watch step-by-step guides for all features</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, index) => (
            <Card key={index} className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                    {category.icon}
                  </div>
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="rounded-2xl border-0 shadow-soft bg-gradient-to-r from-primary-50 to-secondary-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still need help?
              </h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <Button size="lg" className="rounded-2xl">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;