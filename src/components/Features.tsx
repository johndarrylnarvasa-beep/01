import React from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  CreditCard, 
  Zap, 
  Wrench, 
  Shield, 
  Bell,
  Star,
  BarChart3,
  Users,
  Home
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Property Search',
      description: 'Find boarding houses using advanced filters for location, price, amenities, and ratings.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Location Mapping',
      description: 'Interactive maps showing properties near schools and workplaces with distance calculations.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Calendar,
      title: 'Real-time Availability',
      description: 'Check room availability instantly and make reservations with landlord approval.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Digital Payments',
      description: 'Pay rent online through GCash, PayMaya, or PayPal with automatic receipts.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Zap,
      title: 'Utility Tracking',
      description: 'Monitor electricity and water bills with automatic splitting among tenants.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Wrench,
      title: 'Maintenance Requests',
      description: 'Submit and track maintenance issues with direct communication to landlords.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Shield,
      title: 'Visitor Security Log',
      description: 'Digital visitor management with QR code check-ins for enhanced security.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Receive important announcements, reminders, and updates via SMS, email, or push notifications.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Star,
      title: 'Reviews & Ratings',
      description: 'Rate and review properties to help future tenants make informed decisions.',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive reports for landlords showing income, expenses, and occupancy statistics.',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: Users,
      title: 'Multi-User Management',
      description: 'Support for tenants, landlords, and admin users with role-based permissions.',
      color: 'bg-violet-100 text-violet-600'
    },
    {
      icon: Home,
      title: 'Property Listings',
      description: 'Easy-to-use interface for landlords to list properties with photos, pricing, and rules.',
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From finding the perfect boarding house to managing your stay, our comprehensive 
            system handles every aspect of the boarding house experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6`}>
                <feature.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;