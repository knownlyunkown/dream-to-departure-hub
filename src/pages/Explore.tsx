
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, DollarSign, GraduationCap, Heart, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [savedCountries, setSavedCountries] = useState<string[]>([]);

  const countries = [
    {
      id: 'canada',
      name: 'Canada',
      region: 'North America',
      tuitionRange: '$15,000 - $35,000',
      livingCost: '$12,000 - $18,000',
      topUniversities: ['University of Toronto', 'UBC', 'McGill University'],
      prOptions: 'Excellent',
      popularFields: ['Computer Science', 'Engineering', 'Business'],
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56cd72b?w=400&h=250&fit=crop',
      highlights: ['Work while studying', 'Post-graduation work permit', 'Pathway to PR']
    },
    {
      id: 'germany',
      name: 'Germany',
      region: 'Europe',
      tuitionRange: 'Free - €3,000',
      livingCost: '€8,000 - €12,000',
      topUniversities: ['TU Munich', 'Heidelberg University', 'TU Berlin'],
      prOptions: 'Good',
      popularFields: ['Engineering', 'Computer Science', 'Medicine'],
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop',
      highlights: ['Low/No tuition fees', 'Strong job market', 'EU work opportunities']
    },
    {
      id: 'australia',
      name: 'Australia',
      region: 'Oceania',
      tuitionRange: '$20,000 - $45,000',
      livingCost: '$18,000 - $25,000',
      topUniversities: ['University of Melbourne', 'ANU', 'University of Sydney'],
      prOptions: 'Excellent',
      popularFields: ['Medicine', 'Engineering', 'IT'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      highlights: ['High quality of life', 'Work rights', 'Research opportunities']
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      region: 'Europe',
      tuitionRange: '£15,000 - £38,000',
      livingCost: '£12,000 - £18,000',
      topUniversities: ['Oxford', 'Cambridge', 'Imperial College'],
      prOptions: 'Limited',
      popularFields: ['Business', 'Engineering', 'Arts'],
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop',
      highlights: ['World-class education', 'Historic universities', 'Graduate visa available']
    },
    {
      id: 'netherlands',
      name: 'Netherlands',
      region: 'Europe',
      tuitionRange: '€8,000 - €20,000',
      livingCost: '€10,000 - €15,000',
      topUniversities: ['University of Amsterdam', 'TU Delft', 'Erasmus University'],
      prOptions: 'Good',
      popularFields: ['Engineering', 'Business', 'Social Sciences'],
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=250&fit=crop',
      highlights: ['English-taught programs', 'Innovative education', 'Central European location']
    },
    {
      id: 'singapore',
      name: 'Singapore',
      region: 'Asia',
      tuitionRange: '$25,000 - $45,000',
      livingCost: '$15,000 - $20,000',
      topUniversities: ['NUS', 'NTU', 'SMU'],
      prOptions: 'Limited',
      popularFields: ['Business', 'Engineering', 'Computer Science'],
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop',
      highlights: ['Gateway to Asia', 'Top universities', 'Multicultural environment']
    }
  ];

  const toggleSaved = (countryId: string) => {
    setSavedCountries(prev => 
      prev.includes(countryId) 
        ? prev.filter(id => id !== countryId)
        : [...prev, countryId]
    );
  };

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         country.popularFields.some(field => field.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRegion = selectedRegion === 'all' || country.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Study Destinations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover countries, universities, and opportunities that match your dreams and budget
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search countries or fields..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>
            
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="North America">North America</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="Oceania">Oceania</SelectItem>
                <SelectItem value="Asia">Asia</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedBudget} onValueChange={setSelectedBudget}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Budgets</SelectItem>
                <SelectItem value="low">Under $20,000</SelectItem>
                <SelectItem value="medium">$20,000 - $40,000</SelectItem>
                <SelectItem value="high">Over $40,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCountries.map((country) => (
            <Card key={country.id} className="rounded-2xl border-0 shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={country.image} 
                  alt={country.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => toggleSaved(country.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  {savedCountries.includes(country.id) ? (
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                  ) : (
                    <Bookmark className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {country.region}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">{country.name}</span>
                  <Badge 
                    variant={country.prOptions === 'Excellent' ? 'default' : 
                            country.prOptions === 'Good' ? 'secondary' : 'outline'}
                  >
                    PR: {country.prOptions}
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <GraduationCap className="w-4 h-4 text-primary-600" />
                      <span className="font-medium">Tuition</span>
                    </div>
                    <p className="text-gray-600">{country.tuitionRange}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <DollarSign className="w-4 h-4 text-secondary-600" />
                      <span className="font-medium">Living Cost</span>
                    </div>
                    <p className="text-gray-600">{country.livingCost}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Top Universities</h4>
                  <div className="space-y-1">
                    {country.topUniversities.slice(0, 2).map((uni, index) => (
                      <p key={index} className="text-sm text-gray-600">• {uni}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Popular Fields</h4>
                  <div className="flex flex-wrap gap-1">
                    {country.popularFields.map((field, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {field}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Key Highlights</h4>
                  <div className="space-y-1">
                    {country.highlights.slice(0, 2).map((highlight, index) => (
                      <p key={index} className="text-sm text-gray-600">• {highlight}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full rounded-xl" asChild>
                    <Link to={`/country/${country.id}`}>
                      Learn More
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl" asChild>
                    <Link to="/dashboard">
                      Save to Dashboard
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No countries found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Personalized Recommendations?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take our smart quiz to get tailored suggestions based on your goals, budget, and preferences
          </p>
          <Button size="lg" className="rounded-2xl" asChild>
            <Link to="/quiz">
              Take the Quiz
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
