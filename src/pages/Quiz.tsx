
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, ArrowLeft, MapPin, BookOpen, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    educationLevel: '',
    fieldOfStudy: '',
    preferredCountries: [],
    budget: '',
    careerGoals: '',
    englishProficiency: '',
    workExperience: ''
  });
  
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 6;

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 
    'Germany', 'Netherlands', 'France', 'Ireland', 'New Zealand', 'Singapore'
  ];

  const handleCountryChange = (country: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferredCountries: checked 
        ? [...prev.preferredCountries, country]
        : prev.preferredCountries.filter(c => c !== country)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendations = () => {
    // Mock recommendations based on form data
    return {
      topCountries: ['Canada', 'Germany', 'Australia'],
      recommendedFields: ['Computer Science', 'Data Science', 'Engineering'],
      estimatedCost: '$25,000 - $40,000/year',
      careerProspects: 'Excellent job market with 85% employment rate',
      nextSteps: [
        'Prepare for IELTS/TOEFL',
        'Research specific universities',
        'Start working on your SOP',
        'Gather financial documents'
      ]
    };
  };

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Recommendations</h1>
            <p className="text-lg text-gray-600">Based on your preferences, here's what we recommend</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  Top Countries for You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.topCountries.map((country, index) => (
                    <div key={country} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">{country}</span>
                      <span className="text-sm text-gray-500">#{index + 1} Match</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-secondary-600" />
                  Recommended Fields
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.recommendedFields.map((field) => (
                    <div key={field} className="p-3 bg-secondary-50 rounded-xl">
                      <span className="font-medium text-secondary-700">{field}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Estimated Costs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600 mb-2">{recommendations.estimatedCost}</p>
                <p className="text-gray-600">Including tuition and living expenses</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Career Prospects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{recommendations.careerProspects}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl border-0 shadow-soft mb-8">
            <CardHeader>
              <CardTitle>Your Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <Button size="lg" className="rounded-2xl" asChild>
              <Link to="/dashboard">
                Save to My Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={() => setShowResults(false)}>
                Retake Quiz
              </Button>
              <Button variant="outline" asChild>
                <Link to="/explore">Explore Countries</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="rounded-2xl border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Find Your Perfect Study Abroad Match</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What's your current education level?</h3>
                <Select value={formData.educationLevel} onValueChange={(value) => setFormData(prev => ({...prev, educationLevel: value}))}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School Graduate</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Which countries interest you most?</h3>
                <p className="text-gray-600">Select all that apply</p>
                <div className="grid grid-cols-2 gap-3">
                  {countries.map((country) => (
                    <label key={country} className="flex items-center space-x-3 p-3 border rounded-xl hover:bg-gray-50 cursor-pointer">
                      <Checkbox 
                        checked={formData.preferredCountries.includes(country)}
                        onCheckedChange={(checked) => handleCountryChange(country, checked)}
                      />
                      <span>{country}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What field would you like to study?</h3>
                <Select value={formData.fieldOfStudy} onValueChange={(value) => setFormData(prev => ({...prev, fieldOfStudy: value}))}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select your field of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="business">Business & Management</SelectItem>
                    <SelectItem value="medicine">Medicine & Healthcare</SelectItem>
                    <SelectItem value="arts">Arts & Design</SelectItem>
                    <SelectItem value="social-sciences">Social Sciences</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What's your budget for studying abroad?</h3>
                <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-20k">Under $20,000/year</SelectItem>
                    <SelectItem value="20k-40k">$20,000 - $40,000/year</SelectItem>
                    <SelectItem value="40k-60k">$40,000 - $60,000/year</SelectItem>
                    <SelectItem value="over-60k">Over $60,000/year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What are your career goals?</h3>
                <Select value={formData.careerGoals} onValueChange={(value) => setFormData(prev => ({...prev, careerGoals: value}))}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select your primary goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="work-abroad">Work abroad after graduation</SelectItem>
                    <SelectItem value="return-home">Return to home country</SelectItem>
                    <SelectItem value="start-business">Start my own business</SelectItem>
                    <SelectItem value="academia">Pursue academia/research</SelectItem>
                    <SelectItem value="undecided">Still deciding</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {currentStep === 6 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">How would you rate your English proficiency?</h3>
                <Select value={formData.englishProficiency} onValueChange={(value) => setFormData(prev => ({...prev, englishProficiency: value}))}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select your English level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="native">Native/Fluent</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 1}
                className="rounded-xl"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Previous
              </Button>
              
              <Button 
                onClick={nextStep}
                className="rounded-xl"
              >
                {currentStep === totalSteps ? 'Get My Recommendations' : 'Next'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
