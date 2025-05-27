
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, DollarSign, GraduationCap, TrendingUp } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'range';
  options?: string[];
  min?: number;
  max?: number;
}

interface QuizResult {
  country: string;
  flag: string;
  matchPercentage: number;
  tuitionRange: string;
  livingCost: string;
  topCourses: string[];
  prOptions: string;
  highlights: string[];
}

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 'education_level',
      question: "What's your current education level?",
      type: 'single',
      options: ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD']
    },
    {
      id: 'study_field',
      question: "Which field interests you most?",
      type: 'single',
      options: ['Engineering & Technology', 'Business & Management', 'Medicine & Health Sciences', 'Arts & Humanities', 'Sciences', 'Computer Science']
    },
    {
      id: 'budget',
      question: "What's your annual budget (USD)?",
      type: 'single',
      options: ['Under $20,000', '$20,000 - $40,000', '$40,000 - $60,000', '$60,000+']
    },
    {
      id: 'work_preference',
      question: "Do you want to work while studying?",
      type: 'single',
      options: ['Yes, part-time', 'Yes, full-time during breaks', 'No, focus on studies']
    },
    {
      id: 'post_study_goals',
      question: "What are your post-study goals?",
      type: 'multiple',
      options: ['Work in the country', 'Return home', 'Start my own business', 'Further studies']
    }
  ];

  const mockResults: QuizResult[] = [
    {
      country: 'Canada',
      flag: '🇨🇦',
      matchPercentage: 95,
      tuitionRange: '$15,000 - $35,000',
      livingCost: '$12,000 - $18,000',
      topCourses: ['Computer Science', 'Business Administration', 'Engineering'],
      prOptions: 'Excellent - Express Entry System',
      highlights: ['High-quality education', 'Multicultural environment', 'Post-graduation work permits']
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      matchPercentage: 88,
      tuitionRange: '$0 - $3,000',
      livingCost: '$10,000 - $15,000',
      topCourses: ['Engineering', 'Computer Science', 'Business'],
      prOptions: 'Good - EU Blue Card',
      highlights: ['Low tuition fees', 'Strong economy', 'Research opportunities']
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      matchPercentage: 82,
      tuitionRange: '$20,000 - $45,000',
      livingCost: '$18,000 - $25,000',
      topCourses: ['Medicine', 'Engineering', 'Business'],
      prOptions: 'Very Good - Points System',
      highlights: ['World-class universities', 'Beautiful lifestyle', 'Strong job market']
    }
  ];

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Perfect Study Abroad Matches! 🎉
            </h1>
            <p className="text-lg text-gray-600">
              Based on your preferences, here are the best countries for your study abroad journey
            </p>
          </div>

          <div className="space-y-6">
            {mockResults.map((result, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{result.flag}</span>
                      <div>
                        <CardTitle className="text-xl">{result.country}</CardTitle>
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {result.matchPercentage}% Match
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-90">Match Score</div>
                      <div className="text-2xl font-bold">{result.matchPercentage}%</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <DollarSign className="w-5 h-5 text-primary-600 mt-1" />
                        <div>
                          <div className="font-semibold">Annual Tuition</div>
                          <div className="text-gray-600">{result.tuitionRange}</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                        <div>
                          <div className="font-semibold">Living Cost</div>
                          <div className="text-gray-600">{result.livingCost}</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="w-5 h-5 text-primary-600 mt-1" />
                        <div>
                          <div className="font-semibold">PR Opportunities</div>
                          <div className="text-gray-600">{result.prOptions}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold mb-2">Top Courses</div>
                        <div className="flex flex-wrap gap-2">
                          {result.topCourses.map((course, i) => (
                            <Badge key={i} variant="outline">{course}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold mb-2">Why {result.country}?</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {result.highlights.map((highlight, i) => (
                            <li key={i}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t flex space-x-3">
                    <Button className="flex-1">
                      Explore Universities in {result.country}
                    </Button>
                    <Button variant="outline">Save to Dashboard</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button onClick={restartQuiz} variant="outline" size="lg">
              Take Quiz Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Perfect Study Destination
          </h1>
          <p className="text-lg text-gray-600">
            Answer a few questions to get personalized country and course recommendations
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Question {currentStep + 1} of {questions.length}</CardTitle>
              <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestion.type === 'single' && currentQuestion.options && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion.id, option)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                      currentAnswer === option
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'multiple' && currentQuestion.options && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const currentAnswers = currentAnswer || [];
                      const newAnswers = currentAnswers.includes(option)
                        ? currentAnswers.filter((a: string) => a !== option)
                        : [...currentAnswers, option];
                      handleAnswer(currentQuestion.id, newAnswers);
                    }}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                      currentAnswer && currentAnswer.includes(option)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!currentAnswer || (Array.isArray(currentAnswer) && currentAnswer.length === 0)}
              >
                {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
