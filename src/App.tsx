import { Phone, Star, CheckCircle, Shield, Award, Clock, MapPin, Video, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    workType: '',
    squareFootage: '',
    timeline: '',
    contact: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const serviceAreas = [
    'Spokane Valley', 'Liberty Lake', 'Cheney', 'Airway Heights',
    'Medical Lake', 'Deer Park', 'Mead', 'Otis Orchards',
    'Millwood', 'Dishman', 'Veradale', 'Post Falls'
  ];

  const services = [
    'Deck installation', 'Custom deck design', 'Composite decking',
    'Wood deck construction', 'Deck repair', 'Deck staining',
    'Deck remodeling', 'Deck restoration', 'Deck replacement',
    'Deck railing installation', 'Pergola installation', 'Deck demolition'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#F32232] to-[#040625] text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base font-semibold">
          Up to $500 OFF - Limited Time Offer! <span className="ml-2 underline cursor-pointer">CLAIM NOW</span>
        </p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://storage.googleapis.com/msgsndr/lw2HWrfP4A5bfayECcUQ/media/68e59c0cce37be34bc495e02.png"
                alt="Romero Decks Logo"
                className="h-14 w-auto"
              />
            </div>

            <nav className="hidden md:flex space-x-8 text-gray-600 font-medium items-center">
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                  className="hover:text-gray-900 transition flex items-center gap-1"
                >
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px] z-50">
                    {services.map((service, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'areas' ? null : 'areas')}
                  className="hover:text-gray-900 transition flex items-center gap-1"
                >
                  Service Areas <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'areas' && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px] z-50">
                    {serviceAreas.map((area, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      >
                        {area}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#process" className="hover:text-gray-900 transition">Our Process</a>
              <a href="#gallery" className="hover:text-gray-900 transition">Gallery</a>
              <a href="#reviews" className="hover:text-gray-900 transition">Reviews</a>
            </nav>

            <div className="text-right">
              <div className="flex items-center justify-end space-x-2" style={{color: '#F32232'}}>
                <Phone className="w-4 h-4" />
                <span className="text-xs text-gray-600">Call now for an instant quote</span>
              </div>
              <a href="tel:5095551234" className="text-lg md:text-2xl font-bold hover:opacity-80 transition" style={{color: '#F32232'}}>
                (509) 555-1234
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Google Reviews Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8">
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-full p-1">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold" style={{color: '#4285F4'}}>G</div>
            </div>
            <span className="text-gray-700 font-medium">Rated 4.9 (132 Google Reviews)</span>
          </div>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4 leading-tight">
          From Worn to Wow. Premium Composite<br className="hidden md:block" /> Decks in Just 5 Days, Guaranteed!
        </h1>

        <p className="text-center text-gray-600 text-lg md:text-xl mb-12 max-w-4xl mx-auto">
          Spokane's trusted experts in custom deck building, repair and restoration.<br className="hidden md:block" />
          Transforming your outdoor space with precision, speed and lasting quality.
        </p>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Before/After Section */}
          <div className="space-y-6">
            {/* Before/After Images with Overlay */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Main After Image */}
                <div className="relative h-[400px] md:h-[500px]">
                  <img
                    src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d34d33ef40ca44a9cbba9f.webp"
                    alt="Beautiful completed composite deck in Spokane"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Before Image Overlay - Top Left - Floating Above */}
              <div className="absolute -top-6 left-4 md:-top-8 md:left-6 bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="w-48 h-32 md:w-56 md:h-36 relative">
                  <img
                    src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3fb26b7f76ccf593674.png"
                    alt="Old worn deck before renovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center py-1">
                    <p className="text-xs font-bold">BEFORE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Customers Choose Us:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">25 Years experience + Fully insured</p>
                    <p className="text-sm text-gray-600">Licensed professionals with comprehensive coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Fast 5-day completion guarantee</p>
                    <p className="text-sm text-gray-600">Most decks completed within a week or less</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Lifetime warranty on materials</p>
                    <p className="text-sm text-gray-600">Premium composite decking backed by manufacturer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">A+ BBB Rating & 132 5-star reviews</p>
                    <p className="text-sm text-gray-600">Spokane's most trusted deck builders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="border-t-4 -mt-8 -mx-8 mb-6" style={{borderColor: '#F32232'}}></div>

              <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Get Your Deck Quote</h2>
              <p className="text-center text-gray-600 mb-8">
                Tell us what you need and we'll provide a custom quote fast, accurate and hassle-free
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    What deck work do you need done? *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent bg-gray-50"
                    style={{'--tw-ring-color': '#F32232'} as React.CSSProperties}
                    value={formData.workType}
                    onChange={(e) => setFormData({...formData, workType: e.target.value})}
                    required
                  >
                    <option value="">Please Choose</option>
                    <option value="new-deck">New Deck Installation</option>
                    <option value="deck-repair">Deck Repair</option>
                    <option value="deck-replacement">Full Deck Replacement</option>
                    <option value="deck-refinish">Deck Refinishing</option>
                    <option value="deck-expansion">Deck Expansion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Estimated square footage of your project? *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent bg-gray-50"
                    style={{'--tw-ring-color': '#F32232'} as React.CSSProperties}
                    value={formData.squareFootage}
                    onChange={(e) => setFormData({...formData, squareFootage: e.target.value})}
                    required
                  >
                    <option value="">Please Choose</option>
                    <option value="under-200">Under 200 sq ft</option>
                    <option value="200-400">200-400 sq ft</option>
                    <option value="400-600">400-600 sq ft</option>
                    <option value="600-800">600-800 sq ft</option>
                    <option value="over-800">Over 800 sq ft</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    How soon do you need help? *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent bg-gray-50"
                    style={{'--tw-ring-color': '#F32232'} as React.CSSProperties}
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    required
                  >
                    <option value="">Please Choose</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">Within a month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    How would you like to get your quote? *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent bg-gray-50"
                    style={{'--tw-ring-color': '#F32232'} as React.CSSProperties}
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    required
                  >
                    <option value="">Please Choose</option>
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="text">Text Message</option>
                    <option value="in-person">In-Person Visit</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg hover:opacity-90"
                  style={{background: 'linear-gradient(to right, #F32232, #040625)'}}
                >
                  Get My Deck Quote
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to receive communications about your project. We respect your privacy.
                </p>
              </form>
            </div>

            {/* Google Review */}
            <div className="mt-6 bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  JM
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">Jennifer Martinez</h4>
                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center text-xs font-bold" style={{color: '#4285F4'}}>G</div>
                  </div>
                  <div className="flex text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Amazing work! They transformed our old deck into a beautiful outdoor space in just 4 days. The crew was professional, clean, and the quality is outstanding. Highly recommend!"
                  </p>
                  <p className="text-xs text-gray-400 mt-2">2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section id="process" className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Simple 4-Step Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From consultation to completion, we make building your dream deck effortless</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F32232] to-[#040625] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Consultation</h3>
              <p className="text-gray-600">We visit your property, discuss your vision, and provide an accurate quote on the spot</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F32232] to-[#040625] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Design</h3>
              <p className="text-gray-600">Our team creates a detailed plan tailored to your space, style preferences, and budget</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F32232] to-[#040625] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Installation</h3>
              <p className="text-gray-600">Our licensed crew builds your deck with precision using premium materials, typically in 5 days</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F32232] to-[#040625] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Final Walkthrough</h3>
              <p className="text-gray-600">We ensure every detail meets our high standards and you're 100% satisfied before we finish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Deck Services in Spokane</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive deck solutions for every need and budget</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Deck Installation',
              'Custom Deck Design',
              'Composite Decking',
              'Wood Deck Construction',
              'Deck Repair',
              'Deck Staining',
              'Deck Remodeling',
              'Deck Restoration',
              'Deck Replacement',
              'Deck Railing Installation',
              'Deck Lighting Installation',
              'Multi-Level Decks',
              'Deck Waterproofing',
              'Pressure-Treated Decks',
              'Cedar Decking',
              'Pool Deck Construction',
              'Porch Building',
              'Covered Decks',
              'Pergola Installation',
              'Deck Maintenance',
              'Screened-In Decks'
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{service}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery Section */}
      <section id="gallery" className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Transformations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how we've transformed outdoor spaces across Spokane</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3fb26b7f76ccf593674.png"
                    alt="Worn deck before renovation"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    BEFORE
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3eeee4bdc822af1836b.webp"
                    alt="Beautiful completed deck"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Composite Deck Transformation</h3>
                <p className="text-gray-600">Complete deck replacement with premium composite materials - Completed in 4 days</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68e5a02fb0b7219ca2c0b788.png"
                    alt="Old deck before"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    BEFORE
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68e5a0322cc26108f8bdf56d.jpeg"
                    alt="Renovated deck after"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Level Deck Renovation</h3>
                <p className="text-gray-600">Full restoration with modern railings and lighting - Completed in 5 days</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">More Projects We're Proud Of</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  url: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d4d306ee89a7e290287256.webp',
                  title: 'Beautiful deck construction project'
                },
                {
                  url: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d4d3062b5a2b6717c62473.webp',
                  title: 'Premium deck with beautiful railings'
                },
                {
                  url: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d4d306b7ba343182aa2bf5.webp',
                  title: 'Spacious multi-level deck design'
                },
                {
                  url: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d4d25235480d6977fda0b1.webp',
                  title: 'Custom deck with integrated features'
                },
                {
                  url: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d4d3062c411b9c74d566fb.webp',
                  title: 'Professional deck construction'
                },
                {
                  url: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d4d306ee89a78a33287250.webp',
                  title: 'Elegant deck with modern design'
                },
                {
                  url: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d4d30635480d1583fdb343.webp',
                  title: 'Luxury outdoor living space'
                },
                {
                  url: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d4d2522b5a2baa82c6141e.webp',
                  title: 'Quality craftsmanship deck project'
                },
                {
                  url: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d4d306ee89a75381287254.webp',
                  title: 'Beautiful deck with premium materials'
                }
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                  <img
                    src={project.url}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold">{project.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proudly Serving Spokane & Surrounding Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional deck building services throughout the Greater Spokane region</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <MapPin className="w-12 h-12 text-[#F32232]" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              {[
                'Spokane',
                'Spokane Valley',
                'Liberty Lake',
                'Cheney',
                'Medical Lake',
                'Airway Heights',
                'Mead',
                'Deer Park',
                'Nine Mile Falls',
                'Otis Orchards',
                'Millwood',
                'Greenacres'
              ].map((city, index) => (
                <div key={index} className="py-3 px-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 font-medium">{city}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Don't see your area? <a href="tel:5095551234" className="text-[#F32232] font-semibold hover:underline">Call us</a> - we may still service your location!
            </p>
          </div>
        </div>
      </section>

      {/* About Us Video Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Romero Decks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Learn about our commitment to quality, craftsmanship, and customer satisfaction</p>
          </div>

          <div className="rounded-2xl shadow-2xl overflow-hidden aspect-video relative">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3eeee4bdc822af1836b.webp"
            >
              <source src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3c0e6849c3d8aa2adfb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F32232] mb-2">25+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F32232] mb-2">1000+</div>
              <p className="text-gray-600 font-medium">Decks Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F32232] mb-2">132</div>
              <p className="text-gray-600 font-medium">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="reviews" className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
              <span className="text-gray-600">out of 5 based on 132 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Thompson',
                initials: 'ST',
                date: '1 week ago',
                review: 'Romero Decks exceeded our expectations! They completed our 400 sq ft composite deck in just 4 days. The crew was professional, respectful of our property, and the quality is absolutely top-notch. Our backyard is now our favorite place to be!'
              },
              {
                name: 'Michael Chen',
                initials: 'MC',
                date: '2 weeks ago',
                review: 'After getting quotes from 5 different companies, Romero Decks offered the best value and timeline. They were upfront about everything, no hidden costs. The deck looks amazing and has already survived its first Spokane winter perfectly.'
              },
              {
                name: 'Jennifer Martinez',
                initials: 'JM',
                date: '2 weeks ago',
                review: 'Amazing work! They transformed our old deck into a beautiful outdoor space in just 4 days. The crew was professional, clean, and the quality is outstanding. Highly recommend!'
              },
              {
                name: 'David Rodriguez',
                initials: 'DR',
                date: '3 weeks ago',
                review: 'We had an old wooden deck that was falling apart. Romero Decks replaced it with a gorgeous composite deck that requires zero maintenance. The team showed up on time every day and left our yard cleaner than they found it. Worth every penny!'
              },
              {
                name: 'Emily Johnson',
                initials: 'EJ',
                date: '1 month ago',
                review: 'Professional from start to finish. The consultation was thorough, the quote was detailed and fair, and the installation was flawless. Our multi-level deck is now the envy of the neighborhood. Thank you Romero Decks!'
              },
              {
                name: 'Robert Williams',
                initials: 'RW',
                date: '1 month ago',
                review: 'Hired Romero Decks for a complete deck renovation. They handled everything from permits to cleanup. Communication was excellent throughout the project. The finished deck is beautiful and exactly what we wanted. Highly recommended!'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {review.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="w-5 h-5 bg-white rounded flex items-center justify-center text-xs font-bold" style={{color: '#4285F4'}}>G</div>
                    </div>
                    <div className="flex text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{review.review}</p>
                <p className="text-xs text-gray-400 mt-3">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get straight answers to common questions about our deck services</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How much does a new deck cost?',
                answer: 'Deck costs vary based on size, materials, and complexity. Typically, composite decks range from $35-60 per square foot, while wood decks run $25-45 per square foot. We provide free, detailed quotes with no hidden fees. Most of our projects range from $8,000 to $25,000 for complete installations.'
              },
              {
                question: 'How long does it take to build a deck?',
                answer: 'Most residential decks are completed in 3-5 days. The timeline depends on deck size, design complexity, and weather conditions. We guarantee completion within the agreed timeframe and keep you updated throughout the process.'
              },
              {
                question: 'Do I need a permit for my deck?',
                answer: 'In Spokane, most decks require permits, especially if they\'re over 30 inches high or attached to your home. We handle all permit applications and inspections as part of our service, so you don\'t have to worry about the paperwork.'
              },
              {
                question: 'What\'s better: composite or wood decking?',
                answer: 'Composite decking requires virtually no maintenance, resists fading and staining, and lasts 25+ years. Wood decking has a natural look and lower upfront cost but requires annual staining/sealing. We help you choose based on your budget, aesthetic preferences, and maintenance willingness.'
              },
              {
                question: 'Do you offer warranties?',
                answer: 'Yes! We provide a 5-year workmanship warranty on all installations. Composite materials come with manufacturer warranties ranging from 25 years to lifetime. We stand behind our work 100%.'
              },
              {
                question: 'Can you repair my existing deck?',
                answer: 'Absolutely! We handle everything from minor repairs to complete deck restoration. During our free consultation, we assess your deck\'s condition and recommend the most cost-effective solution, whether that\'s repair, refinishing, or replacement.'
              },
              {
                question: 'What areas do you serve?',
                answer: 'We serve Spokane and all surrounding areas including Spokane Valley, Liberty Lake, Cheney, Medical Lake, Airway Heights, and beyond. If you\'re in the Greater Spokane region, we likely serve your area. Call us to confirm!'
              },
              {
                question: 'Do you do custom deck designs?',
                answer: 'Yes! Every deck we build is custom-designed for your space and lifestyle. Whether you want multi-levels, built-in seating, pergolas, lighting, or unique features, our team brings your vision to life with detailed 3D renderings before we start.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-[#F32232] to-[#040625] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl text-white mb-8 opacity-90">Get your free quote today and see why Spokane trusts Romero Decks</p>
          <a
            href="tel:5095551234"
            className="inline-block bg-white text-[#F32232] font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Call Now: (509) 555-1234
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4 relative inline-block">
                <img
                  src="https://storage.googleapis.com/msgsndr/lw2HWrfP4A5bfayECcUQ/media/68e59c0c06b06d42aebd42e4.png"
                  alt="Romero Decks Logo"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-sm leading-relaxed">
                Spokane's premier deck building company with 25+ years of experience. Licensed, insured, and committed to excellence.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#process" className="hover:text-white transition">Our Process</a></li>
                <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
                <li><a href="#reviews" className="hover:text-white transition">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
              <p className="text-sm mb-2">Spokane, WA</p>
              <p className="text-sm mb-2">
                <a href="tel:5095551234" className="hover:text-white transition">(509) 555-1234</a>
              </p>
              <p className="text-sm">Licensed & Insured</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Romero Decks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
